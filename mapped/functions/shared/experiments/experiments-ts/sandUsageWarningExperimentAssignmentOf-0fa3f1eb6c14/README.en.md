# `sandUsageWarningExperimentAssignmentOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/experiments/experiments.ts` · [Module README](../../../../../modules/shared/experiments/experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451277-451288](../../../../../../reference/runtime/host-main.cjs#L451277-L451288) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451277-451288](../../../../../../reference/runtime/host-main.cjs#L451277-L451288) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:451277

Calls written directly in this body: `Number.isFinite`, `isUnknownRecord2`.

SHA-256 of the source span: `f3142371df17a714c72bfd2cadb8be015637a1d1f629b8b531ee8af98b81f3b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
