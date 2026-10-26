# `stepToOutlineItem`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719757-719791](../../../../../../reference/runtime/host-main.cjs#L719757-L719791) | `FunctionDeclaration` | no | `step, id` |
| [evaluation:526270-526304](../../../../../../reference/runtime/sand-eval-runner.cjs#L526270-L526304) | `FunctionDeclaration` | no | `step, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719757-719791](../../../../../../reference/runtime/host-main.cjs#L719757-L719791) | 9 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:526270-526304](../../../../../../reference/runtime/sand-eval-runner.cjs#L526270-L526304) | 9 | 0 | 0 | 7 | 0 | 0 |

### host:719757

Calls written directly in this body: `getOutlineToolCallName`, `getOutlineToolCallStatus`, `getOutlineToolCallSummary`, `sendMessageFromToolCall`.

SHA-256 of the source span: `e117d4b40a9182505caaa136b45d17cde57346691a27995c6743308954e1ff54`.

### evaluation:526270

Calls written directly in this body: `getOutlineToolCallName`, `getOutlineToolCallStatus`, `getOutlineToolCallSummary`, `sendMessageFromToolCall`.

SHA-256 of the source span: `e117d4b40a9182505caaa136b45d17cde57346691a27995c6743308954e1ff54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
