const { fork } = require('node:child_process');
const { randomUUID } = require('node:crypto');
const path = require('node:path');

function createExecutionHostClient({ forkProcess = fork, execPath = process.execPath, env = process.env } = {}) {
  let child = null;
  let readyPromise = null;
  const pending = new Map();

  function rejectPending(error) {
    for (const entry of pending.values()) {
      entry.signal?.removeEventListener('abort', entry.abortListener);
      entry.reject(error);
    }
    pending.clear();
  }

  function start() {
    if (child?.connected && readyPromise) return readyPromise;
    const workerEnv = {
      PATH: typeof env.PATH === 'string' ? env.PATH : '',
      HOME: typeof env.HOME === 'string' ? env.HOME : '',
      TMPDIR: typeof env.TMPDIR === 'string' ? env.TMPDIR : '/tmp',
      ...(typeof env.LANG === 'string' ? { LANG: env.LANG } : {}),
      ELECTRON_RUN_AS_NODE: '1',
    };
    child = forkProcess(path.join(__dirname, 'execution-host-worker.cjs'), [], {
      cwd: path.resolve(__dirname, '../../..'),
      env: workerEnv,
      execPath,
      stdio: ['ignore', 'ignore', 'pipe', 'ipc'],
    });
    const current = child;
    readyPromise = new Promise((resolve, reject) => {
      const onMessage = message => {
        if (message?.type === 'ready') { resolve(message); return; }
        if (message?.type === 'event') {
          const entry = pending.get(message.requestId);
          try { entry?.onEvent?.(message.event); }
          catch (error) {
            if (entry && !entry.abortRequested) {
              entry.abortRequested = true;
              entry.abortError = error;
              try { current.send({ type: 'cancel', requestId: message.requestId }); }
              catch (sendError) {
                pending.delete(message.requestId);
                entry.signal?.removeEventListener('abort', entry.abortListener);
                entry.reject(sendError);
              }
            }
          }
          return;
        }
        const entry = pending.get(message?.requestId);
        if (!entry || !['result', 'error'].includes(message?.type)) return;
        pending.delete(message.requestId);
        entry.signal?.removeEventListener('abort', entry.abortListener);
        if (entry.abortRequested) entry.reject(entry.abortError || new Error('Execução cancelada.'));
        else if (message.type === 'result') entry.resolve(message.result);
        else entry.reject(new Error(message.error || 'Execution host failed.'));
      };
      current.on('message', onMessage);
      current.once('error', error => {
        reject(error);
        rejectPending(error);
        if (child === current) { child = null; readyPromise = null; }
      });
      current.once('exit', (code, signal) => {
        if (child === current) { child = null; readyPromise = null; }
        const error = new Error(`Execution host exited (${signal || code}).`);
        reject(error);
        rejectPending(error);
      });
      current.once('spawn', () => {});
    });
    return readyPromise;
  }

  async function runTurn(options) {
    if (options?.signal?.aborted) throw new Error('Execução cancelada.');
    const worker = await start();
    const requestId = randomUUID();
    const payload = {
      botId: options.botId,
      text: options.text,
      history: Array.isArray(options.history) ? options.history : [],
      instructions: typeof options.instructions === 'string' ? options.instructions : '',
      model: typeof options.model === 'string' ? options.model : 'codexrouter/gateway',
    };
    return new Promise((resolve, reject) => {
      const entry = { resolve, reject, onEvent: options.onEvent, signal: options.signal, abortListener: null, abortRequested: false };
      const abortListener = () => {
        if (entry.abortRequested) return;
        entry.abortRequested = true;
        try { child?.send({ type: 'cancel', requestId }); }
        catch (error) {
          pending.delete(requestId);
          options.signal?.removeEventListener('abort', abortListener);
          reject(new Error(`Falha ao cancelar execução: ${error.message}`));
        }
      };
      entry.abortListener = abortListener;
      pending.set(requestId, entry);
      options.signal?.addEventListener('abort', abortListener, { once: true });
      if (options.signal?.aborted) { abortListener(); return; }
      try { child.send({ type: 'run', requestId, payload }); }
      catch (error) {
        pending.delete(requestId);
        options.signal?.removeEventListener('abort', abortListener);
        reject(error);
      }
      void worker;
    });
  }

  function dispose() {
    const current = child;
    child = null;
    readyPromise = null;
    rejectPending(new Error('Execution host stopped.'));
    if (current?.connected) current.disconnect();
    if (current && current.exitCode === null) current.kill();
  }

  return { dispose, runTurn, start };
}

module.exports = { createExecutionHostClient };
