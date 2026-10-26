# `mergeTurnUsage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-usage.ts` · [Module README](../../../../../modules/core/runner/turn-usage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525224-525235](../../../../../../reference/runtime/sand-eval-runner.cjs#L525224-L525235) | `FunctionDeclaration` | no | `current2, next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525224-525235](../../../../../../reference/runtime/sand-eval-runner.cjs#L525224-L525235) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:525224

Calls written directly in this body: `addTokenCounts`.

SHA-256 of the source span: `1db1e174e67476ed37ab0950b12d2a6822f725d38b1fc748fecd5a847ce758b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
