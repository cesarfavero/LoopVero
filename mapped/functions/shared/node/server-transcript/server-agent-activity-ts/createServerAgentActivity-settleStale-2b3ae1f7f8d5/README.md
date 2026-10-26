# `createServerAgentActivity/settleStale`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-activity.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711054-711066](../../../../../../../reference/runtime/host-main.cjs#L711054-L711066) | `ArrowFunctionExpression` | não | `agentId, sessionId, session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711054-711066](../../../../../../../reference/runtime/host-main.cjs#L711054-L711066) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:711054

Chamadas escritas diretamente neste corpo: `.sessions.get`, `agents.get`, `publish`.

Alvos de atribuição ou incremento: `session.live`, `session.staleTimer`, `session.workingTaskIds`.

SHA-256 do trecho: `859188e113e5d9edb0b2ed9737bc96a4159772a0da5fd4cdced2fb8f92eb651d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
