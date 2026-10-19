const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const MAX_STATE_BYTES = 8 * 1024 * 1024;
const MAX_BOTS = 200;
const MAX_MESSAGES_PER_BOT = 2000;
const MAX_TOOL_CALLS_PER_BOT = 2000;
const MAX_SUBAGENT_RUNS_PER_BOT = 500;
const MAX_MESSAGE_CHARS = 24000;
const MAX_OBJECTIVES = 200;
const MAX_PROACTIVE_EVENTS = 500;

function emptyState() {
  return { schemaVersion: 1, bots: [{ id: 'primary', name: 'Grok Bot', description: 'Primary Agent', instructions: '', messages: [], toolCalls: [] }], objectives: [], proactiveEvents: [], proactiveSettings: { enabled: false, intervalMinutes: 60, cooldownMinutes: 1440 } };
}

function sanitizeObjective(input) {
  if (!input || typeof input !== 'object') return null;
  const id = typeof input.id === 'string' ? input.id.slice(0, 100) : '';
  const text = typeof input.text === 'string' ? input.text.trim().slice(0, 1000) : '';
  if (!id || !text) return null;
  return { id, text, status: input.status === 'completed' ? 'completed' : 'active', botId: typeof input.botId === 'string' ? input.botId.slice(0, 100) : 'primary', createdAt: typeof input.createdAt === 'string' ? input.createdAt.slice(0, 40) : new Date().toISOString(), updatedAt: typeof input.updatedAt === 'string' ? input.updatedAt.slice(0, 40) : new Date().toISOString(), ...(typeof input.lastEvaluatedAt === 'string' ? { lastEvaluatedAt: input.lastEvaluatedAt.slice(0, 40) } : {}) };
}

function sanitizeProactiveEvent(input) {
  if (!input || typeof input !== 'object') return null;
  const id = typeof input.id === 'string' ? input.id.slice(0, 100) : '';
  const objectiveId = typeof input.objectiveId === 'string' ? input.objectiveId.slice(0, 100) : '';
  if (!id || !objectiveId || !['proposed', 'investigating', 'awaiting_approval', 'presented', 'dismissed', 'failed', 'cancelled'].includes(input.status)) return null;
  return { id, objectiveId, status: input.status, title: typeof input.title === 'string' ? input.title.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 120) : '', summary: typeof input.summary === 'string' ? input.summary.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 4000) : '', evidenceQuote: typeof input.evidenceQuote === 'string' ? input.evidenceQuote.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 1000) : '', createdAt: typeof input.createdAt === 'string' ? input.createdAt.slice(0, 40) : new Date().toISOString(), updatedAt: typeof input.updatedAt === 'string' ? input.updatedAt.slice(0, 40) : new Date().toISOString(), ...(typeof input.cooldownUntil === 'string' ? { cooldownUntil: input.cooldownUntil.slice(0, 40) } : {}) };
}

function sanitizeSettings(input) {
  const numberInRange = (value, fallback, min, max) => Number.isFinite(value) ? Math.min(max, Math.max(min, Math.floor(value))) : fallback;
  return { enabled: input?.enabled === true, intervalMinutes: numberInRange(input?.intervalMinutes, 60, 15, 10080), cooldownMinutes: numberInRange(input?.cooldownMinutes, 1440, 60, 43200) };
}

