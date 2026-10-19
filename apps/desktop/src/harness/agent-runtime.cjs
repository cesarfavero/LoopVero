const { randomUUID } = require('node:crypto');
const router = require('../providers/codexrouter.cjs');
const tools = require('../tools/registry.cjs');
const { createPromptSession } = require('./prompt-session.cjs');
const MAX_TURNS = 8;
const MAX_TOOL_CALLS_PER_TURN = 4;
const MAX_SUBAGENTS_PER_TURN = 2;
const MAX_SUBAGENT_TASK_CHARS = 6000;
const DELEGATE_TOOL = 'delegate_to_agent';

function normalizeAgentRoster(agents, botId) {
  if (!Array.isArray(agents)) return [];
  return agents.filter(agent => agent && typeof agent.id === 'string' && agent.id !== botId && typeof agent.name === 'string')
    .slice(0, 20)
    .map(agent => ({ id: agent.id.slice(0, 100), name: agent.name.slice(0, 100), instructions: typeof agent.instructions === 'string' ? agent.instructions.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 12000) : '' }));
}

function delegationDefinition(agents) {
  if (!agents.length) return null;
  return {
    type: 'function', name: DELEGATE_TOOL,
    description: 'Delegate a bounded subtask to one of the available agents. The subagent runs independently with its own profile instructions and returns a result to this turn.',
    parameters: {
      type: 'object', additionalProperties: false, required: ['agentId', 'task'],
      properties: {
        agentId: { type: 'string', enum: agents.map(agent => agent.id) },
        task: { type: 'string', minLength: 1, maxLength: MAX_SUBAGENT_TASK_CHARS },
      },
    },
    strict: true,
  };
}

function parseDelegationArgs(rawArguments) {
  let args;
  try { args = typeof rawArguments === 'string' ? JSON.parse(rawArguments) : rawArguments; }
  catch { throw new Error('Argumentos de delegação em JSON inválido.'); }
  if (!args || typeof args !== 'object' || Array.isArray(args) || Object.keys(args).some(key => !['agentId', 'task'].includes(key))) {
    throw new Error('Argumentos de delegação inválidos.');
  }
  if (typeof args.agentId !== 'string' || typeof args.task !== 'string' || !args.task.trim() || args.task.length > MAX_SUBAGENT_TASK_CHARS) {
    throw new Error('A delegação exige agente disponível e tarefa entre 1 e 6000 caracteres.');
  }
  return { agentId: args.agentId, task: args.task.trim() };
}

function textFrom(response) {
  if (typeof response.output_text === 'string' && response.output_text) return response.output_text;
  return (response.output || []).flatMap(item => item.content || []).filter(item => item.type === 'output_text').map(item => item.text || '').join('');
}

