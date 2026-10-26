# `ImageResizingPromptExecutor.stream/forward`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617704-617709](../../../../../../reference/runtime/host-main.cjs#L617704-L617709) | `ArrowFunctionExpression` | no | `read2` |
| [evaluation:287075-287080](../../../../../../reference/runtime/sand-eval-runner.cjs#L287075-L287080) | `ArrowFunctionExpression` | no | `read2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617704-617709](../../../../../../reference/runtime/host-main.cjs#L617704-L617709) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287075-287080](../../../../../../reference/runtime/sand-eval-runner.cjs#L287075-L287080) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617704

Calls written directly in this body: `processingPromise.then`, `promise2.catch`.

SHA-256 of the source span: `1294831d61a3c9e4fe4ea485a82ca87be61be8317e933cb3dd8f62af80a8d3e1`.

### evaluation:287075

Calls written directly in this body: `processingPromise.then`, `promise2.catch`.

SHA-256 of the source span: `1294831d61a3c9e4fe4ea485a82ca87be61be8317e933cb3dd8f62af80a8d3e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
