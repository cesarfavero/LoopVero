# `mcpAuthRejected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475728-475743](../../../../../reference/runtime/host-main.cjs#L475728-L475743) | `FunctionExpression` | no | `queryId, reason` |
| [evaluation:254952-254967](../../../../../reference/runtime/sand-eval-runner.cjs#L254952-L254967) | `FunctionExpression` | no | `queryId, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475728-475743](../../../../../reference/runtime/host-main.cjs#L475728-L475743) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254952-254967](../../../../../reference/runtime/sand-eval-runner.cjs#L254952-L254967) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475728

Calls written directly in this body: `new InteractionResponse`, `new McpAuthRequestResponse`, `new McpAuthRequestResponse_Rejected`.

SHA-256 of the source span: `2e12e82e1fe6200b0f5e85ba65cc4ed4635df05ba572c3af8ddb00deae54de6e`.

### evaluation:254952

Calls written directly in this body: `new InteractionResponse`, `new McpAuthRequestResponse`, `new McpAuthRequestResponse_Rejected`.

SHA-256 of the source span: `2e12e82e1fe6200b0f5e85ba65cc4ed4635df05ba572c3af8ddb00deae54de6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
