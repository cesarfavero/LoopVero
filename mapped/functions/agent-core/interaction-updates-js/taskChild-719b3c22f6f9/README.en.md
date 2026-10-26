# `taskChild`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475911-475921](../../../../../reference/runtime/host-main.cjs#L475911-L475921) | `FunctionExpression` | no | `taskToolCallId, update, modelCallId` |
| [evaluation:255221-255231](../../../../../reference/runtime/sand-eval-runner.cjs#L255221-L255231) | `FunctionExpression` | no | `taskToolCallId, update, modelCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475911-475921](../../../../../reference/runtime/host-main.cjs#L475911-L475921) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:255221-255231](../../../../../reference/runtime/sand-eval-runner.cjs#L255221-L255231) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:475911

Calls written directly in this body: `Updates.toolCallDelta`, `new TaskToolCallDelta`, `new ToolCallDelta`.

SHA-256 of the source span: `3e0abe6a2c268dcc23f0fd4226056efdb26c641275a5c9d1ca26ff13a492b069`.

### evaluation:255221

Calls written directly in this body: `Updates.toolCallDelta`, `new TaskToolCallDelta`, `new ToolCallDelta`.

SHA-256 of the source span: `3e0abe6a2c268dcc23f0fd4226056efdb26c641275a5c9d1ca26ff13a492b069`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
