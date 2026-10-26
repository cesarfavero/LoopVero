# `SandExperimentServiceCore.runRefresh`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553285-553371](../../../../../../../reference/runtime/host-main.cjs#L553285-L553371) | `method` | yes | `trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553285-553371](../../../../../../../reference/runtime/host-main.cjs#L553285-L553371) | 10 | 0 | 3 | 4 | 0 | 1 |

### host:553285

Calls written directly in this body: `.filter`, `Object.values`, `errorLogTag`, `fetchStatsigBootstrap`, `isStatsigBootstrapTeamStateUnavailableError`, `readStatsigBootstrapUserId`, `reportExperimentsDiagnostic`, `saveCachedBootstrap`, `this.clock.now`, `this.exposeGatesAwaitingUser`, `this.hydrate`, `this.options.getCacheDir`, `this.refresh`, `this.refreshSnapshot`, `this.waitOutRateLimit`.

Assignment or increment targets: `hasLanded`, `this.authenticatedBootstrapPending`, `this.flagsFetchedAtMs`, `this.hasAuthenticatedNetworkBootstrap`, `this.hasFreshAuthenticatedExperimentBootstrap`, `this.hasLiveNetworkBootstrap`, `this.hasUnsavedBootstrap`, `this.isRefreshing`, `this.pendingRefreshTrigger`, `this.rateLimitedUntilMs`, `this.savedBootstrap`.

SHA-256 of the source span: `58a79525e44be36b62dbce691e5afb1c157799d48be02c158e839ea3f2049d05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
