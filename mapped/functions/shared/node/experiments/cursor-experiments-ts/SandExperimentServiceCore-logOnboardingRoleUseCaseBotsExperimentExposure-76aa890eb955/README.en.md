# `SandExperimentServiceCore.logOnboardingRoleUseCaseBotsExperimentExposure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553080-553083](../../../../../../../reference/runtime/host-main.cjs#L553080-L553083) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553080-553083](../../../../../../../reference/runtime/host-main.cjs#L553080-L553083) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:553080

Calls written directly in this body: `this.getOnboardingJobRoleEnabled`, `this.logExperimentExposure`.

SHA-256 of the source span: `6a597bf7387bc4ca334511728d2e187a729d2e4bbadab8ee605c1cf5f5973b31`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
