# `TracingMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/tracing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/tracing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617837-617920](../../../../../../reference/runtime/host-main.cjs#L617837-L617920) | `method` | no | `ctx, invocationId, tools, options2` |
| [evaluation:287208-287291](../../../../../../reference/runtime/sand-eval-runner.cjs#L287208-L287291) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617837-617920](../../../../../../reference/runtime/host-main.cjs#L617837-L617920) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287208-287291](../../../../../../reference/runtime/sand-eval-runner.cjs#L287208-L287291) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617837

Calls written directly in this body: `.catch`, `analyzeMessages`, `inputCharactersHistogram.histogram`, `inputMessagesHistogram.histogram`, `middlewareChainDuration.histogram`, `performance.now`, `streamResult.response.then`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `tracedFullStream`, `tracedResponse.catch`.

SHA-256 of the source span: `48f8a260c8a0840817cfe4b448bc7018200d4d4b01c9f29890de205edbec11e1`.

### evaluation:287208

Calls written directly in this body: `.catch`, `analyzeMessages`, `inputCharactersHistogram.histogram`, `inputMessagesHistogram.histogram`, `middlewareChainDuration.histogram`, `performance.now`, `streamResult.response.then`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `tracedFullStream`, `tracedResponse.catch`.

SHA-256 of the source span: `9264d805e33f55d5c57a0dbc301c4d87fc5e2f9f1c76f79192842a24e66bdafc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
