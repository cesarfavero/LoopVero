# `ContinuationInjectorMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/continuation-injector-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/continuation-injector-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617391-617401](../../../../../../reference/runtime/host-main.cjs#L617391-L617401) | `method` | no | `ctx, invocationId, tools, options2` |
| [evaluation:286093-286103](../../../../../../reference/runtime/sand-eval-runner.cjs#L286093-L286103) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617391-617401](../../../../../../reference/runtime/host-main.cjs#L617391-L617401) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:286093-286103](../../../../../../reference/runtime/sand-eval-runner.cjs#L286093-L286103) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:617391

Calls written directly in this body: `logger33.info`, `needsContinuationMessage`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 of the source span: `ce83d7dededc9ef4fbc4fdc8d456574b9fc8e94550045f1702b6922a72d73fa3`.

### evaluation:286093

Calls written directly in this body: `logger8.info`, `needsContinuationMessage`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 of the source span: `cbb1933278724a4337dacd3cc08031775b5b8f73cced45cc8a3a236a4b9f21dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
