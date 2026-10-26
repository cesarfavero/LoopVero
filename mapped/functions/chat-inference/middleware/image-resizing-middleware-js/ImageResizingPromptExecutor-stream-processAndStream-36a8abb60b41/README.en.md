# `ImageResizingPromptExecutor.stream/processAndStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617692-617702](../../../../../../reference/runtime/host-main.cjs#L617692-L617702) | `ArrowFunctionExpression` | yes | `(none)` |
| [evaluation:287063-287073](../../../../../../reference/runtime/sand-eval-runner.cjs#L287063-L287073) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617692-617702](../../../../../../reference/runtime/host-main.cjs#L617692-L617702) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:287063-287073](../../../../../../reference/runtime/sand-eval-runner.cjs#L287063-L287073) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:617692

Calls written directly in this body: `resizeImagesInMessages`, `this.innerExecutor.appendMessages`, `this.innerExecutor.clearMessages`, `this.innerExecutor.stream`.

SHA-256 of the source span: `896427af38177af83f3da0e6fc53b219fffe3de9adb50a6efbcdee2042f670cd`.

### evaluation:287063

Calls written directly in this body: `resizeImagesInMessages`, `this.innerExecutor.appendMessages`, `this.innerExecutor.clearMessages`, `this.innerExecutor.stream`.

SHA-256 of the source span: `bffa527807807738a602cff20983f3693684081c21d808c9f66a0860779c9b5b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
