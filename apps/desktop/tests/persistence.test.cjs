const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createStore } = require('../src/persistence/json-store.cjs');

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
