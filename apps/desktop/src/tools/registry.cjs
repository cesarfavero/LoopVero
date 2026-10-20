const definitions = [{
  type: 'function', name: 'get_local_time',
  description: 'Retorna data e hora local deste Mac.',
  parameters: { type: 'object', properties: {}, required: [], additionalProperties: false }, strict: true,
}];

function memoryTools(memoryStore) {
  if (!memoryStore || typeof memoryStore.recall !== 'function' || typeof memoryStore.write !== 'function' || typeof memoryStore.forget !== 'function') return [];
  return [
    {
      type: 'function', name: 'RecallMemory',
      description: 'Read the current agent’s saved private memories. Search by topic and request a result limit (default 20, maximum 50).',
      parameters: { type: 'object', additionalProperties: false, properties: { query: { type: 'string', minLength: 1, maxLength: 1000 }, limit: { anyOf: [{ type: 'integer', minimum: 1, maximum: 50 }, { type: 'null' }] } }, required: ['query', 'limit'] }, strict: true,
    },
    {
      type: 'function', name: 'UpdateMemory',
      description: 'Write one durable fact to this agent’s private memory or forget one exact fact. Retrieve the exact fact with RecallMemory before forgetting it.',
      parameters: { type: 'object', additionalProperties: false, properties: { action: { type: 'string', enum: ['write', 'forget'] }, fact: { type: 'string', minLength: 1, maxLength: 500 }, type: { anyOf: [{ type: 'string', enum: ['profile', 'journal'] }, { type: 'null' }] } }, required: ['action', 'fact', 'type'] }, strict: true,
    },
  ];
}

function parseArguments(rawArguments) {
  let args;
  try { args = typeof rawArguments === 'string' ? JSON.parse(rawArguments) : rawArguments; }
  catch { throw new Error('Argumentos da ferramenta em JSON inválido.'); }
  if (!args || typeof args !== 'object' || Array.isArray(args)) throw new Error('Argumentos de ferramenta inválidos.');
  return args;
}

async function execute(name, rawArguments = '{}', memoryStore) {
  const args = parseArguments(rawArguments);
  if (name === 'get_local_time') return new Date().toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'long' });
  if (name === 'RecallMemory') {
    if (!memoryStore) throw new Error('Memória indisponível nesta execução.');
    if (Object.keys(args).some(key => !['query', 'limit'].includes(key))) throw new Error('Argumentos da ferramenta inválidos.');
    const query = typeof args.query === 'string' ? args.query.trim() : '';
    if (!query || query.length > 1000 || (args.limit !== null && args.limit !== undefined && (!Number.isInteger(args.limit) || args.limit < 1 || args.limit > 50))) throw new Error('Consulta de memória inválida.');
    const limit = Number.isInteger(args.limit) ? Math.max(1, Math.min(50, args.limit)) : 20;
    const memories = memoryStore.recall(query, limit);
    let output = memories.length
      ? [`Top ${memories.length} ${memories.length === 1 ? 'match' : 'matches'} in this agent’s private memory:`, ...memories.map(memory => `- (${memory.createdAt ? new Date(memory.createdAt).toISOString().slice(0, 10) : 'unknown date'}, ${memory.type}) ${memory.content}`)].join('\n')
      : `No facts in this agent’s private memory match “${query}”. Try different words or a shorter literal fragment.`;
    if (output.length > 4000) output = `${output.slice(0, 3980)}\n(More matches omitted.)`;
    return output;
  }
  if (name === 'UpdateMemory') {
    if (!memoryStore) throw new Error('Memória indisponível nesta execução.');
    if (!['write', 'forget'].includes(args.action) || typeof args.fact !== 'string' || !args.fact.trim() || args.fact.length > 500 || (args.type !== null && args.type !== undefined && !['profile', 'journal'].includes(args.type)) || (args.action === 'write' && !['profile', 'journal'].includes(args.type)) || Object.keys(args).some(key => !['action', 'fact', 'type'].includes(key))) throw new Error('Ação de memória inválida.');
    if (args.action === 'write') {
      return JSON.stringify(await memoryStore.write(args.fact, args.type || 'journal'));
    }
    return JSON.stringify(await memoryStore.forget(args.fact));
  }
  throw new Error(`Ferramenta não registrada ou não autorizada: ${name}`);
}

module.exports = { definitions, execute, memoryTools };
