# `classifyNode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/failures/turn-failure-classification.ts` · [Module README](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736134-736153](../../../../../../../reference/runtime/host-main.cjs#L736134-L736153) | `FunctionDeclaration` | no | `error64, seen` |
| [evaluation:589634-589653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589634-L589653) | `FunctionDeclaration` | no | `error63, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736134-736153](../../../../../../../reference/runtime/host-main.cjs#L736134-L736153) | 6 | 1 | 0 | 6 | 0 | 0 |
| [evaluation:589634-589653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589634-L589653) | 6 | 1 | 0 | 6 | 0 | 0 |

### host:736134

Calls written directly in this body: `Array.isArray`, `classifyError2`, `classifyExpectedTurnFailureErrorDetails`, `classifyNode`, `seen.add`, `seen.has`.

SHA-256 of the source span: `a8055d655f0e491e0be04807aea2696008690d7d0893fc863f2aafffda647ace`.

### evaluation:589634

Calls written directly in this body: `Array.isArray`, `classifyError2`, `classifyExpectedTurnFailureErrorDetails`, `classifyNode`, `seen.add`, `seen.has`.

SHA-256 of the source span: `044f26fe32a4bf1f77a79a8db41aa7fd5b6cf2d4d2387f74d2cef2db856f0574`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
