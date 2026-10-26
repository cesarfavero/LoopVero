# `addTokenCounts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-usage.ts` · [Module README](../../../../../modules/core/runner/turn-usage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525221-525223](../../../../../../reference/runtime/sand-eval-runner.cjs#L525221-L525223) | `FunctionDeclaration` | no | `left, right` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525221-525223](../../../../../../reference/runtime/sand-eval-runner.cjs#L525221-L525223) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525221

Calls written directly in this body: `Math.min`.

SHA-256 of the source span: `ba0177c079f32dc0e9050f696c709bb83888cd587186200b0f2a384b98f7d0fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
