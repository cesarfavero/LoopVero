# `TrailingEmptyAssistantRemovalMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/trailing-empty-assistant-removal-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/trailing-empty-assistant-removal-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617949-617963](../../../../../../reference/runtime/host-main.cjs#L617949-L617963) | `method` | no | `ctx, invocationId, tools, options2` |
| [evaluation:287320-287334](../../../../../../reference/runtime/sand-eval-runner.cjs#L287320-L287334) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617949-617963](../../../../../../reference/runtime/host-main.cjs#L617949-L617963) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287320-287334](../../../../../../reference/runtime/sand-eval-runner.cjs#L287320-L287334) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:617949

Calls written directly in this body: `logger36.info`, `removeTrailingEmptyAssistantMessages`, `this.innerExecutor.appendMessages`, `this.innerExecutor.clearMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 of the source span: `fbb943b1ef3165ee472278d366ff5d6b122f28818328c41faebb31123e966d9a`.

### evaluation:287320

Calls written directly in this body: `logger11.info`, `removeTrailingEmptyAssistantMessages`, `this.innerExecutor.appendMessages`, `this.innerExecutor.clearMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 of the source span: `7d57b1ade318f14f3ff8cfd5a7a020686189be9d2e4d8550f37db0f9b59aef80`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
