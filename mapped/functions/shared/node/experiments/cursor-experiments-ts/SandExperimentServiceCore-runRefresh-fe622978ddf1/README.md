# `SandExperimentServiceCore.runRefresh`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553285-553371](../../../../../../../reference/runtime/host-main.cjs#L553285-L553371) | `method` | sim | `trigger2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553285-553371](../../../../../../../reference/runtime/host-main.cjs#L553285-L553371) | 10 | 0 | 3 | 4 | 0 | 1 |

### host:553285

Chamadas escritas diretamente neste corpo: `.filter`, `Object.values`, `errorLogTag`, `fetchStatsigBootstrap`, `isStatsigBootstrapTeamStateUnavailableError`, `readStatsigBootstrapUserId`, `reportExperimentsDiagnostic`, `saveCachedBootstrap`, `this.clock.now`, `this.exposeGatesAwaitingUser`, `this.hydrate`, `this.options.getCacheDir`, `this.refresh`, `this.refreshSnapshot`, `this.waitOutRateLimit`.

Alvos de atribuição ou incremento: `hasLanded`, `this.authenticatedBootstrapPending`, `this.flagsFetchedAtMs`, `this.hasAuthenticatedNetworkBootstrap`, `this.hasFreshAuthenticatedExperimentBootstrap`, `this.hasLiveNetworkBootstrap`, `this.hasUnsavedBootstrap`, `this.isRefreshing`, `this.pendingRefreshTrigger`, `this.rateLimitedUntilMs`, `this.savedBootstrap`.

SHA-256 do trecho: `58a79525e44be36b62dbce691e5afb1c157799d48be02c158e839ea3f2049d05`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
