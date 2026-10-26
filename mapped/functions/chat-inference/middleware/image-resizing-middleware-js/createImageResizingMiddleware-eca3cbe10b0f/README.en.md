# `createImageResizingMiddleware`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617723-617732](../../../../../../reference/runtime/host-main.cjs#L617723-L617732) | `FunctionDeclaration` | no | `resizeOptions` |
| [evaluation:287094-287103](../../../../../../reference/runtime/sand-eval-runner.cjs#L287094-L287103) | `FunctionDeclaration` | no | `resizeOptions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617723-617732](../../../../../../reference/runtime/host-main.cjs#L617723-L617732) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287094-287103](../../../../../../reference/runtime/sand-eval-runner.cjs#L287094-L287103) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617723

Calls written directly in this body: `new WeakMap`.

SHA-256 of the source span: `99b9a1702ee20f546fa03a6414580f0cec722d7d564014a91d7390e8be9694b6`.

### evaluation:287094

Calls written directly in this body: `new WeakMap`.

SHA-256 of the source span: `99b9a1702ee20f546fa03a6414580f0cec722d7d564014a91d7390e8be9694b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
