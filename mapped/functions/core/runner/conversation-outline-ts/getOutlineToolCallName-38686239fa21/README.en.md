# `getOutlineToolCallName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-outline.ts` · [Module README](../../../../../modules/core/runner/conversation-outline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719702-719714](../../../../../../reference/runtime/host-main.cjs#L719702-L719714) | `FunctionDeclaration` | no | `toolCall2` |
| [evaluation:526178-526190](../../../../../../reference/runtime/sand-eval-runner.cjs#L526178-L526190) | `FunctionDeclaration` | no | `toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719702-719714](../../../../../../reference/runtime/host-main.cjs#L719702-L719714) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:526178-526190](../../../../../../reference/runtime/sand-eval-runner.cjs#L526178-L526190) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:719702

Calls written directly in this body: `getUnwrappedToolCallName`.

SHA-256 of the source span: `7e3675e62f942ff275ce8f485cd09da3656dee22c120cb7a878a3914df3dacce`.

### evaluation:526178

Calls written directly in this body: `getUnwrappedToolCallName`.

SHA-256 of the source span: `7e3675e62f942ff275ce8f485cd09da3656dee22c120cb7a878a3914df3dacce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
