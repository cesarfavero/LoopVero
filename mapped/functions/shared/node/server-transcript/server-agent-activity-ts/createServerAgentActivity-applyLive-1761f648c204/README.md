# `createServerAgentActivity/applyLive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-agent-activity.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:711077-711095](../../../../../../../reference/runtime/host-main.cjs#L711077-L711095) | `ArrowFunctionExpression` | não | `agentId, live` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711077-711095](../../../../../../../reference/runtime/host-main.cjs#L711077-L711095) | 4 | 0 | 0 | 0 | 0 | 0 |

### host:711077

Chamadas escritas diretamente neste corpo: `Math.max`, `Number`, `armStale`, `clock.now`, `liveOverlayOf`, `normalizeGrokBotSessionId`, `previous.staleTimer.dispose`, `state.sessions.delete`, `state.sessions.get`, `state.sessions.set`, `stateFor`.

SHA-256 do trecho: `ce6744a7e0561d67c08fbc28eeb248ed27643b6b91319486c80d3c6630412ef3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
