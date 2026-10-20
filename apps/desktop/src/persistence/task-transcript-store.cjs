const fs = require('node:fs');
const path = require('node:path');
const { randomUUID, createHash } = require('node:crypto');
const { taskSessionId } = require('./task-document-store.cjs');

const MAX_ENTRIES = 2000;
const MAX_TEXT = 24000;
const MAX_FILE_BYTES = 8 * 1024 * 1024;

function createTaskTranscriptStore(getUserDataPath, taskDocuments) {
  function fileFor(agentId, taskId) {
    if (!taskDocuments.read(agentId, taskId)) throw new Error('Tarefa não encontrada.');
    const hash = createHash('sha256').update(agentId).digest('hex');
    return path.join(getUserDataPath(), 'task-transcripts', hash, `${taskId}.json`);
  }
  function load(agentId, taskId) {
    const file = fileFor(agentId, taskId);
    const sessionId = taskSessionId(taskId);
    try {
      const root = path.join(getUserDataPath(), 'task-transcripts');
      if (fs.lstatSync(root).isSymbolicLink() || fs.lstatSync(path.dirname(file)).isSymbolicLink()) throw new Error('Diretório de transcript inválido.');
      const stat = fs.lstatSync(file);
      if (!stat.isFile() || stat.isSymbolicLink() || stat.size > MAX_FILE_BYTES) throw new Error('Arquivo de transcript inválido.');
      const record = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (record.schemaVersion !== 1 || record.agentId !== agentId || record.taskId !== taskId || record.sessionId !== sessionId || !Number.isSafeInteger(record.nextSeq) || !Array.isArray(record.entries)) throw new Error('Transcript inválido.');
      return record;
    } catch (error) {
      if (error?.code === 'ENOENT') return { schemaVersion: 1, agentId, taskId, sessionId, nextSeq: 1, entries: [] };
      throw error;
    }
  }
  function save(record) {
    const file = fileFor(record.agentId, record.taskId);
    const root = path.join(getUserDataPath(), 'task-transcripts');
    try { if (fs.lstatSync(root).isSymbolicLink()) throw new Error('Diretório de transcript inválido.'); }
    catch (error) { if (error?.code !== 'ENOENT') throw error; }
    fs.mkdirSync(path.dirname(file), { recursive: true, mode: 0o700 });
    if (fs.lstatSync(root).isSymbolicLink() || fs.lstatSync(path.dirname(file)).isSymbolicLink()) throw new Error('Diretório de transcript inválido.');
    const temporary = `${file}.${randomUUID()}.tmp`;
    const bytes = Buffer.from(JSON.stringify(record));
    if (bytes.length > MAX_FILE_BYTES) throw new Error('Transcript excede o limite local.');
    fs.writeFileSync(temporary, bytes, { mode: 0o600, flag: 'wx' });
    try { fs.renameSync(temporary, file); }
    finally { try { fs.unlinkSync(temporary); } catch (error) { if (error?.code !== 'ENOENT') throw error; } }
    return record;
  }
  function appendMessage(agentId, taskId, { role, text, executionId, error = false }) {
    if (!['user', 'assistant'].includes(role) || typeof text !== 'string' || typeof executionId !== 'string' || !executionId) throw new Error('Mensagem de tarefa inválida.');
    const current = load(agentId, taskId);
    const entry = { id: randomUUID(), seq: current.nextSeq, kind: 'message', role, text: text.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, MAX_TEXT), executionId, createdAt: new Date().toISOString(), ...(error ? { error: true } : {}) };
    save({ ...current, nextSeq: current.nextSeq + 1, entries: [...current.entries, entry].slice(-MAX_ENTRIES) });
    return entry;
  }
  function upsertTool(agentId, taskId, { id, name, status, summary, executionId }) {
    if (typeof id !== 'string' || !id || typeof name !== 'string' || !name || !['pending', 'completed', 'failed'].includes(status) || typeof executionId !== 'string' || !executionId) throw new Error('Ferramenta de tarefa inválida.');
    const current = load(agentId, taskId);
    const index = current.entries.findIndex(entry => entry.kind === 'tool' && entry.id === id && entry.executionId === executionId);
    const entry = index < 0 ? { id: id.slice(0, 100), seq: current.nextSeq, kind: 'tool', name: name.slice(0, 120), status, summary: String(summary || '').replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, MAX_TEXT), executionId, createdAt: new Date().toISOString() } : { ...current.entries[index], status, summary: String(summary || '').replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, MAX_TEXT) };
    const entries = index < 0 ? [...current.entries, entry] : current.entries.map((item, at) => at === index ? entry : item);
    save({ ...current, nextSeq: current.nextSeq + (index < 0 ? 1 : 0), entries: entries.slice(-MAX_ENTRIES) });
    return entry;
  }
  return { load, appendMessage, upsertTool };
}

module.exports = { createTaskTranscriptStore };
