const test = require('node:test');
const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');
const { createExecutionHostClient } = require('../src/harness/execution-host-client.cjs');

function fixture() {
  const sent = [];
  let forkOptions;
  const child = new EventEmitter();
  child.connected = true;
  child.exitCode = null;
  child.send = message => { sent.push(message); return true; };
  child.disconnect = () => { child.connected = false; };
  child.kill = () => { child.exitCode = 0; };
  const client = createExecutionHostClient({ env: { PATH: '/usr/bin', HOME: '/tmp', ROUTER_SECRET: 'must-not-cross-process' }, forkProcess: (_script, _args, options) => { forkOptions = options; queueMicrotask(() => child.emit('message', { type: 'ready', pid: 1234, instanceId: 'test' })); return child; } });
  return { child, client, get forkOptions() { return forkOptions; }, sent };
}

test('execution host client forwards typed events and resolves the matching run', async () => {
  const context = fixture();
  const events = [];
  try {
    const pending = context.client.runTurn({ botId: 'primary', text: 'hello', onEvent: event => events.push(event) });
    await new Promise(resolve => setImmediate(resolve));
    const request = context.sent.find(message => message.type === 'run');
    assert.ok(request?.requestId);
    assert.deepEqual(request.payload, { botId: 'primary', text: 'hello', history: [], instructions: '', model: 'codexrouter/gateway' });
    assert.equal(context.forkOptions.env.ELECTRON_RUN_AS_NODE, '1');
    assert.equal(context.forkOptions.env.ROUTER_SECRET, undefined);
    context.child.emit('message', { type: 'event', requestId: request.requestId, event: { type: 'text-delta', delta: 'hi' } });
    context.child.emit('message', { type: 'result', requestId: request.requestId, result: { status: 'completed', text: 'hi' } });
    assert.deepEqual(await pending, { status: 'completed', text: 'hi' });
    assert.deepEqual(events, [{ type: 'text-delta', delta: 'hi' }]);
  } finally { context.client.dispose(); }
});

test('execution host callback errors reject and cancel only their request', async () => {
  const context = fixture();
  try {
    const pending = context.client.runTurn({ botId: 'primary', text: 'hello', onEvent: () => { throw new Error('renderer event failed'); } });
    await new Promise(resolve => setImmediate(resolve));
    const request = context.sent.find(message => message.type === 'run');
    context.child.emit('message', { type: 'event', requestId: request.requestId, event: { type: 'assistant-final' } });
    await new Promise(resolve => setImmediate(resolve));
    assert.ok(context.sent.some(message => message.type === 'cancel' && message.requestId === request.requestId));
    context.child.emit('message', { type: 'error', requestId: request.requestId, error: 'cancelled' });
    await assert.rejects(pending, /renderer event failed/);
  } finally { context.client.dispose(); }
});

test('execution host cancellation forwards an abort and rejects the matching run', async () => {
  const context = fixture();
  const controller = new AbortController();
  try {
    const pending = context.client.runTurn({ botId: 'primary', text: 'wait', signal: controller.signal });
    let settled = false;
    pending.finally(() => { settled = true; }).catch(() => {});
    await new Promise(resolve => setImmediate(resolve));
    const request = context.sent.find(message => message.type === 'run');
    controller.abort();
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(settled, false, 'parent waits for the worker to acknowledge cancellation');
    assert.deepEqual(context.sent.find(message => message.type === 'cancel'), { type: 'cancel', requestId: request.requestId });
    context.child.emit('message', { type: 'error', requestId: request.requestId, error: 'cancelled' });
    await assert.rejects(pending, /cancelada/);
  } finally { context.client.dispose(); }
});

test('execution host exit rejects in-flight runs so callers can recover', async () => {
  const context = fixture();
  try {
    const pending = context.client.runTurn({ botId: 'primary', text: 'wait' });
    await new Promise(resolve => setImmediate(resolve));
    context.child.emit('exit', 7, null);
    await assert.rejects(pending, /Execution host exited/);
  } finally { context.client.dispose(); }
});
