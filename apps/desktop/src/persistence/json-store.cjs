const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const MAX_STATE_BYTES = 8 * 1024 * 1024;
const MAX_BOTS = 200;
const MAX_MESSAGES_PER_BOT = 2000;
const MAX_MESSAGE_CHARS = 24000;

function emptyState() {
  return { schemaVersion: 1, bots: [{ id: 'primary', name: 'Grok Bot', description: 'Primary Agent', messages: [] }] };
}

function sanitizeBot(input) {
  if (!input || typeof input !== 'object') throw new Error('Agente inválido.');
  const id = typeof input.id === 'string' ? input.id.slice(0, 100) : '';
  const name = typeof input.name === 'string' ? input.name.trim().slice(0, 100) : '';
  if (!id || !name) throw new Error('Identificador ou nome do agente inválido.');
  const messages = Array.isArray(input.messages) ? input.messages.slice(-MAX_MESSAGES_PER_BOT).map(message => {
    if (!message || !['user', 'assistant', 'tool'].includes(message.role) || typeof message.text !== 'string') return null;
    const safeText = message.text.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]');
    return {
      id: typeof message.id === 'string' ? message.id.slice(0, 100) : randomUUID(),
      role: message.role,
      text: safeText.slice(0, MAX_MESSAGE_CHARS),
      createdAt: typeof message.createdAt === 'string' ? message.createdAt.slice(0, 40) : new Date().toISOString(),
      ...(typeof message.taskId === 'string' ? { taskId: message.taskId.slice(0, 100) } : {}),
      ...(typeof message.error === 'boolean' ? { error: message.error } : {}),
      ...(message.role === 'tool' && typeof message.toolName === 'string' ? { toolName: message.toolName.slice(0, 120) } : {}),
      ...(message.role === 'tool' && ['running', 'completed', 'failed'].includes(message.status) ? { status: message.status } : {}),
    };
  }).filter(Boolean) : [];
  return { id, name, description: typeof input.description === 'string' ? input.description.slice(0, 160) : '', messages };
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
    return saveBot({ id, name, description: input.description, messages: existing?.messages || [] });
  }
  return { load, saveBot, saveBotProfile };
}

module.exports = { createStore };