function sanitizeBot(input) {
  if (!input || typeof input !== 'object') throw new Error('Agente inválido.');
  const id = typeof input.id === 'string' ? input.id.slice(0, 100) : '';
  const name = typeof input.name === 'string' ? input.name.trim().slice(0, 100) : '';
  if (!id || !name) throw new Error('Identificador ou nome do agente inválido.');
  const inputMessages = Array.isArray(input.messages) ? input.messages : [];
  const messages = inputMessages.slice(-MAX_MESSAGES_PER_BOT).map(message => {
    if (!message || !['user', 'assistant'].includes(message.role) || typeof message.text !== 'string') return null;
    const safeText = message.text.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]');
    return {
      id: typeof message.id === 'string' ? message.id.slice(0, 100) : randomUUID(),
      role: message.role,
      text: safeText.slice(0, MAX_MESSAGE_CHARS),
      createdAt: typeof message.createdAt === 'string' ? message.createdAt.slice(0, 40) : new Date().toISOString(),
      ...(typeof message.taskId === 'string' ? { taskId: message.taskId.slice(0, 100) } : {}),
      ...(typeof message.parentTaskId === 'string' ? { parentTaskId: message.parentTaskId.slice(0, 100) } : {}),
      ...(typeof message.error === 'boolean' ? { error: message.error } : {}),
    };
  }).filter(Boolean);
  const toolCalls = Array.isArray(input.toolCalls) ? input.toolCalls.slice(-MAX_TOOL_CALLS_PER_BOT).map(call => {
    if (!call || typeof call !== 'object' || typeof call.id !== 'string' || typeof call.name !== 'string' || !['pending', 'completed', 'failed'].includes(call.status)) return null;
    return {
      id: call.id.slice(0, 100),
      name: call.name.slice(0, 120),
      status: call.status,
      summary: typeof call.summary === 'string' ? call.summary.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, MAX_MESSAGE_CHARS) : '',
      createdAt: typeof call.createdAt === 'string' ? call.createdAt.slice(0, 40) : new Date().toISOString(),
      ...(typeof call.taskId === 'string' ? { taskId: call.taskId.slice(0, 100) } : {}),
      ...(typeof call.parentTaskId === 'string' ? { parentTaskId: call.parentTaskId.slice(0, 100) } : {}),
    };
  }).filter(Boolean) : [];
  const instructions = typeof input.instructions === 'string'
    ? input.instructions.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 12000)
    : '';
  const subagentRuns = Array.isArray(input.subagentRuns) ? input.subagentRuns.slice(-MAX_SUBAGENT_RUNS_PER_BOT).map(run => {
    if (!run || typeof run !== 'object' || typeof run.id !== 'string' || typeof run.agentId !== 'string' || !['running', 'completed', 'failed', 'cancelled'].includes(run.status)) return null;
    return {
      id: run.id.slice(0, 100),
      parentTaskId: typeof run.parentTaskId === 'string' ? run.parentTaskId.slice(0, 100) : '',
      agentId: run.agentId.slice(0, 100),
      agentName: typeof run.agentName === 'string' ? run.agentName.slice(0, 100) : '',
      task: typeof run.task === 'string' ? run.task.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 6000) : '',
      status: run.status,
      ...(typeof run.result === 'string' ? { result: run.result.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, MAX_MESSAGE_CHARS) } : {}),
      ...(typeof run.error === 'string' ? { error: run.error.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 700) } : {}),
      createdAt: typeof run.createdAt === 'string' ? run.createdAt.slice(0, 40) : new Date().toISOString(),
      updatedAt: typeof run.updatedAt === 'string' ? run.updatedAt.slice(0, 40) : new Date().toISOString(),
    };
  }).filter(Boolean) : [];
  return { id, name, description: typeof input.description === 'string' ? input.description.slice(0, 160) : '', instructions, messages, toolCalls, subagentRuns };
}

