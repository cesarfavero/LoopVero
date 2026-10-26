# `BaseMiddleware.appendMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/base.js` · [Module README](../../../../modules/chat-inference/base-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617352-617355](../../../../../reference/runtime/host-main.cjs#L617352-L617355) | `method` | no | `messages2` |
| [evaluation:286054-286057](../../../../../reference/runtime/sand-eval-runner.cjs#L286054-L286057) | `method` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617352-617355](../../../../../reference/runtime/host-main.cjs#L617352-L617355) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:286054-286057](../../../../../reference/runtime/sand-eval-runner.cjs#L286054-L286057) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617352

Calls written directly in this body: `this.innerExecutor.appendMessages`.

SHA-256 of the source span: `8439894669e3fc039c5b355bf92c8c869c25dded1be1eb229680cf42ab2eee18`.

### evaluation:286054

Calls written directly in this body: `this.innerExecutor.appendMessages`.

SHA-256 of the source span: `9d90d5741d753574614350d95f1dc3b0efbace6017744486f14908cac52c1e4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
