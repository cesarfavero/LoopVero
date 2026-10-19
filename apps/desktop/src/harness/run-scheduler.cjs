const LANES = ['user', 'agent', 'background'];
const noop = () => {};

class RunScheduler {
  constructor({ watchdogMs = 120_000, watchdogGraceMs = 30_000, telemetry = {}, clock } = {}) {
    this.agents = new Map();
    this.disposed = false;
    this.watchdogMs = watchdogMs;
    this.watchdogGraceMs = watchdogGraceMs;
    this.telemetry = { onAccepted: telemetry.onAccepted || noop, onDequeued: telemetry.onDequeued || noop, onWatchdog: telemetry.onWatchdog || noop };
    this.clock = clock || { now: () => Date.now(), schedule: (ms, fn) => { const id = setTimeout(fn, ms); return { dispose: () => clearTimeout(id) }; } };
  }

  queueFor(agentId) {
    if (!this.agents.has(agentId)) this.agents.set(agentId, { pendingUser: [], pendingAgent: [], pendingBackground: [], active: null, generation: 0, zombies: new Set(), watchdog: null, grace: null });
    return this.agents.get(agentId);
  }

  enqueue(agentId, task, options = {}) {
    if (typeof agentId !== 'string' || !agentId || typeof task !== 'function') throw new TypeError('Agente ou tarefa inválida.');
    if (this.disposed) return Promise.resolve().then(options.onCancelled);
    const state = this.queueFor(agentId);
    const lane = LANES.includes(options.lane) ? options.lane : 'user';
    const entry = { task, lane, source: options.source || 'turn', enqueuedAtMs: this.clock.now(), acceptedAtMs: options.acceptedAtMs, ackToken: options.ackToken, onCancelled: options.onCancelled };
    entry.promise = new Promise((resolve, reject) => { entry.resolve = resolve; entry.reject = reject; });
    const queue = lane === 'user' ? state.pendingUser : lane === 'agent' ? state.pendingAgent : state.pendingBackground;
    queue.push(entry);
    const pendingAhead = lane === 'user' ? state.pendingUser.length - 1 : lane === 'agent' ? state.pendingUser.length + state.pendingAgent.length - 1 : state.pendingUser.length + state.pendingAgent.length + state.pendingBackground.length - 1;
    this.telemetry.onAccepted({ agentId, lane, source: entry.source, position: Number(Boolean(state.active)) + pendingAhead, depthUser: state.pendingUser.length, depthAgent: state.pendingAgent.length, depthBackground: state.pendingBackground.length, hasActive: Boolean(state.active) });
    this.armWatchdog(agentId, state);
    queueMicrotask(() => this.pump(agentId));
    return entry.promise;
  }

  next(state) {
    if (state.pendingUser.length) {
      const preferred = state.pendingUser.findIndex(item => item.source !== 'group-member');
      return state.pendingUser.splice(preferred < 0 ? 0 : preferred, 1)[0];
    }
    if (state.pendingAgent.length) return state.pendingAgent.shift();
    return state.pendingBackground.shift();
  }

  pump(agentId) {
    if (this.disposed) return;
    const state = this.agents.get(agentId);
    if (!state || state.active) return;
    const entry = this.next(state);
    if (!entry) { this.disarmWatchdog(state); return; }
    const active = { entry, generation: ++state.generation, startedAtMs: this.clock.now(), phase: 'running' };
    active.settled = new Promise(resolve => { active.markSettled = resolve; });
    state.active = active;
    this.telemetry.onDequeued({ agentId, lane: entry.lane, source: entry.source, queueWaitMs: active.startedAtMs - entry.enqueuedAtMs, ...(entry.acceptedAtMs == null ? {} : { acceptedToRunMs: active.startedAtMs - entry.acceptedAtMs }), jumpedBackground: entry.lane === 'background' ? 0 : state.pendingBackground.length, depthUser: state.pendingUser.length, depthAgent: state.pendingAgent.length, depthBackground: state.pendingBackground.length });
    this.disarmWatchdog(state);
    this.armWatchdog(agentId, state);
    let taskPromise;
    try { taskPromise = Promise.resolve(entry.task()); }
    catch (error) { taskPromise = Promise.reject(error); }
    void taskPromise.then(() => this.settle(agentId, state, active), error => this.settle(agentId, state, active, error));
  }

