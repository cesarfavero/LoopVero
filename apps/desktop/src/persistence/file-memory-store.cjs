const fs = require('node:fs');
const path = require('node:path');
const { createHash, randomUUID } = require('node:crypto');

const MAX_CONTENT_LENGTH = 500;
const MAX_FILE_BYTES = 16 * 1024 * 1024;
const PROFILE_HEADER = '# About the user\n\n<!-- Enduring facts: who the user is, how to address them, lasting preferences.\n     Kept in mind every turn. Safe to read, grep, and edit.\n     One fact per line, as "- (YYYY-MM-DD) <fact>".\n     An indented "source:" note under a fact says how it was saved. -->\n';
const LOG_HEADER = '# Memory log\n\n<!-- Dated facts, one per line as "- (YYYY-MM-DD) <fact>". Safe to read, grep, and edit.\n     An indented "source:" note under a fact says how it was saved. -->\n';
const FACT_LINE = /^-\s+\((\d{4}-\d{2}-\d{2})\)\s+(.+?)\s*$/;
const PROVENANCE_LINE = /^\s+<!--\s*source:([a-z_]+)(?:\s+turn:(\S+?))?\s*-->\s*$/;
const SOURCES = new Set(['tool', 'extract', 'episode', 'promote', 'template']);
const TURN_ID = /^[\w.:-]{1,128}$/;

function normalize(content) {
  return typeof content === 'string' ? content.replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, MAX_CONTENT_LENGTH) : '';
}

function key(content) { return normalize(content).toLowerCase(); }
function idFor(content) { return createHash('sha1').update(key(content)).digest('hex').slice(0, 16); }
function dateFor(createdAt) {
  const timestamp = createdAt instanceof Date ? createdAt.getTime() : typeof createdAt === 'string' ? Date.parse(createdAt) : createdAt;
  if (!Number.isFinite(timestamp) || timestamp <= 0) throw new Error('Data de memória inválida.');
  return new Date(timestamp).toISOString().slice(0, 10);
}

function assertDirectory(directory, create = false, recursive = false) {
  if (create) {
    try { fs.mkdirSync(directory, { recursive, mode: 0o700 }); }
    catch (error) { if (error.code !== 'EEXIST') throw error; }
  }
  const stat = fs.lstatSync(directory);
  if (!stat.isDirectory() || stat.isSymbolicLink()) throw new Error('Diretório de memória não confiável.');
}

function readFile(file) {
  let fd;
  try { fd = fs.openSync(file, fs.constants.O_RDONLY | fs.constants.O_NOFOLLOW); }
  catch (error) { if (error.code === 'ENOENT') return ''; throw error; }
  try {
    const stat = fs.fstatSync(fd);
    if (!stat.isFile() || stat.size > MAX_FILE_BYTES) throw new Error('Arquivo de memória inválido ou grande demais.');
    return fs.readFileSync(fd, 'utf8');
  } finally { fs.closeSync(fd); }
}

