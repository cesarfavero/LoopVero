const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const MAX_STATE_BYTES = 8 * 1024 * 1024;
const MAX_BOTS = 200;
const MAX_MESSAGES_PER_BOT = 2000;
const MAX_TOOL_CALLS_PER_BOT = 2000;
const MAX_MESSAGE_CHARS = 24000;

function emptyState() {
  return { schemaVersion: 1, bots: [{ id: 'primary', name: 'Grok Bot', description: 'Primary Agent', messages: [], toolCalls: [] }] };
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
    };
  }).filter(Boolean) : [];
  const instructions = typeof input.instructions === 'string'
    ? input.instructions.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 12000)
    : '';
  return { id, name, description: typeof input.description === 'string' ? input.description.slice(0, 160) : '', instructions, messages, toolCalls };
}

function createStore(getUserDataPath) {
  const filePath = () => path.join(getUserDataPath(), 'thegrok-state.json');
  function load() {
    try {
      const buffer = fs.readFileSync(filePath());
      if (buffer.byteLength > MAX_STATE_BYTES) throw new Error('Estado local excede o limite permitido.');
      const parsed = JSON.parse(buffer.toString('utf8'));
      if (parsed?.schemaVersion !== 1 || !Array.isArray(parsed.bots)) return emptyState();
      return { schemaVersion: 1, bots: parsed.bots.slice(0, MAX_BOTS).map(sanitizeBot) };
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
    });
  }
  return { load, saveBot, saveBotProfile };
}

module.exports = { createStore };
