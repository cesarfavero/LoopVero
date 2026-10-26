# `createServerAgentProxy/createRoom`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714806-714861](../../../../../../../reference/runtime/host-main.cjs#L714806-L714861) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714806-714861](../../../../../../../reference/runtime/host-main.cjs#L714806-L714861) | 4 | 0 | 3 | 6 | 0 | 2 |

### host:714806

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `assertValidSandAgentId`, `classifyServerRoomActionError`, `clock.monotonicNow`, `deps.ensureServerRoomMembers`, `deps.listAgentsSync`, `ensureTailStarted`, `memberAgentIds.filter`, `new Map`, `new Set`, `roomCreateRetry.runWithRetry`, `roomSummaryAfterAdopt`.

Alvos de atribuição ou incremento: `confirmed`, `roomsCapability`.

SHA-256 do trecho: `2d543b6d04eb17646c194668f7d1033908c21b02a7a1d0832ad8b5b5d2490323`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
