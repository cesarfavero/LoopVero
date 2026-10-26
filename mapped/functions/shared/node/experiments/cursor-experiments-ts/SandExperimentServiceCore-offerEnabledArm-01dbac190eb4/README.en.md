# `SandExperimentServiceCore.offerEnabledArm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553058-553066](../../../../../../../reference/runtime/host-main.cjs#L553058-L553066) | `method` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553058-553066](../../../../../../../reference/runtime/host-main.cjs#L553058-L553066) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:553058

Calls written directly in this body: `isUnknownRecord2`, `this.flushExposureLog`, `this.readExperiment`.

SHA-256 of the source span: `1a7d6e18becaf7203633e45535d8ee7bb7abbd193d6aa8ab68091efea0fd79c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
