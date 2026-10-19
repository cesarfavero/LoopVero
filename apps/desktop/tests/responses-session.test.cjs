const test = require('node:test');
const assert = require('node:assert/strict');
const { generateResponse } = require('../src/providers/responses.cjs');

function event(data) { return `data: ${JSON.stringify(data)}\n\n`; }

test('normalizes Responses stream deltas, tool-call progress, usage and terminal metadata', async () => {
  const stream = [
    { type: 'response.output_text.delta', output_index: 0, content_index: 0, delta: 'Answer' },
    { type: 'response.reasoning_summary_text.delta', delta: 'Plan' },
    { type: 'response.output_item.added', output_index: 1, item: { type: 'function_call', call_id: 'call-1', name: 'get_local_time', arguments: '' } },
    { type: 'response.function_call_arguments.delta', output_index: 1, delta: '{"timezone":' },
    { type: 'response.function_call_arguments.delta', output_index: 1, delta: '"UTC"}' },
    { type: 'response.function_call_arguments.done', output_index: 1, arguments: '{"timezone":"UTC"}' },
    { type: 'response.completed', response: { id: 'resp-1', model: 'router-model', status: 'completed', usage: { input_tokens: 8, output_tokens: 3, total_tokens: 11 }, output: [{ type: 'function_call', call_id: 'call-1', name: 'get_local_time', arguments: '{"timezone":"UTC"}' }] } },
  ].map(event).join('');
  const events = [];
  const fetchImpl = async (_url, request) => {
    assert.equal(request.method, 'POST');
    return { ok: true, body: new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode(stream)); controller.close(); } }) };
  };
  const result = await generateResponse({ url: 'http://127.0.0.1:17842/v1/responses', model: 'router-model', input: [], tools: [], onEvent: value => events.push(value), fetchImpl });

  assert.equal(result.__streamed_text, 'Answer');
  assert.equal(result.__invocation_id, 'resp-1');
  assert.deepEqual(result.__usage, { inputTokens: 8, outputTokens: 3, totalTokens: 11 });
  assert.ok(events.some(value => value.type === 'reasoning-delta' && value.delta === 'Plan'));
  assert.ok(events.some(value => value.type === 'tool-call-start' && value.callId === 'call-1'));
  assert.ok(events.some(value => value.type === 'tool-call-arguments-delta' && value.delta === '"UTC"}'));
  assert.ok(events.some(value => value.type === 'completed' && value.invocationId === 'resp-1'));
});

test('rejects malformed SSE JSON instead of silently dropping a protocol event', async () => {
  const fetchImpl = async () => ({ ok: true, body: new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode('data: {invalid}\n\n')); controller.close(); } }) });
  await assert.rejects(generateResponse({ url: 'https://example.invalid', model: 'x', fetchImpl }), /evento SSE inválido/);
});
