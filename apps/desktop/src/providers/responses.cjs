const MAX_RESPONSE_BYTES = 16 * 1024 * 1024;
const MAX_EVENTS = 30000;

async function readError(response) {
  const text = await response.text();
  let message = `HTTP ${response.status}`;
  try { const body = JSON.parse(text); message = body?.error?.message || body?.detail || message; } catch {}
  return message.slice(0, 700);
}

async function generateResponse({ url, model, input, tools = [], signal, onDelta }) {
  const response = await fetch(url, {
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
  function parseEvent() {
    if (!dataLines.length) return;
    const raw = dataLines.join('\n');
    dataLines = [];
    if (raw === '[DONE]') return;
    eventCount += 1;
    if (eventCount > MAX_EVENTS) throw new Error('CodexRouter excedeu o limite de eventos.');
    let event;
    try { event = JSON.parse(raw); } catch { return; }
    if (event.type === 'response.output_text.delta' && typeof event.delta === 'string') {
      deltas.push(event.delta);
      onDelta?.(event.delta);
    }
    if (event.type === 'response.completed' || event.response?.status === 'completed') result = event.response || event;
    if (event.type === 'response.failed' || event.type === 'error') failure = event.response?.error?.message || event.error?.message || 'Falha durante inferência.';
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
    if (result || failure) await reader.cancel().catch(() => {});
  }
  if (failure) throw new Error(String(failure).slice(0, 700));
  if (!result) throw new Error('Stream terminou sem response.completed.');
  result.__streamed_text = deltas.join('');
  return result;
}

module.exports = { generateResponse };
