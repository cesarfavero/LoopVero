# `SandExperimentServiceCore.exposeFeatureGate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553115-553132](../../../../../../../reference/runtime/host-main.cjs#L553115-L553132) | `method` | no | `name18, rendered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553115-553132](../../../../../../../reference/runtime/host-main.cjs#L553115-L553132) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:553115

Calls written directly in this body: `SESSION_LATCHED_GATES.has`, `this.checkFeatureGate`, `this.exposeRenderedTreatment`, `this.gateExposuresAwaitingUser.add`, `this.hasCurrentStatsigIdentity`, `this.overrideStore.isFlagName`, `this.renderedGateExposuresAwaitingUser.set`.

SHA-256 of the source span: `ccf089ffa0ac04de21d42e96b010c67708a39c28dcf84da666fb46b1294c34a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
