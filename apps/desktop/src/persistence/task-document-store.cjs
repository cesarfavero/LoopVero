const fs = require('node:fs');
const path = require('node:path');
const { randomBytes, randomUUID, createHash } = require('node:crypto');

const TASK_ID = /^[0-9a-f]{10}$/;
const MAX_BODY_BYTES = 256 * 1024;
const MAX_TASKS_PER_AGENT = 500;

function taskSessionId(taskId, parentSessionId = '') {
  if (!TASK_ID.test(taskId)) throw new Error('ID de tarefa inválido.');
  if (typeof parentSessionId !== 'string' || parentSessionId.length > 200 || parentSessionId.includes('\0')) throw new Error('Sessão pai inválida.');
  return `task:${taskId}${parentSessionId ? `:${parentSessionId}` : ''}`;
}

function cleanLine(value, max, label) {
  if (typeof value !== 'string' || !value.trim() || value.length > max || /[\r\n\0]/.test(value)) throw new Error(`${label} inválido.`);
  return value.trim();
}

function cleanBody(value) {
  if (typeof value !== 'string' || Buffer.byteLength(value, 'utf8') > MAX_BODY_BYTES || value.includes('\0')) throw new Error('Corpo da tarefa inválido.');
  return value;
}

function validateAgentId(value) {
  if (typeof value !== 'string' || !value || value.length > 100 || !/^[\w.-]+$/.test(value)) throw new Error('Agente inválido.');
  return value;
}

function documentOf(record) {
  const quote = value => JSON.stringify(value);
  return `---\nname: ${quote(record.name)}\ndescription: ${quote(record.description)}\nstatus: ${record.status}\n---\n${record.body}`;
}

