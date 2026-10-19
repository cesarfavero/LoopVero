const definitions = [{
  type: 'function', name: 'get_local_time',
  description: 'Retorna data e hora local deste Mac.',
  parameters: { type: 'object', properties: {}, required: [], additionalProperties: false }, strict: true,
}];

async function execute(name, rawArguments = '{}') {
  let args;
  try { args = typeof rawArguments === 'string' ? JSON.parse(rawArguments) : rawArguments; }
  catch { throw new Error('Argumentos da ferramenta em JSON inválido.'); }
  if (!args || typeof args !== 'object' || Array.isArray(args)) throw new Error('Argumentos de ferramenta inválidos.');
  if (name === 'get_local_time') return new Date().toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'long' });
  throw new Error(`Ferramenta não registrada ou não autorizada: ${name}`);
}

module.exports = { definitions, execute };
