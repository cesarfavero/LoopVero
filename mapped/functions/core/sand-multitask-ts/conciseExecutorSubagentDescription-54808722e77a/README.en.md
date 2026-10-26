# `conciseExecutorSubagentDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tasks/README.en.md).

**Module:** `core/sand-multitask.ts` · [Module README](../../../../modules/core/sand-multitask-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530246-530252](../../../../../reference/runtime/sand-eval-runner.cjs#L530246-L530252) | `ArrowFunctionExpression` | no | `{ forked, canvasOffered }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530246-530252](../../../../../reference/runtime/sand-eval-runner.cjs#L530246-L530252) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:530246 uses an implicit arrow-function return.

### evaluation:530246

Calls written directly in this body: `.join`.

SHA-256 of the source span: `33da8d2f9b345b82b931bbc6c04f7807cb56acc5a7a4ea07919262d1b75d4ce5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
