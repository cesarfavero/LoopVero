# `toolCallCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475861-475869](../../../../../reference/runtime/host-main.cjs#L475861-L475869) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |
| [evaluation:255171-255179](../../../../../reference/runtime/sand-eval-runner.cjs#L255171-L255179) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475861-475869](../../../../../reference/runtime/host-main.cjs#L475861-L475869) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255171-255179](../../../../../reference/runtime/sand-eval-runner.cjs#L255171-L255179) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475861

Calls written directly in this body: `new InteractionUpdate`, `new ToolCallCompletedUpdate`.

SHA-256 of the source span: `9f73653308ab81ea8f24f2028ab9a7f30aa612dd92c5f820cac9d272311d47e9`.

### evaluation:255171

Calls written directly in this body: `new InteractionUpdate`, `new ToolCallCompletedUpdate`.

SHA-256 of the source span: `9f73653308ab81ea8f24f2028ab9a7f30aa612dd92c5f820cac9d272311d47e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
