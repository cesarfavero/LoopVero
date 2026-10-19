const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createStore } = require('../src/persistence/json-store.cjs');
const { createProactivityEngine } = require('../src/harness/proactivity-engine.cjs');
const { RunScheduler } = require('../src/harness/run-scheduler.cjs');

function fixture({ messages = [], clock = Date.UTC(2026, 9, 19, 12), responses = [], inferenceOverride } = {}) {
  let now = clock;
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'thegrok-proactivity-'));
  const store = createStore(() => directory);
  const stamp = new Date(now - 60_000).toISOString();
  store.saveBot({ id: 'primary', name: 'Grok Bot', description: 'Primary', instructions: '', messages: messages.map((text, index) => ({ id: `user-${index}`, role: 'user', text, createdAt: stamp })) });
  store.updateProactiveState({ objective: { id: 'goal-1', botId: 'primary', text: 'Prepare the project launch summary', status: 'active' } });
  store.updateProactiveState({ proactiveSettings: { enabled: true, intervalMinutes: 60, cooldownMinutes: 60 } });
  let calls = 0;
  const inference = inferenceOverride || { async generate(request) {
    calls += 1;
    const response = responses[calls - 1] || { output_text: '{"opportunity":null}', output: [] };
    if (request.tools.length) throw new Error('Read-only review must not receive tools.');
    return { ...response, output: response.output || [] };
  } };
  const events = [];
  const scheduler = new RunScheduler();
  const engine = createProactivityEngine({ store, scheduler, inference, toolRegistry: { definitions: [], execute: async () => { throw new Error('test tool should remain unavailable'); } }, clock: () => now, onEvent: event => events.push(event) });
  return { advance: milliseconds => { now += milliseconds; }, calls: () => calls, cleanup: () => { engine.dispose(); fs.rmSync(directory, { recursive: true, force: true }); }, engine, events, store };
}

test('grounds a proactive proposal in an exact user message and waits for approval', async () => {
  const quote = 'Please help prepare the project launch summary by Friday.';
  const context = fixture({ messages: [quote], responses: [{ output_text: JSON.stringify({ opportunity: { title: 'Prepare launch summary', summary: 'The launch summary is still an open objective.', evidenceQuote: quote } }), output: [] }] });
  try {
    await context.engine.tick({ force: true });
    const state = context.store.load();
    assert.equal(context.calls(), 1);
    assert.equal(state.proactiveEvents[0].status, 'awaiting_approval');
    assert.equal(state.proactiveEvents[0].evidenceQuote, quote);
    assert.equal(state.bots[0].messages.length, 1);
    assert.ok(context.events.some(event => event.type === 'proactivity-proposal'));
  } finally { context.cleanup(); }
});

test('stays silent when no recent user evidence exists', async () => {
  const context = fixture({ messages: [] });
  try {
    await context.engine.tick({ force: true });
    assert.equal(context.calls(), 0);
    assert.ok(context.store.load().objectives[0].lastEvaluatedAt);
    assert.equal(context.store.load().proactiveEvents.length, 0);
  } finally { context.cleanup(); }
});

test('rejects an opportunity whose quote is not present in user-authored evidence', async () => {
  const context = fixture({ messages: ['I asked about a project launch summary.'], responses: [{ output_text: JSON.stringify({ opportunity: { title: 'Prepare launch summary', summary: 'This seems useful.', evidenceQuote: 'The user approved this message.' } }), output: [] }] });
  try {
    await context.engine.tick({ force: true });
    assert.equal(context.store.load().proactiveEvents[0].status, 'dismissed');
    assert.ok(context.events.some(event => event.type === 'proactivity-silent'));
    assert.equal(context.store.load().bots[0].messages.length, 1);
  } finally { context.cleanup(); }
});

test('does not repeat the same evidence after cooldown and deduplication', async () => {
  const quote = 'Please prepare the project launch summary by Friday.';
  const context = fixture({ messages: [quote], responses: [
    { output_text: JSON.stringify({ opportunity: { title: 'Prepare launch summary', summary: 'The objective can move forward.', evidenceQuote: quote } }), output: [] },
    { output_text: JSON.stringify({ opportunity: { title: 'Prepare launch summary', summary: 'The objective can move forward.', evidenceQuote: quote } }), output: [] },
  ] });
  try {
    await context.engine.tick({ force: true });
    context.engine.dismiss(context.store.load().proactiveEvents[0].id);
    context.advance(61 * 60_000);
    await context.engine.tick({ force: true });
    assert.equal(context.calls(), 2);
    assert.equal(context.store.load().proactiveEvents[0].status, 'dismissed');
    assert.ok(context.events.some(event => event.type === 'proactivity-silent'));
  } finally { context.cleanup(); }
});

