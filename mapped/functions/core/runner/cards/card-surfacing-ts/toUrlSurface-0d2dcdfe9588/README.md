# `toUrlSurface`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/card-surfacing.ts` · [README do módulo](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763846-763864](../../../../../../../reference/runtime/host-main.cjs#L763846-L763864) | `ArrowFunctionExpression` | sim | `card, context2` |
| [host:763872-763883](../../../../../../../reference/runtime/host-main.cjs#L763872-L763883) | `ArrowFunctionExpression` | não | `card, context2` |
| [evaluation:557189-557207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557189-L557207) | `ArrowFunctionExpression` | sim | `card, context2` |
| [evaluation:557215-557226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557215-L557226) | `ArrowFunctionExpression` | não | `card, context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763846-763864](../../../../../../../reference/runtime/host-main.cjs#L763846-L763864) | 4 | 0 | 1 | 5 | 0 | 0 |
| [host:763872-763883](../../../../../../../reference/runtime/host-main.cjs#L763872-L763883) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:557189-557207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557189-L557207) | 4 | 0 | 1 | 5 | 0 | 0 |
| [evaluation:557215-557226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557215-L557226) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:763846

Chamadas escritas diretamente neste corpo: `TAILNET_HOLD_SURFACES[computed]`, `TAILSCALE_CONNECT_SERVERS.has`, `card.serverId.toLowerCase`, `connectorSignInPluginId`, `context2.resolvePluginId`, `cursorSharePointSignInUrl`, `mcpTailnetPostureHoldOfDetail`.

SHA-256 do trecho: `40ae49189ecd4dc2ae57083f55da468cc5dbbd1b0d3222bcb4844076a1b07c5c`.

### host:763872

Chamadas escritas diretamente neste corpo: `cursorDashboardIntegrationsUrl`, `scmProviderPhrase`.

SHA-256 do trecho: `66b406bc455387881fa364b3861191bf5cacf0d0390a36abe78bffad54521c4f`.

### evaluation:557189

Chamadas escritas diretamente neste corpo: `TAILNET_HOLD_SURFACES[computed]`, `TAILSCALE_CONNECT_SERVERS.has`, `card.serverId.toLowerCase`, `connectorSignInPluginId`, `context2.resolvePluginId`, `cursorSharePointSignInUrl`, `mcpTailnetPostureHoldOfDetail`.

SHA-256 do trecho: `40ae49189ecd4dc2ae57083f55da468cc5dbbd1b0d3222bcb4844076a1b07c5c`.

### evaluation:557215

Chamadas escritas diretamente neste corpo: `cursorDashboardIntegrationsUrl`, `scmProviderPhrase`.

SHA-256 do trecho: `66b406bc455387881fa364b3861191bf5cacf0d0390a36abe78bffad54521c4f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