function createTaskDocumentStore(getUserDataPath, hasAgent) {
  function withAgentLock(agentId, operation) {
    const safeAgentId = validateAgentId(agentId);
    if (!hasAgent(safeAgentId)) throw new Error('Agente não encontrado.');
    const root = path.join(getUserDataPath(), 'task-documents');
    try { if (fs.lstatSync(root).isSymbolicLink()) throw new Error('Diretório de tarefas inválido.'); }
    catch (error) { if (error?.code !== 'ENOENT') throw error; }
    fs.mkdirSync(root, { recursive: true, mode: 0o700 });
    if (fs.lstatSync(root).isSymbolicLink()) throw new Error('Diretório de tarefas inválido.');
    const hash = createHash('sha256').update(safeAgentId).digest('hex');
    const lock = path.join(root, `${hash}.lock`);
    let fd;
    try { fd = fs.openSync(lock, 'wx', 0o600); }
    catch (error) {
      if (error?.code === 'EEXIST') throw new Error('Outra operação de tarefa está em andamento. Tente novamente.');
      throw error;
    }
    try { return operation(); }
    finally { fs.closeSync(fd); fs.unlinkSync(lock); }
  }
  function fileFor(agentId, taskId) {
    const safeAgentId = validateAgentId(agentId);
    if (!hasAgent(safeAgentId)) throw new Error('Agente não encontrado.');
    if (!TASK_ID.test(taskId)) throw new Error('ID de tarefa inválido.');
    const hash = createHash('sha256').update(safeAgentId).digest('hex');
    return path.join(getUserDataPath(), 'task-documents', hash, `${taskId}.json`);
  }
  function read(agentId, taskId) {
    const file = fileFor(agentId, taskId);
    try {
      if (fs.lstatSync(path.join(getUserDataPath(), 'task-documents')).isSymbolicLink() || fs.lstatSync(path.dirname(file)).isSymbolicLink()) throw new Error('Diretório de tarefas inválido.');
      const stat = fs.lstatSync(file);
      if (!stat.isFile() || stat.isSymbolicLink() || stat.size > MAX_BODY_BYTES + 8192) throw new Error('Arquivo de tarefa inválido.');
      const record = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (record.id !== taskId || record.agentId !== agentId || !['open', 'done'].includes(record.status) || !Number.isSafeInteger(record.version) || record.version < 1) throw new Error('Registro de tarefa inválido.');
      const clean = { ...record, name: cleanLine(record.name, 120, 'Nome da tarefa'), description: cleanLine(record.description, 120, 'Descrição da tarefa'), body: cleanBody(record.body) };
      return { ...clean, content: documentOf(clean), sessionId: taskSessionId(taskId) };
    } catch (error) {
      if (error?.code === 'ENOENT') return null;
      throw error;
    }
  }
  function write(record, createOnly = false) {
    const file = fileFor(record.agentId, record.id);
    const root = path.join(getUserDataPath(), 'task-documents');
    try { if (fs.lstatSync(root).isSymbolicLink()) throw new Error('Diretório de tarefas inválido.'); }
    catch (error) { if (error?.code !== 'ENOENT') throw error; }
    fs.mkdirSync(path.dirname(file), { recursive: true, mode: 0o700 });
    if (fs.lstatSync(root).isSymbolicLink()) throw new Error('Diretório de tarefas inválido.');
    if (fs.lstatSync(path.dirname(file)).isSymbolicLink()) throw new Error('Diretório de tarefas inválido.');
    const temporary = `${file}.${randomUUID()}.tmp`;
    fs.writeFileSync(temporary, JSON.stringify(record), { mode: 0o600, flag: 'wx' });
    try {
      if (createOnly) fs.linkSync(temporary, file);
      else fs.renameSync(temporary, file);
    } finally {
      try { fs.unlinkSync(temporary); } catch (error) { if (error?.code !== 'ENOENT') throw error; }
    }
    return read(record.agentId, record.id);
  }
  function list(agentId, status = 'open') {
    if (!['open', 'done'].includes(status)) throw new Error('Estado de tarefa inválido.');
    const directory = path.dirname(fileFor(agentId, '0000000000'));
    let names;
    try {
      if (fs.lstatSync(path.join(getUserDataPath(), 'task-documents')).isSymbolicLink()) throw new Error('Diretório de tarefas inválido.');
      if (fs.lstatSync(directory).isSymbolicLink()) throw new Error('Diretório de tarefas inválido.');
      names = fs.readdirSync(directory).filter(name => TASK_ID.test(path.parse(name).name) && name.endsWith('.json'));
    }
    catch (error) { if (error?.code === 'ENOENT') return []; throw error; }
    if (names.length > MAX_TASKS_PER_AGENT) throw new Error('Limite local de tarefas excedido.');
    return names.map(name => read(agentId, name.slice(0, -5))).filter(record => record?.status === status).sort((a, b) => b.updatedAtMs - a.updatedAtMs).map(({ id, agentId: ownerId, name, description, status: taskStatus, version, createdAtMs, updatedAtMs, sessionId }) => ({ id, agentId: ownerId, name, description, status: taskStatus, version, createdAtMs, updatedAtMs, sessionId }));
  }
  function create(agentId, input) {
    validateAgentId(agentId);
    const name = cleanLine(input?.name, 120, 'Nome da tarefa');
    const description = cleanLine(input?.description, 120, 'Descrição da tarefa');
    const body = cleanBody(input?.body ?? '');
    return withAgentLock(agentId, () => {
      if (list(agentId, 'open').length + list(agentId, 'done').length >= MAX_TASKS_PER_AGENT) throw new Error('Limite local de tarefas atingido.');
      for (let attempt = 0; attempt < 5; attempt++) {
        const id = randomBytes(5).toString('hex');
        if (read(agentId, id)) continue;
        const now = Date.now();
        return write({ id, agentId, name, description, status: 'open', body, version: 1, createdAtMs: now, updatedAtMs: now }, true);
      }
      throw new Error('Não foi possível gerar um ID de tarefa.');
    });
  }
  function update(agentId, taskId, input) {
    return withAgentLock(agentId, () => {
      const current = read(agentId, taskId);
      if (!current) throw new Error('Tarefa não encontrada.');
      if (!input || typeof input !== 'object' || !Number.isSafeInteger(input.version) || input.version !== current.version) throw new Error('Versão da tarefa desatualizada.');
      const fields = ['name', 'description', 'status', 'body'];
      if (!fields.some(field => Object.hasOwn(input, field)) || Object.keys(input).some(key => key !== 'version' && !fields.includes(key))) throw new Error('Edição de tarefa inválida.');
      const record = {
        ...current,
        name: input.name === undefined ? current.name : cleanLine(input.name, 120, 'Nome da tarefa'),
        description: input.description === undefined ? current.description : cleanLine(input.description, 120, 'Descrição da tarefa'),
        status: input.status === undefined ? current.status : input.status,
        body: input.body === undefined ? current.body : cleanBody(input.body),
        version: current.version + 1,
        updatedAtMs: Date.now(),
      };
      if (!['open', 'done'].includes(record.status)) throw new Error('Estado de tarefa inválido.');
      delete record.content;
      delete record.sessionId;
      return write(record);
    });
  }
  return { list, read, create, update };
}

module.exports = { createTaskDocumentStore, taskSessionId };