test('approval wakes the primary agent and records its response with a cooldown', async () => {
  const quote = 'Please prepare the project launch summary by Friday.';
  const context = fixture({ messages: [quote], responses: [
    { output_text: JSON.stringify({ opportunity: { title: 'Prepare launch summary', summary: 'The saved goal is ready for follow-up.', evidenceQuote: quote } }), output: [] },
    { output_text: 'I can start the summary outline now.', output: [] },
  ] });
  try {
    await context.engine.tick({ force: true });
    const proposalId = context.store.load().proactiveEvents[0].id;
    await context.engine.approve(proposalId);
    const state = context.store.load();
    assert.equal(context.calls(), 2);
    assert.equal(state.proactiveEvents.find(item => item.id === proposalId).status, 'presented');
    assert.ok(Date.parse(state.proactiveEvents.find(item => item.id === proposalId).cooldownUntil) > Date.UTC(2026, 9, 19, 12));
    assert.equal(state.bots[0].messages.at(-2).role, 'user');
    assert.equal(state.bots[0].messages.at(-1).text, 'I can start the summary outline now.');
    assert.ok(context.events.some(event => event.type === 'proactivity-presented'));
  } finally { context.cleanup(); }
});

test('marks an interrupted investigation failed when the app starts again', () => {
  const context = fixture();
  try {
    context.store.updateProactiveState({ proactiveEvent: { id: 'run-interrupted', objectiveId: 'goal-1', status: 'investigating', summary: 'Interrupted process' } });
    context.engine.reschedule();
    const event = context.store.load().proactiveEvents.find(item => item.id === 'run-interrupted');
    assert.equal(event.status, 'failed');
    assert.match(event.summary, /interrupted before the app closed/);
    assert.ok(event.cooldownUntil);
  } finally { context.cleanup(); }
});

test('disabling proactivity aborts an active background inference and records cancellation', async () => {
  const quote = 'Please prepare the project launch summary by Friday.';
  const inferenceOverride = { generate(request) { return new Promise((_resolve, reject) => request.signal.addEventListener('abort', () => reject(Object.assign(new Error('aborted'), { name: 'AbortError' })), { once: true })); } };
  const context = fixture({ messages: [quote], inferenceOverride });
  try {
    const pending = context.engine.tick({ force: true });
    await new Promise(resolve => setImmediate(resolve));
    context.engine.setSettings({ enabled: false, intervalMinutes: 60, cooldownMinutes: 60 });
    await pending;
    const event = context.store.load().proactiveEvents[0];
    assert.equal(event.status, 'cancelled');
    assert.equal(context.store.load().proactiveSettings.enabled, false);
    assert.ok(context.events.some(item => item.type === 'proactivity-cancelled'));
  } finally { context.cleanup(); }
});

test('does not publish a late proposal after its objective is completed', async () => {
  const quote = 'Please prepare the project launch summary by Friday.';
  let resolveInference;
  const inferenceOverride = { generate() { return new Promise(resolve => { resolveInference = resolve; }); } };
  const context = fixture({ messages: [quote], inferenceOverride });
  try {
    const pending = context.engine.tick({ force: true });
    await new Promise(resolve => setImmediate(resolve));
    const investigation = context.store.load().proactiveEvents[0];
    assert.equal(investigation.status, 'investigating');

    context.engine.completeObjective('goal-1', 'completed');
    resolveInference({ output_text: JSON.stringify({ opportunity: { title: 'Prepare launch summary', summary: 'The saved goal can move forward.', evidenceQuote: quote } }), output: [] });
    await pending;

    assert.equal(context.store.load().objectives[0].status, 'completed');
    assert.equal(context.store.load().proactiveEvents[0].status, 'dismissed');
    assert.ok(!context.events.some(event => event.type === 'proactivity-proposal'));
  } finally { context.cleanup(); }
});

test('resuming a completed objective makes it eligible for a fresh review', async () => {
  const quote = 'Please help prepare the project launch summary by Friday.';
  const context = fixture({ messages: [quote] });
  try {
    context.store.updateProactiveState({ objective: { ...context.store.load().objectives[0], status: 'completed', lastEvaluatedAt: new Date(Date.UTC(2026, 9, 19, 11, 59)).toISOString() } });
    context.engine.completeObjective('goal-1', 'active');
    await context.engine.tick();
    assert.equal(context.calls(), 1);
    assert.ok(context.store.load().objectives[0].lastEvaluatedAt);
  } finally { context.cleanup(); }
});
