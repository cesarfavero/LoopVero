const test = require('node:test');
const assert = require('node:assert/strict');
const { runTurn } = require('../src/harness/agent-runtime.cjs');

test('executes a provider function call, reports tool lifecycle, and feeds result into the next inference step', async () => {
  const calls = [];
  const events = [];
  let inferenceStep = 0;
  const inference = {
    async generate(request) {
      calls.push(request);
      inferenceStep += 1;
      if (inferenceStep === 1) {
        return { output: [{ type: 'function_call', call_id: 'call-time-1', name: 'get_local_time', arguments: '{}' }] };
      }
      return { output_text: 'segunda-feira, 19 de outubro de 2026 às 08:00:00 BRT', output: [{ type: 'message', content: [{ type: 'output_text', text: 'segunda-feira, 19 de outubro de 2026 às 08:00:00 BRT' }] }] };
    },
  };
  const toolRegistry = {
    definitions: [{ type: 'function', name: 'get_local_time' }],
    async execute(name, args) {
      assert.equal(name, 'get_local_time');
      assert.equal(args, '{}');
      return 'segunda-feira, 19 de outubro de 2026 às 08:00:00 BRT';
    },
  };

  const result = await runTurn({ botId: 'primary', text: 'Que horas são?', inference, toolRegistry, onEvent: event => events.push(event) });

  assert.equal(result.status, 'completed');
  assert.equal(result.text, 'segunda-feira, 19 de outubro de 2026 às 08:00:00 BRT');
  assert.equal(calls.length, 2);
  assert.deepEqual(calls[1].input.find(item => item.type === 'function_call_output'), {
    type: 'function_call_output',
    call_id: 'call-time-1',
    output: 'segunda-feira, 19 de outubro de 2026 às 08:00:00 BRT',
  });
  assert.deepEqual(events.filter(event => event.type.startsWith('tool-')).map(event => [event.type, event.tool.status]), [
    ['tool-start', 'running'],
    ['tool-finish', 'completed'],
  ]);
  assert.equal(events[0].botId, 'primary');
  assert.equal(result.tools.length, 1);
  assert.ok(events.some(event => event.type === 'assistant-final' && event.text === result.text));
});

test('adds the saved agent instructions to the provider context as a system message', async () => {
  let request;
  const inference = { async generate(value) { request = value; return { output_text: 'ok', output: [{ type: 'message', content: [{ type: 'output_text', text: 'ok' }] }] }; } };
  const toolRegistry = { definitions: [], async execute() { throw new Error('unexpected tool call'); } };
  await runTurn({ botId: 'custom', text: 'hello', instructions: 'Follow the profile. Bearer secret-value', inference, toolRegistry });
  assert.deepEqual(request.input[0], { role: 'system', content: [{ type: 'input_text', text: 'Follow the profile. Bearer [redacted]' }] });
  assert.ok(request.input.some(item => item.role === 'user' && item.content[0].text === 'hello'));
});