function writeAtomic(file, content) {
  if (Buffer.byteLength(content) > MAX_FILE_BYTES) throw new Error('Arquivo de memória grande demais.');
  const directory = path.dirname(file);
  assertDirectory(directory, true);
  try { if (fs.lstatSync(file).isSymbolicLink()) throw new Error('Link simbólico de memória recusado.'); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  const temporary = path.join(directory, `.${path.basename(file)}.${randomUUID()}.tmp`);
  try {
    fs.writeFileSync(temporary, content, { encoding: 'utf8', mode: 0o600, flag: 'wx' });
    fs.renameSync(temporary, file);
  } finally {
    try { fs.unlinkSync(temporary); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}

function parseFacts(raw, kind, file) {
  const facts = [];
  let untagged = null;
  for (const [lineIndex, line] of raw.split('\n').entries()) {
    const match = FACT_LINE.exec(line);
    if (!match) {
      const tagged = untagged === null ? null : PROVENANCE_LINE.exec(line);
      if (tagged) {
        const fact = facts[untagged];
        fact.lastLine = lineIndex;
        if (SOURCES.has(tagged[1])) fact.provenance = { source: tagged[1], ...(tagged[2] && TURN_ID.test(tagged[2]) ? { turnId: tagged[2] } : {}) };
      }
      untagged = null;
      continue;
    }
    const content = normalize(match[2]);
    if (!content) { untagged = null; continue; }
    const createdAt = Date.parse(`${match[1]}T00:00:00Z`);
    untagged = facts.length;
    facts.push({ id: idFor(content), content, createdAt: Number.isFinite(createdAt) ? createdAt : 0, kind, path: file, firstLine: lineIndex, lastLine: lineIndex, order: facts.length });
  }
  return facts;
}

function createFileMemoryStore(rootDir, botId) {
  if (typeof rootDir !== 'string' || !path.isAbsolute(rootDir)) throw new Error('Diretório raiz de memória inválido.');
  if (typeof botId !== 'string' || !botId || botId.length > 100) throw new Error('Identificador de agente inválido.');
  const agentKey = createHash('sha256').update(botId).digest('hex');
  const agentsDir = path.join(rootDir, 'agents');
  const agentDir = path.join(agentsDir, agentKey);
  const memoryDir = path.join(agentDir, 'memory');
  const profileFile = path.join(memoryDir, 'profile.md');
  const logDir = path.join(memoryDir, 'log');

  function validate(create = false) {
    for (const [index, directory] of [rootDir, agentsDir, agentDir, memoryDir].entries()) {
      try { assertDirectory(directory, create, index === 0); }
      catch (error) { if (!create && error.code === 'ENOENT') return false; throw error; }
    }
    return true;
  }
  function logFiles() {
    if (!validate()) return [];
    try { assertDirectory(logDir); }
    catch (error) { if (error.code === 'ENOENT') return []; throw error; }
    return fs.readdirSync(logDir).filter(name => /^\d{4}-\d{2}\.md$/.test(name)).sort().map(name => path.join(logDir, name));
  }
  function allFacts() {
    if (!validate()) return [];
    const profile = parseFacts(readFile(profileFile), 'profile', profileFile);
    const logs = logFiles().flatMap(file => parseFacts(readFile(file), 'log', file));
    for (const [index, fact] of logs.entries()) fact.order = index;
    return [...profile, ...logs];
  }
  function toRecord(fact) {
    return {
      id: fact.id,
      content: fact.content,
      type: fact.kind === 'log' ? 'journal' : 'profile',
      createdAt: new Date(fact.createdAt).toISOString(),
      ...(fact.provenance ? { provenance: `${fact.provenance.source}${fact.provenance.turnId ? ` turn:${fact.provenance.turnId}` : ''}` } : {}),
    };
  }
  function list(limit = Number.MAX_SAFE_INTEGER) {
    const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : 0;
    if (!safeLimit) return [];
    const facts = allFacts();
    const byRecent = (a, b) => b.createdAt - a.createdAt || b.order - a.order;
    return [...facts.filter(fact => fact.kind === 'profile').sort(byRecent), ...facts.filter(fact => fact.kind === 'log').sort(byRecent)].slice(0, safeLimit).map(toRecord);
  }
  function add(content, createdAt, kind, provenance) {
    if (!['profile', 'log'].includes(kind)) throw new Error('Tipo de memória inválido.');
    const normalized = normalize(content);
    if (!normalized) return null;
    if (allFacts().some(fact => key(fact.content) === key(normalized))) return null;
    const date = dateFor(createdAt);
    let sourceLine = '';
    if (provenance !== undefined) {
      if (!provenance || !SOURCES.has(provenance.source) || (provenance.turnId !== undefined && !TURN_ID.test(provenance.turnId))) throw new Error('Proveniência de memória inválida.');
      sourceLine = `\n  <!-- source:${provenance.source}${provenance.turnId ? ` turn:${provenance.turnId}` : ''} -->`;
    }
    validate(true);
    const file = kind === 'profile' ? profileFile : path.join(logDir, `${date.slice(0, 7)}.md`);
    if (kind === 'log') assertDirectory(logDir, true);
    const raw = readFile(file);
    const base = raw || (kind === 'profile' ? PROFILE_HEADER : LOG_HEADER);
    const separator = base.endsWith('\n') ? '' : '\n';
    writeAtomic(file, `${base}${separator}- (${date}) ${normalized}${sourceLine}\n`);
    return toRecord({ id: idFor(normalized), content: normalized, createdAt: Date.parse(`${date}T00:00:00Z`), kind, provenance });
  }
  function removeByContent(content) {
    const normalized = normalize(content);
    if (!normalized || !validate()) return false;
    const id = idFor(normalized);
    for (const file of [profileFile, ...logFiles()]) {
      const raw = readFile(file);
      if (!raw) continue;
      const fact = parseFacts(raw, file === profileFile ? 'profile' : 'log', file).find(item => item.id === id);
      if (!fact) continue;
      const lines = raw.split('\n');
      lines.splice(fact.firstLine, fact.lastLine - fact.firstLine + 1);
      writeAtomic(file, lines.join('\n'));
      return true;
    }
    return false;
  }
  function hasFiles() {
    if (!validate()) return false;
    try { if (fs.lstatSync(profileFile).isFile()) return true; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    return logFiles().length > 0;
  }
  return { list, add, removeByContent, hasFiles, getLocation: () => memoryDir };
}

module.exports = { createFileMemoryStore };