function createStore(getUserDataPath) {
  const filePath = () => path.join(getUserDataPath(), 'thegrok-state.json');
  function load() {
    try {
      const buffer = fs.readFileSync(filePath());
      if (buffer.byteLength > MAX_STATE_BYTES) throw new Error('Estado local excede o limite permitido.');
      const parsed = JSON.parse(buffer.toString('utf8'));
      if (parsed?.schemaVersion !== 1 || !Array.isArray(parsed.bots)) return emptyState();
      return {
        schemaVersion: 1,
        bots: parsed.bots.slice(0, MAX_BOTS).map(sanitizeBot),
        objectives: Array.isArray(parsed.objectives) ? parsed.objectives.slice(-MAX_OBJECTIVES).map(sanitizeObjective).filter(Boolean) : [],
        proactiveEvents: Array.isArray(parsed.proactiveEvents) ? parsed.proactiveEvents.slice(-MAX_PROACTIVE_EVENTS).map(sanitizeProactiveEvent).filter(Boolean) : [],
        proactiveSettings: sanitizeSettings(parsed.proactiveSettings),
      };
    } catch (error) {
      if (error?.code === 'ENOENT') return emptyState();
      throw error;
    }
  }
  function saveBot(input) {
    const bot = sanitizeBot(input);
    const state = load();
    const index = state.bots.findIndex(item => item.id === bot.id);
    if (index < 0 && state.bots.length >= MAX_BOTS) throw new Error('Limite de agentes locais atingido.');
    if (index < 0) state.bots.unshift(bot); else {
      const existing = state.bots[index];
      const messages = new Map(existing.messages.map(message => [message.id, message]));
      for (const message of bot.messages) messages.set(message.id, message);
      bot.messages = [...messages.values()].slice(-MAX_MESSAGES_PER_BOT);
      const toolCalls = new Map((existing.toolCalls || []).map(call => [call.id, call]));
      for (const call of bot.toolCalls) toolCalls.set(call.id, call);
      bot.toolCalls = [...toolCalls.values()].slice(-MAX_TOOL_CALLS_PER_BOT);
      const subagentRuns = new Map((existing.subagentRuns || []).map(run => [run.id, run]));
      for (const run of bot.subagentRuns) subagentRuns.set(run.id, run);
      bot.subagentRuns = [...subagentRuns.values()].slice(-MAX_SUBAGENT_RUNS_PER_BOT);
      state.bots[index] = bot;
    }
    const destination = filePath();
    fs.mkdirSync(path.dirname(destination), { recursive: true, mode: 0o700 });
    const temporary = `${destination}.${randomUUID()}.tmp`;
    fs.writeFileSync(temporary, JSON.stringify(state), { mode: 0o600, flag: 'wx' });
    fs.renameSync(temporary, destination);
    return bot;
  }
  function saveBotProfile(input) {
    if (!input || typeof input !== 'object') throw new Error('Agente inválido.');
    const id = typeof input.id === 'string' ? input.id.slice(0, 100) : '';
    const name = typeof input.name === 'string' ? input.name.trim().slice(0, 100) : '';
    if (!id || !name) throw new Error('Identificador ou nome do agente inválido.');
    const existing = load().bots.find(bot => bot.id === id);
    return saveBot({
      id,
      name,
      description: input.description ?? existing?.description,
      instructions: input.instructions ?? existing?.instructions,
      messages: existing?.messages || [],
      toolCalls: existing?.toolCalls || [],
      subagentRuns: existing?.subagentRuns || [],
    });
  }
  function updateProactiveState(update) {
    const state = load();
    const now = new Date().toISOString();
    if (Array.isArray(update.objectives)) state.objectives = update.objectives.slice(-MAX_OBJECTIVES).map(sanitizeObjective).filter(Boolean);
    if (update.objective) {
      const objective = sanitizeObjective({ ...update.objective, updatedAt: now });
      if (!objective) throw new Error('Objetivo inválido.');
      const index = state.objectives.findIndex(item => item.id === objective.id);
      if (index < 0) state.objectives.unshift(objective); else state.objectives[index] = objective;
    }
    if (update.proactiveSettings) state.proactiveSettings = sanitizeSettings(update.proactiveSettings);
    if (update.proactiveEvent) {
      const event = sanitizeProactiveEvent({ ...update.proactiveEvent, updatedAt: now });
      if (!event) throw new Error('Evento proativo inválido.');
      const index = state.proactiveEvents.findIndex(item => item.id === event.id);
      if (index < 0) state.proactiveEvents.unshift(event); else state.proactiveEvents[index] = event;
      state.proactiveEvents = state.proactiveEvents.slice(0, MAX_PROACTIVE_EVENTS);
    }
    const destination = filePath();
    fs.mkdirSync(path.dirname(destination), { recursive: true, mode: 0o700 });
    const temporary = `${destination}.${randomUUID()}.tmp`;
    fs.writeFileSync(temporary, JSON.stringify(state), { mode: 0o600, flag: 'wx' });
    fs.renameSync(temporary, destination);
    return state;
  }
  return { load, saveBot, saveBotProfile, updateProactiveState };
}

module.exports = { createStore };
