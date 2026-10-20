const fs = require('node:fs');
const path = require('node:path');
const { randomUUID, createHash } = require('node:crypto');

function createTaskViewStateStore(getUserDataPath, taskDocuments, transcripts) {
  function withTaskLock(agentId, taskId, operation) {
    const file = fileFor(agentId, taskId);
    const root = path.join(getUserDataPath(), 'task-view-state');
    try { if (fs.lstatSync(root).isSymbolicLink()) throw new Error('Estado de visualização inválido.'); }
    catch (error) { if (error?.code !== 'ENOENT') throw error; }
    fs.mkdirSync(path.dirname(file), { recursive: true, mode: 0o700 });
    if (fs.lstatSync(root).isSymbolicLink() || fs.lstatSync(path.dirname(file)).isSymbolicLink()) throw new Error('Estado de visualização inválido.');
    const lock = `${file}.lock`;
    let descriptor;
    try { descriptor = fs.openSync(lock, 'wx', 0o600); }
    catch (error) {
      if (error?.code === 'EEXIST') throw new Error('Outra atualização da tarefa está em andamento. Tente novamente.');
      throw error;
    }
    try { return operation(); }
    finally { fs.closeSync(descriptor); fs.unlinkSync(lock); }
  }
  function fileFor(agentId, taskId) {
    if (!taskDocuments.read(agentId, taskId)) throw new Error('Tarefa não encontrada.');
    return path.join(getUserDataPath(), 'task-view-state', createHash('sha256').update(agentId).digest('hex'), `${taskId}.json`);
  }
  function read(agentId, taskId) {
    const file = fileFor(agentId, taskId);
    try {
      const root = path.join(getUserDataPath(), 'task-view-state');
      if (fs.lstatSync(root).isSymbolicLink() || fs.lstatSync(path.dirname(file)).isSymbolicLink()) throw new Error('Estado de visualização inválido.');
      const stat = fs.lstatSync(file);
      if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 8192) throw new Error('Estado de visualização inválido.');
      const record = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (record.schemaVersion !== 1 || record.agentId !== agentId || record.taskId !== taskId || (record.pinnedAtMs !== null && !Number.isSafeInteger(record.pinnedAtMs)) || (record.unreadEntryId !== null && typeof record.unreadEntryId !== 'string')) throw new Error('Estado de visualização inválido.');
      return record;
    } catch (error) {
      if (error?.code === 'ENOENT') return { schemaVersion: 1, agentId, taskId, pinnedAtMs: null, unreadEntryId: null };
      throw error;
    }
  }
  function write(agentId, taskId, fields) {
    const current = read(agentId, taskId);
    const file = fileFor(agentId, taskId);
    const root = path.join(getUserDataPath(), 'task-view-state');
    try { if (fs.lstatSync(root).isSymbolicLink()) throw new Error('Estado de visualização inválido.'); }
    catch (error) { if (error?.code !== 'ENOENT') throw error; }
    fs.mkdirSync(path.dirname(file), { recursive: true, mode: 0o700 });
    if (fs.lstatSync(root).isSymbolicLink() || fs.lstatSync(path.dirname(file)).isSymbolicLink()) throw new Error('Estado de visualização inválido.');
    const record = { ...current, ...fields };
    const temp = `${file}.${randomUUID()}.tmp`;
    fs.writeFileSync(temp, JSON.stringify(record), { mode: 0o600, flag: 'wx' });
    try { fs.renameSync(temp, file); }
    finally { try { fs.unlinkSync(temp); } catch (error) { if (error?.code !== 'ENOENT') throw error; } }
    return record;
  }
  function list(agentId, taskId) { return read(agentId, taskId); }
  function markRead(agentId, taskId, entryId) {
    if (typeof entryId !== 'string' || !entryId) throw new Error('Entrada não lida inválida.');
    return withTaskLock(agentId, taskId, () => {
      const state = read(agentId, taskId);
      if (state.unreadEntryId !== entryId) return state;
      return write(agentId, taskId, { unreadEntryId: null });
    });
  }
  function setPinned(agentId, taskId, isPinned) {
    if (typeof isPinned !== 'boolean') throw new Error('Estado de fixação inválido.');
    return withTaskLock(agentId, taskId, () => {
      const current = read(agentId, taskId);
      return write(agentId, taskId, { pinnedAtMs: isPinned ? current.pinnedAtMs ?? Date.now() : null });
    });
  }
  function markUnread(agentId, taskId, entryId) {
    if (typeof entryId !== 'string' || !entryId) return read(agentId, taskId);
    const newest = transcripts.load(agentId, taskId).entries.some(entry => entry.id === entryId && entry.kind === 'message' && entry.role === 'assistant');
    return newest ? withTaskLock(agentId, taskId, () => write(agentId, taskId, { unreadEntryId: entryId })) : read(agentId, taskId);
  }
  return { list, markRead, setPinned, markUnread };
}

module.exports = { createTaskViewStateStore };
