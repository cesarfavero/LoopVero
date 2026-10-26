# `decodeStrictBase64ImageDataUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617418-617440](../../../../../../reference/runtime/host-main.cjs#L617418-L617440) | `FunctionDeclaration` | no | `value` |
| [evaluation:286789-286811](../../../../../../reference/runtime/sand-eval-runner.cjs#L286789-L286811) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617418-617440](../../../../../../reference/runtime/host-main.cjs#L617418-L617440) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:286789-286811](../../../../../../reference/runtime/sand-eval-runner.cjs#L286789-L286811) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:617418

Calls written directly in this body: `Buffer.from`, `STRICT_IMAGE_MIME.test`, `data2.toString`, `header.endsWith`, `header.slice`, `value.indexOf`, `value.slice`, `value.startsWith`.

SHA-256 of the source span: `b75b3ca2ab55bde8ce2f4f8ff11c8bb94fc59a353c105aabaa8885e97267a472`.

### evaluation:286789

Calls written directly in this body: `Buffer.from`, `STRICT_IMAGE_MIME.test`, `data2.toString`, `header.endsWith`, `header.slice`, `value.indexOf`, `value.slice`, `value.startsWith`.

SHA-256 of the source span: `b75b3ca2ab55bde8ce2f4f8ff11c8bb94fc59a353c105aabaa8885e97267a472`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
