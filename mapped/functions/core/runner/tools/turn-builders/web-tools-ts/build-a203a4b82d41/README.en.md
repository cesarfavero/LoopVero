# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/web-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/web-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782016-782050](../../../../../../../../reference/runtime/host-main.cjs#L782016-L782050) | `ArrowFunctionExpression` | no | `{     host,     turn,     props   }` |
| [host:782057-782067](../../../../../../../../reference/runtime/host-main.cjs#L782057-L782067) | `ArrowFunctionExpression` | no | `{     host   }` |
| [evaluation:582361-582395](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582361-L582395) | `ArrowFunctionExpression` | no | `{     host,     turn,     props   }` |
| [evaluation:582402-582412](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582402-L582412) | `ArrowFunctionExpression` | no | `{     host   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782016-782050](../../../../../../../../reference/runtime/host-main.cjs#L782016-L782050) | 5 | 0 | 0 | 1 | 0 | 0 |
| [host:782057-782067](../../../../../../../../reference/runtime/host-main.cjs#L782057-L782067) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:582361-582395](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582361-L582395) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582402-582412](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582402-L582412) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:782016

Calls written directly in this body: `createWebFetchTool`, `createWebSearchTool`, `host.gates.linkVerification`, `host.requestContext.resolve`, `props.stateHandler.getOrInitializeConversationStartedDate`, `sandWebToolOffers`, `tools.push`, `webSearchDescriptionSuffix`.

SHA-256 of the source span: `3e15f3c4386e0107c951f95d9dd4ad6db910a06fb6c38432d2e6e8a325e3b00a`.

### host:782057

Calls written directly in this body: `createProductSearchTool`, `offeredProductSearchPort`.

SHA-256 of the source span: `b6d3a714c9c3452e74da81ca5dc4d418a6f451e0ea34c808aa405627ce85bd1a`.

### evaluation:582361

Calls written directly in this body: `createWebFetchTool`, `createWebSearchTool`, `host.gates.linkVerification`, `host.requestContext.resolve`, `props.stateHandler.getOrInitializeConversationStartedDate`, `sandWebToolOffers`, `tools.push`, `webSearchDescriptionSuffix`.

SHA-256 of the source span: `3e15f3c4386e0107c951f95d9dd4ad6db910a06fb6c38432d2e6e8a325e3b00a`.

### evaluation:582402

Calls written directly in this body: `createProductSearchTool`, `offeredProductSearchPort`.

SHA-256 of the source span: `b6d3a714c9c3452e74da81ca5dc4d418a6f451e0ea34c808aa405627ce85bd1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
