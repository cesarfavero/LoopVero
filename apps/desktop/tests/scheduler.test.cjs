const test = require('node:test');
const assert = require('node:assert/strict');
const { RunScheduler } = require('../src/harness/run-scheduler.cjs');

test('runs one task per agent and chooses lanes in priority order', async () => {
  const scheduler = new RunScheduler();
  const order = [];
  let release;
  const blocked = new Promise(resolve => { release = resolve; });
  const first = scheduler.enqueue('agent', async () => { order.push('first'); await blocked; }, { lane: 'background' });
  await new Promise(resolve => setImmediate(resolve));
  const background = scheduler.enqueue('agent', async () => order.push('background'), { lane: 'background' });
  const agent = scheduler.enqueue('agent', async () => order.push('agent'), { lane: 'agent' });
  const user = scheduler.enqueue('agent', async () => order.push('user'), { lane: 'user' });
  await Promise.resolve();
  assert.deepEqual(order, ['first']);
  release();
  await Promise.all([first, background, agent, user]);
  assert.deepEqual(order, ['first', 'user', 'agent', 'background']);
  scheduler.dispose();
});

test('drains work for other agents independently', async () => {
  const scheduler = new RunScheduler();
  let release;
  const blocked = new Promise(resolve => { release = resolve; });
  const first = scheduler.enqueue('a', () => blocked);
  const second = scheduler.enqueue('b', async () => 'done');
  assert.equal(await second, undefined);
  release();
  await first;
  scheduler.dispose();
});

test('prioritizes direct user work ahead of queued group-member work', async () => {
  const scheduler = new RunScheduler();
  const order = [];
  let release;
  const blocker = new Promise(resolve => { release = resolve; });
  const active = scheduler.enqueue('a', () => blocker, { lane: 'agent' });
  await Promise.resolve();
  const group = scheduler.enqueue('a', () => { order.push('group'); }, { lane: 'user', source: 'group-member' });
  const direct = scheduler.enqueue('a', () => { order.push('direct'); }, { lane: 'user', source: 'turn' });
  assert.deepEqual(scheduler.getDiagnostics().map(item => [item.depthUser, item.active.phase]), [[2, 'running']]);
  release();
  await Promise.all([active, group, direct]);
  assert.deepEqual(order, ['direct', 'group']);
  scheduler.dispose();
});

test('watchdog frees a wedged run for waiting user work and records late settle', async () => {
  let now = 0;
  const timers = [];
  const stages = [];
  const clock = {
    now: () => now,
    schedule: (ms, fn) => {
      const timer = { at: now + ms, fn, cancelled: false };
      timers.push(timer);
      return { dispose: () => { timer.cancelled = true; } };
    },
  };
  const advance = async ms => {
    now += ms;
    for (const timer of timers.filter(item => !item.cancelled && item.at <= now)) {
      timer.cancelled = true;
      timer.fn();
    }
    await Promise.resolve();
  };
  const scheduler = new RunScheduler({ watchdogMs: 100, watchdogGraceMs: 20, clock, telemetry: { onWatchdog: event => stages.push(event.stage) } });
  let release;
  const blocked = new Promise(resolve => { release = resolve; });
  const first = scheduler.enqueue('a', () => blocked, { lane: 'background' });
  await Promise.resolve();
  const user = scheduler.enqueue('a', () => 'user result', { lane: 'user' });
  await advance(100);
  assert.equal(scheduler.getDiagnostics()[0].active.phase, 'interrupted');
  await advance(20);
  assert.equal(await user, undefined);
  assert.equal(await first, undefined);
  release();
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(stages, ['trip', 'escape', 'late_settle']);
  scheduler.dispose();
});
