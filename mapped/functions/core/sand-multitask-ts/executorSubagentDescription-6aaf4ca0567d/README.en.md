# `executorSubagentDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/tasks/README.en.md).

**Module:** `core/sand-multitask.ts` · [Module README](../../../../modules/core/sand-multitask-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:530233-530245](../../../../../reference/runtime/sand-eval-runner.cjs#L530233-L530245) | `ArrowFunctionExpression` | no | `toolName, { forked, canvasOffered }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530233-530245](../../../../../reference/runtime/sand-eval-runner.cjs#L530233-L530245) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:530233 uses an implicit arrow-function return.

### evaluation:530233

Calls written directly in this body: `.join`, `backgroundSubagentLine`.

SHA-256 of the source span: `0cd13b0658a8f497ecd1fc5e16e62213ddff7047a19f6c649b399bf2069a1314`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