  settle(agentId, state, active, error) {
    if (!active.escaped) error ? active.entry.reject(error) : active.entry.resolve();
    active.markSettled();
    if (state.active?.generation !== active.generation) {
      this.telemetry.onWatchdog({ agentId, stage: 'late_settle', activeLane: active.entry.lane, activeSource: active.entry.source, activeRuntimeMs: this.clock.now() - active.startedAtMs });
      return;
    }
    state.active = null;
    this.disarmWatchdog(state);
    this.pump(agentId);
  }

  waitedBehindActiveMs(state) {
    if (!state.active || !state.pendingUser.length) return null;
    return this.clock.now() - Math.max(state.pendingUser[0].enqueuedAtMs, state.active.startedAtMs);
  }

  armWatchdog(agentId, state) {
    if (this.disposed || state.watchdog || state.grace) return;
    const waited = this.waitedBehindActiveMs(state);
    if (waited == null) return;
    state.watchdog = this.clock.schedule(Math.max(0, this.watchdogMs - waited), () => {
      state.watchdog = null;
      const active = state.active;
      const age = this.waitedBehindActiveMs(state);
      if (!active || age == null) return;
      if (age < this.watchdogMs) { this.armWatchdog(agentId, state); return; }
      active.phase = 'interrupted';
      this.telemetry.onWatchdog({ agentId, stage: 'trip', activeLane: active.entry.lane, activeSource: active.entry.source, activeRuntimeMs: this.clock.now() - active.startedAtMs, waitingUserAgeMs: this.clock.now() - state.pendingUser[0].enqueuedAtMs });
      state.grace = this.clock.schedule(this.watchdogGraceMs, () => this.escape(agentId, state, active));
    });
  }

  escape(agentId, state, active) {
    state.grace = null;
    if (this.disposed || state.active?.generation !== active.generation) return;
    this.telemetry.onWatchdog({ agentId, stage: 'escape', activeLane: active.entry.lane, activeSource: active.entry.source, activeRuntimeMs: this.clock.now() - active.startedAtMs, ...(state.pendingUser[0] ? { waitingUserAgeMs: this.clock.now() - state.pendingUser[0].enqueuedAtMs } : {}), ...(active.entry.ackToken == null ? {} : { ackToken: active.entry.ackToken }) });
    active.escaped = true;
    active.entry.resolve();
    state.zombies.add(active.settled);
    void active.settled.then(() => state.zombies.delete(active.settled));
    state.active = null;
    this.pump(agentId);
  }

  disarmWatchdog(state) {
    state.watchdog?.dispose();
    state.grace?.dispose();
    state.watchdog = state.grace = null;
  }

  async drain(agentId) {
    const state = this.agents.get(agentId);
    if (!state) return;
    await Promise.allSettled([...(state.active ? [state.active.settled] : []), ...state.zombies, ...state.pendingUser.map(item => item.promise), ...state.pendingAgent.map(item => item.promise), ...state.pendingBackground.map(item => item.promise)]);
  }

  getDiagnostics() {
    const result = [];
    for (const [agentId, state] of this.agents) {
      const depthUser = state.pendingUser.length, depthAgent = state.pendingAgent.length, depthBackground = state.pendingBackground.length;
      if (!state.active && !depthUser && !depthAgent && !depthBackground) continue;
      result.push({ agentId, depthUser, depthAgent, depthBackground, depthTotal: depthUser + depthAgent + depthBackground + Number(Boolean(state.active)), ...(state.pendingUser[0] ? { oldestPendingUserAgeMs: this.clock.now() - state.pendingUser[0].enqueuedAtMs } : {}), ...(state.active ? { active: { lane: state.active.entry.lane, source: state.active.entry.source, runtimeMs: this.clock.now() - state.active.startedAtMs, phase: state.active.phase } } : {}) });
    }
    return result;
  }

  dispose() {
    this.disposed = true;
    for (const state of this.agents.values()) {
      this.disarmWatchdog(state);
      for (const entry of [...state.pendingUser.splice(0), ...state.pendingAgent.splice(0), ...state.pendingBackground.splice(0)]) Promise.resolve().then(entry.onCancelled).then(entry.resolve, entry.reject);
    }
  }
}
module.exports = { RunScheduler };
