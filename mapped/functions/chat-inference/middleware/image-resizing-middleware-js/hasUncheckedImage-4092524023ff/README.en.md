# `hasUncheckedImage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617674-617682](../../../../../../reference/runtime/host-main.cjs#L617674-L617682) | `FunctionDeclaration` | no | `message, checkedImageParts` |
| [evaluation:287045-287053](../../../../../../reference/runtime/sand-eval-runner.cjs#L287045-L287053) | `FunctionDeclaration` | no | `message, checkedImageParts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617674-617682](../../../../../../reference/runtime/host-main.cjs#L617674-L617682) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:287045-287053](../../../../../../reference/runtime/sand-eval-runner.cjs#L287045-L287053) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:617674

Calls written directly in this body: `Array.isArray`, `message.content.some`.

SHA-256 of the source span: `803b3c392716197656c2c49c51af15fcd528ae5dce0fc4932a6a4b75cd78dbc8`.

### evaluation:287045

Calls written directly in this body: `Array.isArray`, `message.content.some`.

SHA-256 of the source span: `803b3c392716197656c2c49c51af15fcd528ae5dce0fc4932a6a4b75cd78dbc8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
