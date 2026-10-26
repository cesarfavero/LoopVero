# `readSubagentImageAttachments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/image-attachments.ts` · [Module README](../../../../../../modules/core/runner/subagents/image-attachments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533503-533530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533503-L533530) | `FunctionDeclaration` | yes | `{   ctx,   box,   boxId,   attachments,   readStore: readStore2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533503-533530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L533503-L533530) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:533503

Calls written directly in this body: `images.map`, `readBoundBoxImages`.

SHA-256 of the source span: `8474b235e28b0523eaaa7eabfd63537a0f073d502c6c39e2bf762e713fd61a47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
