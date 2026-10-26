# `mcpAuthApproved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475714-475727](../../../../../reference/runtime/host-main.cjs#L475714-L475727) | `FunctionExpression` | no | `queryId` |
| [evaluation:254938-254951](../../../../../reference/runtime/sand-eval-runner.cjs#L254938-L254951) | `FunctionExpression` | no | `queryId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475714-475727](../../../../../reference/runtime/host-main.cjs#L475714-L475727) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254938-254951](../../../../../reference/runtime/sand-eval-runner.cjs#L254938-L254951) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475714

Calls written directly in this body: `new InteractionResponse`, `new McpAuthRequestResponse`, `new McpAuthRequestResponse_Approved`.

SHA-256 of the source span: `396744dc61960e250ce67e34ffb73d415c77569a4acc35f4b194e017ed9cac93`.

### evaluation:254938

Calls written directly in this body: `new InteractionResponse`, `new McpAuthRequestResponse`, `new McpAuthRequestResponse_Approved`.

SHA-256 of the source span: `396744dc61960e250ce67e34ffb73d415c77569a4acc35f4b194e017ed9cac93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
