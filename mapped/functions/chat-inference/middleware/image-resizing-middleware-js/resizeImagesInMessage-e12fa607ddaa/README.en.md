# `resizeImagesInMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617489-617667](../../../../../../reference/runtime/host-main.cjs#L617489-L617667) | `FunctionDeclaration` | yes | `{ ctx, message, resizeOptions, checkedImageParts }` |
| [evaluation:286860-287038](../../../../../../reference/runtime/sand-eval-runner.cjs#L286860-L287038) | `FunctionDeclaration` | yes | `{ ctx, message, resizeOptions, checkedImageParts }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617489-617667](../../../../../../reference/runtime/host-main.cjs#L617489-L617667) | 24 | 3 | 3 | 6 | 0 | 3 |
| [evaluation:286860-287038](../../../../../../reference/runtime/sand-eval-runner.cjs#L286860-L287038) | 24 | 3 | 3 | 6 | 0 | 3 |

### host:617489

Calls written directly in this body: `.toLowerCase`, `.toString`, `Array.isArray`, `Buffer.byteLength`, `Buffer.from`, `checkedImageParts.set`, `decodeImageDataUrl`, `logger35.error`, `logger35.info`, `modelImageResizeOptions`, `part.image.slice`, `resizeImageBufferIfNeeded`, `updatedContent.push`, `wasImagePartChecked`, `withImageContentSha256`.

Assignment or increment targets: `expContentHasUpdates`, `expContentIndex`, `hasUpdates`, `imageBuffer`, `messageHasUpdates`, `originalMimeType`, `originalSize`, `partIndex`, `representation`, `sawDecodedBytes`, `updatedContent[computed]`, `updatedExpContent[computed]`.

SHA-256 of the source span: `de8036b3bb0d28dc432cf7c5b7353ca7093f509ef1d7ebdb726096c7bc1b4131`.

### evaluation:286860

Calls written directly in this body: `.toLowerCase`, `.toString`, `Array.isArray`, `Buffer.byteLength`, `Buffer.from`, `checkedImageParts.set`, `decodeImageDataUrl`, `logger10.error`, `logger10.info`, `modelImageResizeOptions`, `part.image.slice`, `resizeImageBufferIfNeeded`, `updatedContent.push`, `wasImagePartChecked`, `withImageContentSha256`.

Assignment or increment targets: `expContentHasUpdates`, `expContentIndex`, `hasUpdates`, `imageBuffer`, `messageHasUpdates`, `originalMimeType`, `originalSize`, `partIndex`, `representation`, `sawDecodedBytes`, `updatedContent[computed]`, `updatedExpContent[computed]`.

SHA-256 of the source span: `6f5c348589481c89ab8b0167f452a2f09cfcd06085ed8fa9357b4c3e734a6167`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
