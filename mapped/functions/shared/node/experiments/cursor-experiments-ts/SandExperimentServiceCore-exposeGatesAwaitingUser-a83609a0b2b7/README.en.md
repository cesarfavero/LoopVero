# `SandExperimentServiceCore.exposeGatesAwaitingUser`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553140-553150](../../../../../../../reference/runtime/host-main.cjs#L553140-L553150) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553140-553150](../../../../../../../reference/runtime/host-main.cjs#L553140-L553150) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:553140

Calls written directly in this body: `this.checkFeatureGate`, `this.exposeRenderedTreatment`, `this.gateExposuresAwaitingUser.clear`, `this.hasCurrentStatsigIdentity`, `this.renderedGateExposuresAwaitingUser.clear`.

SHA-256 of the source span: `dd82be32295f88f25b6979d87c7629bfb6c3d42e8a1e1f95080aa322cdda5b49`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
