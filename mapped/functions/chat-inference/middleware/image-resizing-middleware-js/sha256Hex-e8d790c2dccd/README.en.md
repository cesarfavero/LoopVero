# `sha256Hex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:286842-286845](../../../../../../reference/runtime/sand-eval-runner.cjs#L286842-L286845) | `FunctionDeclaration` | yes | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:286842-286845](../../../../../../reference/runtime/sand-eval-runner.cjs#L286842-L286845) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:286842

Calls written directly in this body: `.toString`, `Buffer.from`, `crypto.subtle.digest`, `new Uint8Array`.

SHA-256 of the source span: `9d9028795a1e1e0dd1ba2307b62ed80d57a287968763120550efbfe14e86a16a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
