# `SandExperimentServiceCore.getGroupChatDiscouragementPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553002-553013](../../../../../../../reference/runtime/host-main.cjs#L553002-L553013) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553002-553013](../../../../../../../reference/runtime/host-main.cjs#L553002-L553013) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:553002

Calls written directly in this body: `this.getExperiment`, `this.getExperimentGroupName`, `this.hasHydratedStatsigUserId`.

SHA-256 of the source span: `97448e13fdec7c5d23fa1c6d0b3d882159d552d15318dc7e2599f00862f65abf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
