# `getOutlineToolCallSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719725-719730](../../../../../../reference/runtime/host-main.cjs#L719725-L719730) | `FunctionDeclaration` | no | `toolCall2` |
| [evaluation:526201-526206](../../../../../../reference/runtime/sand-eval-runner.cjs#L526201-L526206) | `FunctionDeclaration` | no | `toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719725-719730](../../../../../../reference/runtime/host-main.cjs#L719725-L719730) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526201-526206](../../../../../../reference/runtime/sand-eval-runner.cjs#L526201-L526206) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:719725

Calls written directly in this body: `getTaskSummary`.

SHA-256 of the source span: `3cd522ff59de832d505a92290e872c9086eec694381840979c7006683e4f1947`.

### evaluation:526201

Calls written directly in this body: `getTaskSummary`.

SHA-256 of the source span: `3cd522ff59de832d505a92290e872c9086eec694381840979c7006683e4f1947`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
