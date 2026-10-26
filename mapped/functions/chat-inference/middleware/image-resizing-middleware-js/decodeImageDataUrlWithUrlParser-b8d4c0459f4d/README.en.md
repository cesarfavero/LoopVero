# `decodeImageDataUrlWithUrlParser`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617441-617463](../../../../../../reference/runtime/host-main.cjs#L617441-L617463) | `FunctionDeclaration` | no | `value` |
| [evaluation:286812-286834](../../../../../../reference/runtime/sand-eval-runner.cjs#L286812-L286834) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617441-617463](../../../../../../reference/runtime/host-main.cjs#L617441-L617463) | 4 | 0 | 0 | 1 | 4 | 0 |
| [evaluation:286812-286834](../../../../../../reference/runtime/sand-eval-runner.cjs#L286812-L286834) | 4 | 0 | 0 | 1 | 4 | 0 |

### host:617441

Calls written directly in this body: `Buffer.from`, `metadata2.split`, `mimeType.startsWith`, `new Error`, `new URL`, `parameters4.some`, `pathname.indexOf`, `pathname.slice`, `rawMimeType.toLowerCase`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `489363580b3c1d7f941d165cc047051354e7039b833fcfdc341f07d50a6c6871`.

### evaluation:286812

Calls written directly in this body: `Buffer.from`, `metadata2.split`, `mimeType.startsWith`, `new Error`, `new URL`, `parameters4.some`, `pathname.indexOf`, `pathname.slice`, `rawMimeType.toLowerCase`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `9e751d62c94631ba7f576cb0726567be1ea798e23c4f428d19848e374c99e356`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
