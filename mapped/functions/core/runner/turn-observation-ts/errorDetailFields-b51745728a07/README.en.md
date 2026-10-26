# `errorDetailFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588567-588574](../../../../../../reference/runtime/sand-eval-runner.cjs#L588567-L588574) | `FunctionDeclaration` | no | `detail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588567-588574](../../../../../../reference/runtime/sand-eval-runner.cjs#L588567-L588574) | 4 | 0 | 0 | 2 | 0 | 0 |

### evaluation:588567

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `fields3.bearerError`, `fields3.errorMessage`, `fields3.errorStatus`.

SHA-256 of the source span: `53a41f1855903e20ad84befb5f4e09edbb6735922a860c712e19af3550f2c323`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
