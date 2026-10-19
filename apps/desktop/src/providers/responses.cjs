const MAX_RESPONSE_BYTES = 16 * 1024 * 1024;
const MAX_EVENTS = 30000;

async function readError(response) {
  const text = await response.text();
  let message = `HTTP ${response.status}`;
  try { const body = JSON.parse(text); message = body?.error?.message || body?.detail || message; } catch {}
  return message.slice(0, 700);
}

async function generateResponse({ url, model, input, tools = [], signal, onEvent = () => {}, fetchImpl = fetch }) {
  const response = await fetchImpl(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ model, input, store: false, stream: true, ...(tools.length ? { tools, tool_choice: 'auto' } : {}) }),
    signal: signal || AbortSignal.timeout(180000),
  });
  if (!response.ok) throw new Error(await readError(response));
  if (!response.body) throw new Error('CodexRouter não retornou um stream.');

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let totalBytes = 0;
  let eventCount = 0;
  let pending = '';
  let dataLines = [];
  let result;
  let failure;
  const deltas = [];
  const functionCalls = new Map();
  const usage = { inputTokens: null, outputTokens: null, totalTokens: null };
  let invocationId = null;
  let responseModel = null;
  function publish(event) { onEvent(event); }
  function parseEvent() {
    if (!dataLines.length) return;
    const raw = dataLines.join('\n');
    dataLines = [];
    if (raw === '[DONE]') return;
    eventCount += 1;
    if (eventCount > MAX_EVENTS) throw new Error('CodexRouter excedeu o limite de eventos.');
    let event;
    try { event = JSON.parse(raw); } catch { throw new Error('CodexRouter enviou um evento SSE inválido.'); }
    if (event.type === 'response.output_text.delta' && typeof event.delta === 'string') {
      deltas.push(event.delta);
      publish({ type: 'text-delta', delta: event.delta, outputIndex: event.output_index ?? null, contentIndex: event.content_index ?? null });
    }
    if (event.type === 'response.reasoning_summary_text.delta' && typeof event.delta === 'string') publish({ type: 'reasoning-delta', delta: event.delta });
    if (event.type === 'response.output_item.added' && event.item?.type === 'function_call') {
      const item = event.item;
      const call = { id: item.id || null, call_id: item.call_id || null, name: item.name || '', arguments: item.arguments || '', output_index: event.output_index ?? null };
      functionCalls.set(event.output_index ?? item.id ?? item.call_id, call);
      publish({ type: 'tool-call-start', outputIndex: call.output_index, callId: call.call_id, name: call.name });
    }
    if (event.type === 'response.function_call_arguments.delta' && typeof event.delta === 'string') {
      const call = functionCalls.get(event.output_index);
      if (call) call.arguments += event.delta;
      publish({ type: 'tool-call-arguments-delta', outputIndex: event.output_index ?? null, delta: event.delta });
    }
    if (event.type === 'response.function_call_arguments.done') {
      const call = functionCalls.get(event.output_index);
      if (call && typeof event.arguments === 'string') call.arguments = event.arguments;
      publish({ type: 'tool-call-arguments', outputIndex: event.output_index ?? null, arguments: event.arguments || call?.arguments || '' });
    }
    if (event.type === 'response.completed' || event.response?.status === 'completed') {
      result = event.response || event;
      const responseUsage = result.usage || {};
      usage.inputTokens = responseUsage.input_tokens ?? responseUsage.prompt_tokens ?? null;
      usage.outputTokens = responseUsage.output_tokens ?? responseUsage.completion_tokens ?? null;
      usage.totalTokens = responseUsage.total_tokens ?? (usage.inputTokens != null && usage.outputTokens != null ? usage.inputTokens + usage.outputTokens : null);
      invocationId = result.id || event.invocation_id || null;
      responseModel = result.model || model;
      publish({ type: 'usage', ...usage });
      publish({ type: 'provider-metadata', provider: 'codexrouter', invocationId, model: responseModel, metadata: result.metadata || null });
      publish({ type: 'completed', invocationId, model: responseModel, usage });
    }
    if (event.type === 'response.failed' || event.type === 'error') {
      failure = event.response?.error?.message || event.error?.message || 'Falha durante inferência.';
      publish({ type: 'failed', error: String(failure).slice(0, 700) });
    }
  }
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > MAX_RESPONSE_BYTES) throw new Error('Resposta do CodexRouter excedeu o limite.');
      pending += decoder.decode(value, { stream: true });
      let end;
      while ((end = pending.indexOf('\n')) !== -1) {
        const line = pending.slice(0, end).replace(/\r$/, '');
        pending = pending.slice(end + 1);
        if (!line) parseEvent();
        else if (line.startsWith('data:')) dataLines.push(line.slice(5).trimStart());
      }
      if (result || failure) break;
    }
    pending += decoder.decode();
    if (pending.startsWith('data:')) dataLines.push(pending.slice(5).trimStart());
    parseEvent();
  } finally {
    await reader.cancel().catch(() => {});
  }
  if (failure) throw new Error(String(failure).slice(0, 700));
  if (!result) throw new Error('Stream terminou sem response.completed.');
  result.__streamed_text = deltas.join('');
  result.__invocation_id = invocationId;
  result.__usage = usage;
  result.__provider_metadata = { provider: 'codexrouter', model: responseModel };
  return result;
}

module.exports = { generateResponse };
