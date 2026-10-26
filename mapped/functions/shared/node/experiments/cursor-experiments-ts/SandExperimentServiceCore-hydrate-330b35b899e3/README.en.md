# `SandExperimentServiceCore.hydrate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553384-553428](../../../../../../../reference/runtime/host-main.cjs#L553384-L553428) | `method` | no | `config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553384-553428](../../../../../../../reference/runtime/host-main.cjs#L553384-L553428) | 10 | 0 | 0 | 2 | 0 | 0 |

### host:553384

Calls written directly in this body: `JSON.parse`, `createClient2`, `parseStatsigBootstrap`, `statsigBootstrapChange`, `this.client.dataAdapter.setData`, `this.client.initializeSync`, `this.client.logEvent`, `this.client.updateUserSync`, `this.flushExposureLog`, `this.hasHydratedStatsigUserId`, `this.settleHydratedUserIdReady`.

Assignment or increment targets: `bootstrap`, `this.client`, `this.hasUnsavedBootstrap`, `this.hydratedBootstrap`, `this.isInitialized`, `this.lastHydratedUserId`.

SHA-256 of the source span: `a9ec62eb007b38b19cbff98ac0cb555ac710ade2ff69aef55cbb27d13dcd3ddc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
