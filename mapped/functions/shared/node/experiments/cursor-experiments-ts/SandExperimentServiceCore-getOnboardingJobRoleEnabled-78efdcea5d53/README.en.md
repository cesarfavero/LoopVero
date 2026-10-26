# `SandExperimentServiceCore.getOnboardingJobRoleEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553026-553032](../../../../../../../reference/runtime/host-main.cjs#L553026-L553032) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553026-553032](../../../../../../../reference/runtime/host-main.cjs#L553026-L553032) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:553026

Calls written directly in this body: `Object.hasOwn`, `this.getExperiment`.

SHA-256 of the source span: `ebe6bd725d555de799208ad418a83c96e990a4ed03a5788a81a771f22a9ab003`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
