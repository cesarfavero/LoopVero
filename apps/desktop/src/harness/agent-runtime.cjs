const { randomUUID } = require('node:crypto');
const router = require('../providers/codexrouter.cjs');
const tools = require('../tools/registry.cjs');
const MAX_TURNS = 8;
const MAX_TOOL_CALLS_PER_TURN = 4;

function textFrom(response) {
  if (typeof response.output_text === 'string' && response.output_text) return response.output_text;
  return (response.output || []).flatMap(item => item.content || []).filter(item => item.type === 'output_text').map(item => item.text || '').join('');
}

async function runTurn({ botId, text, history = [], instructions = '', model = 'codexrouter/gateway', signal, onEvent = () => {}, inference = router, toolRegistry = tools }) {
  const taskId = randomUUID();
  const input = history.slice(-80).filter(item => ['user', 'assistant', 'system'].includes(item.role)).map(item => ({ role: item.role, content: [{ type: item.role === 'assistant' ? 'output_text' : 'input_text', text: String(item.text).slice(0, 24000) }] }));
  const systemInstruction = typeof instructions === 'string' ? instructions.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').trim().slice(0, 12000) : '';
  if (systemInstruction) input.unshift({ role: 'system', content: [{ type: 'input_text', text: systemInstruction }] });
  input.push({ role: 'user', content: [{ type: 'input_text', text: text.slice(0, 12000) }] });
  const toolRuns = [];
  for (let turn = 0; turn < MAX_TURNS; turn += 1) {
    if (signal?.aborted) throw new Error('Execução cancelada.');
    const response = await inference.generate({ model, input, tools: toolRegistry.definitions, signal, onDelta: delta => onEvent({ taskId, botId, type: 'text-delta', delta }) });
    const calls = (response.output || []).filter(item => item.type === 'function_call');
    if (calls.length > MAX_TOOL_CALLS_PER_TURN) throw new Error('Limite de chamadas de ferramenta por turno excedido.');
    input.push(...(response.output || []));
    if (!calls.length) {
      const answer = textFrom(response) || response.__streamed_text || '(o modelo devolveu uma resposta vazia)';
      onEvent({ taskId, botId, type: 'assistant-final', text: answer, model });
      onEvent({ taskId, botId, type: 'completed' });
      return { taskId, botId, status: 'completed', text: answer, model, tools: toolRuns };
    }
    for (const call of calls) {
      if (signal?.aborted) throw new Error('Execução cancelada.');
      if (typeof call.call_id !== 'string' || !call.call_id || typeof call.name !== 'string') throw new Error('Identidade de ferramenta inválida.');
      const toolRun = { id: call.call_id, name: call.name, status: 'running' };
      toolRuns.push(toolRun);
      onEvent({ taskId, botId, type: 'tool-start', tool: { ...toolRun } });
      let output;
      try {
        output = await toolRegistry.execute(call.name, call.arguments);
        toolRun.status = 'completed';
      } catch (error) {
        output = `Erro da ferramenta: ${String(error?.message || error).replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 700)}`;
        toolRun.status = 'failed';
      }
      toolRun.output = String(output).replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 12000);
      input.push({ type: 'function_call_output', call_id: call.call_id, output: String(output).slice(0, 12000) });
      onEvent({ taskId, botId, type: 'tool-finish', tool: { ...toolRun } });
    }
  }
  throw new Error(`Execução excedeu o limite de ${MAX_TURNS} turnos de inferência.`);
}

module.exports = { runTurn };
