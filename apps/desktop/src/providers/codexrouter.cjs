const { generateResponse } = require('./responses.cjs');
const BASE = 'http://127.0.0.1:17842';

async function getJson(route, timeoutMs = 8000) {
  const response = await fetch(`${BASE}${route}`, { signal: AbortSignal.timeout(timeoutMs) });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body?.error?.message || body?.detail || `CodexRouter HTTP ${response.status}`);
  return body;
}

async function providerStatus() {
  try {
    const [health, catalog] = await Promise.all([getJson('/health'), getJson('/v1/models')]);
    return { connected: health.ok === true, models: (catalog.models || []).filter(item => item.supported_in_api !== false).map(item => ({ id: item.slug, name: item.display_name || item.slug })) };
  } catch (error) {
    return { connected: false, models: [], error: String(error?.message || error).slice(0, 300) };
  }
}

function generate({ model, input, tools, signal, onDelta }) {
  return generateResponse({ url: `${BASE}/v1/responses`, model, input, tools, signal, onEvent: event => { if (event.type === 'text-delta') onDelta?.(event.delta); } });
}

function createPromptSession({ model, signal, onEvent = () => {} }) {
  return {
    execute({ input, tools = [] }) {
      return generateResponse({ url: `${BASE}/v1/responses`, model, input, tools, signal, onEvent });
    },
  };
}

module.exports = { providerStatus, generate, createPromptSession };
