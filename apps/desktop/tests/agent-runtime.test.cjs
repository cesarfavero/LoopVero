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

test('delegates a bounded task to a distinct agent and feeds its structured result back to the parent', async () => {
  const requests = [];
  const events = [];
  const inference = {
    async generate(request) {
      requests.push(request);
      const lastUserText = request.input.filter(item => item.role === 'user').at(-1)?.content?.[0]?.text;
      if (request.input.some(item => item.role === 'system' && item.content?.[0]?.text === 'Trace original renderer code only.')) {
        return { output_text: 'The original uses a managed editor.', output: [{ type: 'message', content: [{ type: 'output_text', text: 'The original uses a managed editor.' }] }] };
      }
      if (request.input.some(item => item.type === 'function_call_output' && item.call_id === 'delegate-1')) {
        const handoff = JSON.parse(request.input.find(item => item.type === 'function_call_output' && item.call_id === 'delegate-1').output);
        assert.equal(handoff.status, 'completed');
        assert.equal(handoff.agentId, 'researcher');
        assert.equal(handoff.result, 'The original uses a managed editor.');
        return { output_text: 'The renderer comparison confirms a managed editor.', output: [{ type: 'message', content: [{ type: 'output_text', text: 'The renderer comparison confirms a managed editor.' }] }] };
      }
      if (lastUserText === 'Investigate the composer.') {
        return { output_text: '', output: [{ type: 'function_call', call_id: 'delegate-1', name: 'delegate_to_agent', arguments: JSON.stringify({ agentId: 'researcher', task: 'Compare the two renderer call paths.' }) }] };
      }
      throw new Error(`unexpected inference input: ${lastUserText}`);
    },
  };
  const toolRegistry = { definitions: [], async execute() { throw new Error('unexpected tool call'); } };
  const result = await runTurn({
    botId: 'primary', text: 'Investigate the composer.', inference, toolRegistry, agents: [{ id: 'researcher', name: 'Researcher', instructions: 'Trace original renderer code only.' }], onEvent: event => events.push(event),
  });

  assert.equal(result.text, 'The renderer comparison confirms a managed editor.');
  assert.equal(requests.length, 3);
  assert.ok(requests[0].tools.some(tool => tool.name === 'delegate_to_agent' && tool.parameters.properties.agentId.enum.includes('researcher')));
  assert.equal(requests[1].input.find(item => item.role === 'system').content[0].text, 'Trace original renderer code only.');
  assert.equal(requests[1].input.filter(item => item.role === 'user').length, 1, 'child receives only its delegated task, not parent history');
  assert.deepEqual(events.filter(event => event.type === 'subagent-start').map(event => [event.botId, event.parentBotId, event.text]), [['researcher', 'primary', 'Compare the two renderer call paths.']]);
  const start = events.find(event => event.type === 'subagent-start');
  const childFinal = events.find(event => event.type === 'assistant-final' && event.botId === 'researcher');
  const finish = events.find(event => event.type === 'subagent-finish');
  assert.ok(start.taskId);
  assert.equal(childFinal.taskId, start.taskId, 'child user, assistant, tool, and run events share one task ID');
  assert.equal(finish.taskId, start.taskId);
  assert.equal(childFinal.parentTaskId, start.parentTaskId);
  assert.equal(result.tools[0].status, 'completed');
});

test('cancelling a parent signal aborts the delegated inference and the parent turn', async () => {
  const controller = new AbortController();
  let subagentStarted;
  const started = new Promise(resolve => { subagentStarted = resolve; });
  const inference = {
    async generate(request) {
      if (request.input.some(item => item.role === 'system' && item.content?.[0]?.text === 'Child profile')) {
        subagentStarted();
        return new Promise((_resolve, reject) => request.signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }));
      }
      return { output: [{ type: 'function_call', call_id: 'delegate-cancel', name: 'delegate_to_agent', arguments: JSON.stringify({ agentId: 'child', task: 'Do the child task.' }) }] };
    },
  };
  const pending = runTurn({ botId: 'primary', text: 'Start work.', signal: controller.signal, inference, toolRegistry: { definitions: [], async execute() { throw new Error('unexpected'); } }, agents: [{ id: 'child', name: 'Child', instructions: 'Child profile' }] });
  await started;
  controller.abort();
  await assert.rejects(pending, /cancelada|turnos de inferência|aborted/i);
});

test('does not expose delegation from subagent turns or when no other agent is available', async () => {
  let request;
  const inference = { async generate(value) { request = value; return { output_text: 'done', output: [{ type: 'message', content: [{ type: 'output_text', text: 'done' }] }] }; } };
  const toolRegistry = { definitions: [], async execute() { throw new Error('unexpected'); } };
  await runTurn({ botId: 'primary', text: 'hello', agents: [{ id: 'primary', name: 'Primary' }], inference, toolRegistry });
  assert.deepEqual(request.tools, []);
});
