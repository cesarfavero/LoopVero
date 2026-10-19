const EVENT_TYPES = new Set([
  'text-delta', 'reasoning-delta', 'tool-call-start', 'tool-call-arguments-delta',
  'tool-call-arguments', 'usage', 'provider-metadata', 'completed', 'failed',
]);

function createPromptSession({ inference, model, signal, onEvent = () => {} }) {
  if (!inference || (typeof inference.createPromptSession !== 'function' && typeof inference.generate !== 'function')) {
    throw new TypeError('Inference adapter must provide createPromptSession() or generate().');
  }

  if (typeof inference.createPromptSession === 'function') {
    const session = inference.createPromptSession({ model, signal, onEvent: event => {
      if (event && EVENT_TYPES.has(event.type)) onEvent(event);
    } });
    if (!session || typeof session.execute !== 'function') throw new TypeError('Prompt session must provide execute().');
    return session;
  }

  return {
    async execute({ input, tools = [] }) {
      return inference.generate({ model, input, tools, signal, onDelta: delta => onEvent({ type: 'text-delta', delta }) });
    },
  };
}

module.exports = { EVENT_TYPES, createPromptSession };
