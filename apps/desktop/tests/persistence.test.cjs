const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createStore } = require('../src/persistence/json-store.cjs');
const { createFileMemoryStore } = require('../src/persistence/file-memory-store.cjs');

test('creates and updates a bot without losing its messages', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-store-'));
  try {
    const store = createStore(() => directory);
    const first = store.load();
    assert.equal(first.bots[0].id, 'primary');
    store.saveBot({ id: 'primary', name: 'Grok Bot', description: 'Primary', messages: [{ id: 'user-1', role: 'user', text: 'hello' }] });
    store.saveBot({ id: 'primary', name: 'Changed', description: 'Primary', messages: [{ id: 'user-1', role: 'user', text: 'hello' }] });
    assert.equal(store.load().bots[0].name, 'Changed');
    assert.equal(store.load().bots[0].messages.length, 1);
    assert.equal((fs.statSync(path.join(directory, 'thegrok-state.json')).mode & 0o777), 0o600);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('persists a validated application theme preference without changing other state', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-theme-'));
  try {
    const store = createStore(() => directory);
    assert.equal(store.load().themePreference, 'system');
    store.saveBot({ id: 'primary', name: 'Grok Bot', messages: [{ id: 'hello', role: 'user', text: 'keep me' }] });
    assert.equal(store.updateThemePreference('light').themePreference, 'light');
    assert.equal(store.load().bots[0].messages[0].text, 'keep me');
    assert.throws(() => store.updateThemePreference('sepia'), /tema inválida/);
    assert.equal(store.load().themePreference, 'light');
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('persists safe structured rich text alongside its model-readable transcript', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-rich-message-'));
  try {
    const store = createStore(() => directory);
    store.saveBot({ id: 'primary', name: 'Grok Bot', messages: [{
      id: 'rich-user-1', role: 'user', text: '**hello**',
      richText: { type: 'doc', content: [{ type: 'paragraph', content: [
        { type: 'text', text: 'hello Bearer secret', marks: [{ type: 'bold' }, { type: 'link', attrs: { href: 'javascript:alert(1)' } }] },
      ] }] },
    }] });
    const message = store.load().bots[0].messages[0];
    assert.equal(message.text, '**hello**');
    assert.deepEqual(message.richText.content[0].content[0].marks, [{ type: 'bold' }]);
    assert.equal(message.richText.content[0].content[0].text, 'hello Bearer [redacted]');
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('rejects invalid bot records', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-store-'));
  try { assert.throws(() => createStore(() => directory).saveBot({ id: '', name: '' }), /inválido/); }
  finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('profile updates preserve the latest transcript even with stale renderer data', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-store-'));
  try {
    const store = createStore(() => directory);
    store.saveBot({ id: 'primary', name: 'Grok Bot', description: 'Primary', messages: [{ role: 'user', text: 'latest' }] });
    store.saveBotProfile({ id: 'primary', name: 'Renamed', description: 'Updated', messages: [] });
    assert.equal(store.load().bots[0].messages[0].text, 'latest');
    assert.equal(store.load().bots[0].name, 'Renamed');
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('persists agent instructions across profile edits and redacts bearer-like values', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-store-'));
  try {
    const store = createStore(() => directory);
    store.saveBotProfile({ id: 'primary', name: 'Grok Bot', description: 'Primary', instructions: 'Use this rule. Bearer secret-value' });
    store.saveBotProfile({ id: 'primary', name: 'Renamed', description: 'Updated', instructions: 'Use this rule. Bearer secret-value' });
    assert.equal(store.load().bots[0].instructions, 'Use this rule. Bearer [redacted]');
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('partial profile updates preserve fields omitted by a stale renderer', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-store-'));
  try {
    const store = createStore(() => directory);
    store.saveBotProfile({ id: 'primary', name: 'Grok Bot', description: 'Primary', instructions: 'Follow the saved profile.' });
    store.saveBotProfile({ id: 'primary', name: 'Renamed', description: 'Changed' });
    assert.equal(store.load().bots[0].instructions, 'Follow the saved profile.');
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('persists sanitized tool outline entries separately from conversation messages', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-store-'));
  try {
    const store = createStore(() => directory);
    store.saveBot({ id: 'primary', name: 'Grok Bot', messages: [{ id: 'user-1', role: 'user', text: 'hora?' }], toolCalls: [{ id: 'call-1', name: 'get_local_time', status: 'completed', summary: 'Bearer hidden' }] });
    const bot = store.load().bots[0];
    assert.equal(bot.messages.length, 1);
    assert.equal(bot.messages[0].id, 'user-1');
    assert.deepEqual(bot.toolCalls[0], { id: 'call-1', name: 'get_local_time', status: 'completed', summary: 'Bearer [redacted]', createdAt: bot.toolCalls[0].createdAt });
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('persists subagent parent task identity on its transcript entries', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-subagent-'));
  try {
    const store = createStore(() => directory);
    store.saveBot({
      id: 'researcher', name: 'Researcher',
      messages: [
        { id: 'child-task', taskId: 'child-task', parentTaskId: 'parent-task', role: 'user', text: 'Inspect the renderer.' },
        { id: 'child-result', taskId: 'child-task', parentTaskId: 'parent-task', role: 'assistant', text: 'The editor is managed.' },
      ],
    });
    assert.deepEqual(store.load().bots.find(bot => bot.id === 'researcher').messages.map(message => message.parentTaskId), ['parent-task', 'parent-task']);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('keeps the delegated task and its answer as separate transcript entries under one task ID', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-subagent-'));
  try {
    const store = createStore(() => directory);
    store.saveBot({
      id: 'researcher', name: 'Researcher',
      messages: [
        { id: 'message-user', taskId: 'child-task', parentTaskId: 'parent-task', role: 'user', text: 'Investigate this.' },
        { id: 'message-assistant', taskId: 'child-task', parentTaskId: 'parent-task', role: 'assistant', text: 'Found it.' },
      ],
    });
    const messages = store.load().bots.find(bot => bot.id === 'researcher').messages;
    assert.deepEqual(messages.map(message => [message.id, message.role, message.taskId]), [
      ['message-user', 'user', 'child-task'],
      ['message-assistant', 'assistant', 'child-task'],
    ]);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('merges transcript entries by id so concurrent run updates are not lost', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-store-'));
  try {
    const store = createStore(() => directory);
    store.saveBot({ id: 'primary', name: 'Grok Bot', messages: [{ id: 'user-1', role: 'user', text: 'Question' }] });
    store.saveBot({ id: 'primary', name: 'Grok Bot', messages: [{ id: 'user-1', role: 'user', text: 'Question' }], toolCalls: [{ id: 'tool-1', name: 'get_local_time', status: 'pending', summary: 'Em execução' }] });
    assert.deepEqual(store.load().bots[0].messages.map(message => message.id), ['user-1']);
    store.saveBot({ id: 'primary', name: 'Grok Bot', messages: [], toolCalls: [{ id: 'tool-1', name: 'get_local_time', status: 'completed', summary: 'hora' }] });
    assert.equal(store.load().bots[0].toolCalls.find(call => call.id === 'tool-1').status, 'completed');
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('stores private profile and journal memories per bot and removes only an exact fact', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-memory-'));
  try {
    const store = createStore(() => directory);
    store.saveBotProfile({ id: 'agent-a', name: 'Agent A' });
    store.saveBotProfile({ id: 'agent-b', name: 'Agent B' });
    const saved = store.writeBotMemory('agent-a', { fact: '  Prefers   dark mode ', memoryType: 'profile', turnId: 'task-1' });
    assert.equal(saved.outcome.added, true);
    const profileFile = path.join(directory, 'agents', require('node:crypto').createHash('sha256').update('agent-a').digest('hex'), 'memory', 'profile.md');
    assert.match(fs.readFileSync(profileFile, 'utf8'), /# About the user[\s\S]*- \(\d{4}-\d{2}-\d{2}\) Prefers dark mode\n  <!-- source:tool turn:task-1 -->/);
    assert.equal(JSON.parse(fs.readFileSync(path.join(directory, 'thegrok-state.json'), 'utf8')).bots.find(bot => bot.id === 'agent-a').memories.length, 0);
    assert.equal(saved.memories[0].id, require('node:crypto').createHash('sha1').update('prefers dark mode').digest('hex').slice(0, 16));
    assert.equal(saved.memories[0].provenance, 'tool turn:task-1');
    assert.equal(store.writeBotMemory('agent-a', { fact: 'PREFERS dark mode', memoryType: 'journal' }).outcome.duplicate, true);
    store.writeBotMemory('agent-b', { fact: 'Uses Linux', memoryType: 'journal' });
    const logDirectory = path.join(directory, 'agents', require('node:crypto').createHash('sha256').update('agent-b').digest('hex'), 'memory', 'log');
    assert.match(fs.readFileSync(path.join(logDirectory, `${new Date().toISOString().slice(0, 7)}.md`), 'utf8'), /# Memory log[\s\S]*Uses Linux/);
    assert.equal(store.load().bots.find(bot => bot.id === 'agent-b').memories.length, 1);
    assert.equal(store.forgetBotMemory('agent-a', 'dark mode').outcome.removed, false);
    assert.equal(store.forgetBotMemory('agent-a', 'Prefers dark mode').outcome.removed, true);
    assert.deepEqual(store.load().bots.find(bot => bot.id === 'agent-a').memories, []);
    assert.doesNotMatch(fs.readFileSync(profileFile, 'utf8'), /Prefers dark mode|source:tool turn:task-1/);
    assert.equal(store.load().bots.find(bot => bot.id === 'agent-b').memories[0].content, 'Uses Linux');
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('migrates legacy JSON memories into per-agent files and keeps a backup', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-memory-migration-'));
  try {
    const stateFile = path.join(directory, 'thegrok-state.json');
    const legacy = { schemaVersion: 1, bots: [{ id: 'primary', name: 'Grok Bot', messages: [], memories: [{ content: 'Old preference', type: 'profile', createdAt: '2026-10-01T12:00:00.000Z', provenance: 'tool turn:legacy-1' }, { content: 'Old event', type: 'journal', createdAt: '2026-09-02T00:00:00.000Z' }] }] };
    fs.writeFileSync(stateFile, JSON.stringify(legacy), { mode: 0o600 });
    const store = createStore(() => directory);
    assert.deepEqual(store.load().bots[0].memories.map(item => item.content), ['Old preference', 'Old event']);
    assert.deepEqual(JSON.parse(fs.readFileSync(stateFile, 'utf8')).bots[0].memories, []);
    assert.deepEqual(JSON.parse(fs.readFileSync(`${stateFile}.pre-file-memory.bak`, 'utf8')).bots[0].memories.map(item => item.content), ['Old preference', 'Old event']);
    assert.deepEqual(store.load().bots[0].memories.map(item => item.content), ['Old preference', 'Old event']);
    assert.equal((fs.statSync(`${stateFile}.pre-file-memory.bak`).mode & 0o777), 0o600);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('reads manually edited memory files and refuses symlinked memory paths', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-memory-files-'));
  try {
    const files = createFileMemoryStore(directory, 'primary');
    files.add('First fact', '2026-10-01T12:00:00.000Z', 'profile', { source: 'tool', turnId: 'turn-1' });
    const profileFile = path.join(files.getLocation(), 'profile.md');
    fs.appendFileSync(profileFile, '- (2026-10-02) Edited outside the app\n');
    assert.deepEqual(files.list().map(item => item.content), ['Edited outside the app', 'First fact']);
    assert.equal(files.removeByContent('First fact'), true);
    assert.doesNotMatch(fs.readFileSync(profileFile, 'utf8'), /First fact|source:tool turn:turn-1/);
    fs.renameSync(profileFile, `${profileFile}.real`);
    fs.symlinkSync(`${profileFile}.real`, profileFile);
    assert.throws(() => files.list(), /ELOOP|symbolic|simbólico|inválido/);
    assert.throws(() => files.add('Unsafe write', Date.now(), 'profile'), /ELOOP|symbolic|simbólico|inválido/);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});

test('loads private memory before the first JSON state file has been created', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-memory-first-start-'));
  try {
    const store = createStore(() => directory);
    assert.equal(fs.existsSync(path.join(directory, 'thegrok-state.json')), false);
    assert.equal(store.writeBotMemory('primary', { fact: 'Remember on first start', memoryType: 'profile' }).outcome.added, true);
    assert.equal(store.load().bots[0].memories[0].content, 'Remember on first start');
    assert.equal(store.forgetBotMemory('primary', 'Remember on first start').outcome.removed, true);
    assert.deepEqual(store.load().bots[0].memories, []);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
});