async function runTurn({ botId, text, history = [], instructions = '', model = 'codexrouter/gateway', signal, onEvent = () => {}, inference = router, toolRegistry = tools, agents = [], parentTaskId = null, taskId = randomUUID() }) {
  const availableAgents = normalizeAgentRoster(agents, botId);
  const delegateTool = availableAgents.length ? delegationDefinition(availableAgents) : null;
  const definitions = delegateTool ? [...toolRegistry.definitions, delegateTool] : toolRegistry.definitions;
  const input = history.slice(-80).filter(item => ['user', 'assistant', 'system'].includes(item.role)).map(item => ({ role: item.role, content: [{ type: item.role === 'assistant' ? 'output_text' : 'input_text', text: String(item.text).slice(0, 24000) }] }));
  const systemInstruction = typeof instructions === 'string' ? instructions.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').trim().slice(0, 12000) : '';
  if (systemInstruction) input.unshift({ role: 'system', content: [{ type: 'input_text', text: systemInstruction }] });
  input.push({ role: 'user', content: [{ type: 'input_text', text: text.slice(0, 12000) }] });
  const toolRuns = [];
  let delegatedRuns = 0;
  const session = createPromptSession({ inference, model, signal, onEvent: event => {
    if (event.type === 'text-delta') onEvent({ taskId, botId, type: 'text-delta', delta: event.delta });
    else onEvent({ taskId, botId, type: 'inference-event', event });
  } });
  for (let turn = 0; turn < MAX_TURNS; turn += 1) {
    if (signal?.aborted) throw new Error('Execução cancelada.');
    const response = await session.execute({ input, tools: definitions });
    const calls = (response.output || []).filter(item => item.type === 'function_call');
    if (calls.length > MAX_TOOL_CALLS_PER_TURN) throw new Error('Limite de chamadas de ferramenta por turno excedido.');
    input.push(...(response.output || []));
    if (!calls.length) {
      const answer = textFrom(response) || response.__streamed_text || '(o modelo devolveu uma resposta vazia)';
      onEvent({ taskId, botId, type: 'assistant-final', text: answer, model, ...(parentTaskId ? { parentTaskId } : {}) });
      onEvent({ taskId, botId, type: 'completed' });
      return { taskId, botId, status: 'completed', text: answer, model, tools: toolRuns };
    }
    for (const call of calls) {
      if (signal?.aborted) throw new Error('Execução cancelada.');
      if (typeof call.call_id !== 'string' || !call.call_id || typeof call.name !== 'string') throw new Error('Identidade de ferramenta inválida.');
      const toolRun = { id: call.call_id, name: call.name, status: 'running' };
      toolRuns.push(toolRun);
      onEvent({ taskId, botId, type: 'tool-start', tool: { ...toolRun }, ...(parentTaskId ? { parentTaskId } : {}) });
      let output;
      try {
        if (call.name === DELEGATE_TOOL) {
          if (delegatedRuns >= MAX_SUBAGENTS_PER_TURN) throw new Error(`Limite de ${MAX_SUBAGENTS_PER_TURN} subagentes por turno excedido.`);
          const args = parseDelegationArgs(call.arguments);
          const agent = availableAgents.find(item => item.id === args.agentId);
          if (!agent) throw new Error('O agente solicitado não está disponível para delegação.');
          delegatedRuns += 1;
          const childTaskId = randomUUID();
          onEvent({ type: 'subagent-start', taskId: childTaskId, parentTaskId: taskId, parentBotId: botId, botId: agent.id, agentName: agent.name, text: args.task });
          let childResult;
          let childPreview = '';
          try {
            childResult = await runTurn({
              botId: agent.id,
              text: args.task,
              instructions: agent.instructions,
              model,
              signal,
              inference,
              toolRegistry,
              agents: [],
              parentTaskId: taskId,
              taskId: childTaskId,
              onEvent: event => {
                if (event.type === 'text-delta') {
                  childPreview = `${childPreview}${event.delta}`.slice(-1200);
                  onEvent({ type: 'subagent-progress', taskId: childTaskId, parentTaskId: taskId, parentBotId: botId, botId: agent.id, agentName: agent.name, preview: childPreview });
                  return;
                }
                onEvent({ ...event, parentBotId: botId });
              },
            });
            onEvent({ type: 'subagent-finish', taskId: childTaskId, parentTaskId: taskId, parentBotId: botId, botId: agent.id, agentName: agent.name, status: 'completed', text: args.task, result: childResult.text });
          } catch (error) {
            onEvent({ type: 'subagent-finish', taskId: childTaskId, parentTaskId: taskId, parentBotId: botId, botId: agent.id, agentName: agent.name, status: signal?.aborted ? 'cancelled' : 'failed', text: args.task, error: String(error?.message || error).replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 700) });
            throw error;
          }
          output = JSON.stringify({ status: childResult.status, agentId: agent.id, agentName: agent.name, taskId: childResult.taskId, parentTaskId: taskId, result: childResult.text });
        } else {
          output = await toolRegistry.execute(call.name, call.arguments);
        }
        toolRun.status = 'completed';
      } catch (error) {
        output = `Erro da ferramenta: ${String(error?.message || error).replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 700)}`;
        toolRun.status = 'failed';
      }
      toolRun.output = String(output).replace(/Bearer\s+\S+/gi, 'Bearer [redacted]').slice(0, 12000);
      input.push({ type: 'function_call_output', call_id: call.call_id, output: toolRun.output });
      onEvent({ taskId, botId, type: 'tool-finish', tool: { ...toolRun }, ...(parentTaskId ? { parentTaskId } : {}) });
    }
  }
  throw new Error(`Execução excedeu o limite de ${MAX_TURNS} turnos de inferência.`);
}

module.exports = { DELEGATE_TOOL, MAX_SUBAGENTS_PER_TURN, runTurn };
