const { randomUUID } = require('node:crypto');
const { runTurn } = require('./agent-runtime.cjs');

const runs = new Map();

function send(message) {
  if (typeof process.send === 'function' && process.connected) process.send(message);
}

process.on('message', async message => {
  if (!message || typeof message !== 'object') return;
  if (message.type === 'cancel' && typeof message.requestId === 'string') {
    runs.get(message.requestId)?.abort();
    return;
  }
  if (message.type !== 'run' || typeof message.requestId !== 'string' || !message.payload || typeof message.payload !== 'object') return;
  const { requestId, payload } = message;
  if (runs.has(requestId)) return;
  const controller = new AbortController();
  runs.set(requestId, controller);
  const memoryPending = new Map();
  const memoryRequest = request => new Promise((resolve, reject) => {
    const memoryRequestId = randomUUID();
    memoryPending.set(memoryRequestId, { resolve, reject });
    try { send({ type: 'memory-request', requestId, memoryRequestId, data: request }); }
    catch (error) { memoryPending.delete(memoryRequestId); reject(error); }
  });
  const onMemoryResult = response => {
    if (response?.type !== 'memory-result' || response.requestId !== requestId) return;
    const pending = memoryPending.get(response.memoryRequestId);
    if (!pending) return;
    memoryPending.delete(response.memoryRequestId);
    if (response.error) pending.reject(new Error(response.error)); else pending.resolve(response.result);
  };
  process.on('message', onMemoryResult);
  try {
    const result = await runTurn({ ...payload, signal: controller.signal, memoryRequest, onEvent: event => send({ type: 'event', requestId, event }) });
    send({ type: 'result', requestId, result });
  } catch (error) {
    send({ type: 'error', requestId, error: String(error?.message || error).replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 1000) });
  } finally {
    process.removeListener('message', onMemoryResult);
    for (const pending of memoryPending.values()) pending.reject(new Error('Turno encerrado.'));
    runs.delete(requestId);
    if (process.connected && runs.size === 0 && message.shutdownWhenIdle === true) process.disconnect();
  }
});

send({ type: 'ready', pid: process.pid, instanceId: randomUUID() });

process.on('disconnect', () => {
  for (const controller of runs.values()) controller.abort();
});
