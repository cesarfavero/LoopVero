# `createServerAgentProxy/refreshRoster`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714585-714597](../../../../../../../reference/runtime/host-main.cjs#L714585-L714597) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714585-714597](../../../../../../../reference/runtime/host-main.cjs#L714585-L714597) | 1 | 2 | 0 | 0 | 0 | 0 |

### host:714585

Chamadas escritas diretamente neste corpo: `agents.filter`, `deps.listAgentsSync`, `indexer.noteAgent`, `knownAgents.add`, `knownAgents.clear`, `requiredAgents.add`, `requiredAgents.clear`.

SHA-256 do trecho: `09f7c0d9e9e6ee474086300d1e30040fee93f8fc9719bcea023ee4689307896c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
