# `getOutlineToolCallStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719734-719740](../../../../../../reference/runtime/host-main.cjs#L719734-L719740) | `FunctionDeclaration` | no | `event, toolCall2` |
| [evaluation:526247-526253](../../../../../../reference/runtime/sand-eval-runner.cjs#L526247-L526253) | `FunctionDeclaration` | no | `event, toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719734-719740](../../../../../../reference/runtime/host-main.cjs#L719734-L719740) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:526247-526253](../../../../../../reference/runtime/sand-eval-runner.cjs#L526247-L526253) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:719734

Calls written directly in this body: `decodeSandToolActivity`, `isFailedTaskToolCall`.

SHA-256 of the source span: `6eb45a0132e00297d2b7576d0d790ea2c9a6363447680e0fdeabc51e1540df74`.

### evaluation:526247

Calls written directly in this body: `decodeSandToolActivity`, `isFailedTaskToolCall`.

SHA-256 of the source span: `6eb45a0132e00297d2b7576d0d790ea2c9a6363447680e0fdeabc51e1540df74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
