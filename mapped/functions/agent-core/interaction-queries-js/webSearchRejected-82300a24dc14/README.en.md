# `webSearchRejected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475586-475601](../../../../../reference/runtime/host-main.cjs#L475586-L475601) | `FunctionExpression` | no | `queryId, reason` |
| [evaluation:254810-254825](../../../../../reference/runtime/sand-eval-runner.cjs#L254810-L254825) | `FunctionExpression` | no | `queryId, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475586-475601](../../../../../reference/runtime/host-main.cjs#L475586-L475601) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254810-254825](../../../../../reference/runtime/sand-eval-runner.cjs#L254810-L254825) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475586

Calls written directly in this body: `new InteractionResponse`, `new WebSearchRequestResponse`, `new WebSearchRequestResponse_Rejected`.

SHA-256 of the source span: `c5e5756b534f1bd8026e6cb94d71e94d06de8eb1247cbe0fc5725de98beb395b`.

### evaluation:254810

Calls written directly in this body: `new InteractionResponse`, `new WebSearchRequestResponse`, `new WebSearchRequestResponse_Rejected`.

SHA-256 of the source span: `c5e5756b534f1bd8026e6cb94d71e94d06de8eb1247cbe0fc5725de98beb395b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
