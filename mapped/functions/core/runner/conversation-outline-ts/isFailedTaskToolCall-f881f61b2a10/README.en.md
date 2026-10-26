# `isFailedTaskToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719731-719733](../../../../../../reference/runtime/host-main.cjs#L719731-L719733) | `FunctionDeclaration` | no | `toolCall2` |
| [evaluation:526244-526246](../../../../../../reference/runtime/sand-eval-runner.cjs#L526244-L526246) | `FunctionDeclaration` | no | `toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719731-719733](../../../../../../reference/runtime/host-main.cjs#L719731-L719733) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526244-526246](../../../../../../reference/runtime/sand-eval-runner.cjs#L526244-L526246) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719731

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3e33ffcfc0b381dbb004c3cca8db6bbeadd3d06f8491c31b0f9cce130f9a25b3`.

### evaluation:526244

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3e33ffcfc0b381dbb004c3cca8db6bbeadd3d06f8491c31b0f9cce130f9a25b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
