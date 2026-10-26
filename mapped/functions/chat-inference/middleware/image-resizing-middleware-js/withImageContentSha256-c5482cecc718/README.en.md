# `withImageContentSha256`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617475-617487](../../../../../../reference/runtime/host-main.cjs#L617475-L617487) | `FunctionDeclaration` | yes | `part, originalBytes` |
| [evaluation:286846-286858](../../../../../../reference/runtime/sand-eval-runner.cjs#L286846-L286858) | `FunctionDeclaration` | yes | `part, originalBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617475-617487](../../../../../../reference/runtime/host-main.cjs#L617475-L617487) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:286846-286858](../../../../../../reference/runtime/sand-eval-runner.cjs#L286846-L286858) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:617475

Calls written directly in this body: `sha256Hex2`.

SHA-256 of the source span: `d0601c325f0a22fde4e22e310b6124222030fecf27968cb0fc5a89c07de56167`.

### evaluation:286846

Calls written directly in this body: `sha256Hex`.

SHA-256 of the source span: `45521ac5f81d1c4d5ea263e7c3bc4d86f65ab6fea0d7015296f82d8fb4e4e671`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
