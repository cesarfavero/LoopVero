const test = require('node:test');
const assert = require('node:assert/strict');
const { createMemoryRuntime } = require('../src/harness/memory-runtime.cjs');
const tools = require('../src/tools/registry.cjs');

test('recalls matching private facts ranked by word overlap and then recency', () => {
  const memory = createMemoryRuntime({ memories: [
    { id: 'old', content: 'Cesar prefers dark mode', type: 'profile', createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 'recent', content: 'Cesar prefers dark editor theme', type: 'journal', createdAt: '2026-02-01T00:00:00.000Z' },
    { id: 'unrelated', content: 'The coffee machine is red', type: 'journal', createdAt: '2026-03-01T00:00:00.000Z' },
  ] });
  assert.deepEqual(memory.recall('Cesar dark theme').map(item => item.id), ['recent', 'old']);
  assert.deepEqual(memory.recall('   '), []);
});

test('writes durable facts with per-agent request scope, avoids duplicates and forgets exact facts', async () => {
  let facts = [];
  const persist = async request => {
    assert.equal(request.botId, 'agent-a');
    if (request.action === 'write') facts.push({ id: 'fact-id', content: request.fact, type: request.memoryType, createdAt: '2026-03-01T00:00:00.000Z' });
    if (request.action === 'forget') facts = facts.filter(item => item.content !== request.fact);
    return { outcome: { ok: true, ...(request.action === 'write' ? { added: true, id: 'fact-id' } : { removed: true }) }, memories: facts };
  };
  const memory = createMemoryRuntime({ request: request => persist({ ...request, botId: 'agent-a' }) });
  assert.deepEqual(await memory.write('  Prefers   dark mode ', 'profile'), { ok: true, added: true, id: 'fact-id' });
  assert.deepEqual(await memory.write('Prefers dark mode', 'profile'), { ok: true, duplicate: true, id: require('node:crypto').createHash('sha1').update('prefers dark mode').digest('hex').slice(0, 16) });
  assert.deepEqual(await memory.forget('Prefers dark mode'), { ok: true, removed: true });
});

test('only exposes memory tools when a scoped store is injected and rejects unknown arguments', async () => {
  const memory = createMemoryRuntime({ memories: [] });
  assert.equal(tools.memoryTools(null).length, 0);
  const [recall] = tools.memoryTools(memory);
  assert.equal(recall.name, 'RecallMemory');
  await assert.rejects(tools.execute('RecallMemory', { query: 'x', unexpected: true }, memory), /Argumentos da ferramenta inválidos/);
});

test('memory tool formats matching facts and writes to the injected private store', async () => {
  const calls = [];
  const memory = createMemoryRuntime({ memories: [{ id: 'm1', content: 'Prefers dark mode', type: 'profile', createdAt: '2026-03-01T00:00:00.000Z' }], request: async request => {
    calls.push(request);
    return { outcome: { ok: true, added: true }, memories: [{ id: 'm2', content: request.fact, type: request.memoryType, createdAt: '2026-03-02T00:00:00.000Z' }] };
  } });
  assert.match(await tools.execute('RecallMemory', { query: 'dark mode' }, memory), /Prefers dark mode/);
  assert.match(await tools.execute('UpdateMemory', { action: 'write', fact: 'Uses an external keyboard', type: 'profile' }, memory), /added/);
  assert.equal(calls[0].memoryType, 'profile');
});

