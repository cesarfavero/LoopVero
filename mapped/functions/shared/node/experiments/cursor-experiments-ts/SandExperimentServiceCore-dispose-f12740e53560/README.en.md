# `SandExperimentServiceCore.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553233-553260](../../../../../../../reference/runtime/host-main.cjs#L553233-L553260) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553233-553260](../../../../../../../reference/runtime/host-main.cjs#L553233-L553260) | 0 | 1 | 3 | 0 | 0 | 1 |

### host:553233

Calls written directly in this body: `client.shutdown`, `errorLogTag`, `property.clearListeners`, `reportExperimentsDiagnostic`, `resolve31`, `this.disposeAbort.abort`, `this.gateProperties.values`, `this.listeners.clear`, `this.pollHandle.dispose`, `this.releaseRateLimitWait`.

Assignment or increment targets: `this.client`, `this.hasAuthenticatedNetworkBootstrap`, `this.hydratedUserIdReady`, `this.isDisposed`, `this.pollHandle`, `this.resolveHydratedUserIdReady`.

SHA-256 of the source span: `ad7fd5ccbc20cd9775dcd207ca9394d7d1a6b0b43759a292acead78178c77015`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
