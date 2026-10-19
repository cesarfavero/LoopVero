const test = require('node:test');
const assert = require('node:assert/strict');
const { createPromptSession, EVENT_TYPES } = require('../src/harness/prompt-session.cjs');

test('opens one provider-neutral session and forwards only typed inference events', async () => {
  const controller = new AbortController();
  const emitted = [];
  let config;
  let request;
  const adapter = {
    createPromptSession(value) {
      config = value;
      return { async execute(step) { request = step; value.onEvent({ type: 'usage', inputTokens: 4 }); value.onEvent({ type: 'raw-provider-debug' }); return { output_text: 'done' }; } };
    },
  };
  const session = createPromptSession({ inference: adapter, model: 'local-model', signal: controller.signal, onEvent: event => emitted.push(event) });
  const result = await session.execute({ input: [{ role: 'user', content: 'hello' }], tools: [{ type: 'function', name: 'clock' }] });

  assert.equal(config.model, 'local-model');
  assert.equal(config.signal, controller.signal);
  assert.equal(request.tools[0].name, 'clock');
  assert.deepEqual(emitted, [{ type: 'usage', inputTokens: 4 }]);
  assert.deepEqual(EVENT_TYPES.has('completed'), true);
  assert.equal(result.output_text, 'done');
});

test('adapts an existing inference function behind the session boundary', async () => {
  let request;
  const deltas = [];
  const session = createPromptSession({
    inference: { async generate(value) { request = value; value.onDelta('hello'); return { output_text: 'hello' }; } },
    model: 'router-model',
    onEvent: event => deltas.push(event),
  });
  await session.execute({ input: [], tools: [] });
  assert.equal(request.model, 'router-model');
  assert.deepEqual(deltas, [{ type: 'text-delta', delta: 'hello' }]);
});
