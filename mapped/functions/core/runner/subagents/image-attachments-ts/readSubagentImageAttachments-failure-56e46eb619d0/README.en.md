# `readSubagentImageAttachments/failure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/image-attachments.ts` · [Module README](../../../../../../modules/core/runner/subagents/image-attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533516-533519](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533516-L533519) | `ArrowFunctionExpression` | no | `path33, _reason, cause` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533516-533519](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533516-L533519) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:533516 uses an implicit arrow-function return.

### evaluation:533516

Calls written directly in this body: `new SandImageAttachmentError`, `unreadableImageAttachment`.

SHA-256 of the source span: `bfce50456884b9e031ee5c4e2175ce8b8c87ae418fbb005fac9119f17dd8eb74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
