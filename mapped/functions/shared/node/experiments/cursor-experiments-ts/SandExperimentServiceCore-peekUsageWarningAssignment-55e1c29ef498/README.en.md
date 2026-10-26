# `SandExperimentServiceCore.peekUsageWarningAssignment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553090-553097](../../../../../../../reference/runtime/host-main.cjs#L553090-L553097) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553090-553097](../../../../../../../reference/runtime/host-main.cjs#L553090-L553097) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:553090

Calls written directly in this body: `sandUsageWarningExperimentAssignmentOf`, `this.hasHydratedStatsigUserId`, `this.readExperiment`.

SHA-256 of the source span: `778bbe69c5eba819f0668da1690b498984ee25cbf8f426908896e05600e6b5ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
