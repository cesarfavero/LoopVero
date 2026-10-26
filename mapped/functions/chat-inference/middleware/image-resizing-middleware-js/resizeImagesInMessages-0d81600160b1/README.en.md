# `resizeImagesInMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617668-617673](../../../../../../reference/runtime/host-main.cjs#L617668-L617673) | `FunctionDeclaration` | yes | `{ ctx, messages: messages2, resizeOptions, checkedImageParts }` |
| [evaluation:287039-287044](../../../../../../reference/runtime/sand-eval-runner.cjs#L287039-L287044) | `FunctionDeclaration` | yes | `{ ctx, messages, resizeOptions, checkedImageParts }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617668-617673](../../../../../../reference/runtime/host-main.cjs#L617668-L617673) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:287039-287044](../../../../../../reference/runtime/sand-eval-runner.cjs#L287039-L287044) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:617668

Calls written directly in this body: `asyncMapValues`, `messages2.some`.

SHA-256 of the source span: `7fe9886433bead8ad8f04fba4fa4e2c4081e4be285615c865eb5feaa91827033`.

### evaluation:287039

Calls written directly in this body: `asyncMapValues`, `messages.some`.

SHA-256 of the source span: `6b468c7fda1d164508acc98762b66b7c81adfe582d4ed16297ce5bb87c6c8380`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
