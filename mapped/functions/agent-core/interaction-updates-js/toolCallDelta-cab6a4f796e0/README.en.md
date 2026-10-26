# `toolCallDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475870-475882](../../../../../reference/runtime/host-main.cjs#L475870-L475882) | `FunctionExpression` | no | `callId, toolCallDelta, modelCallId, messageStartedAtMs` |
| [evaluation:255180-255192](../../../../../reference/runtime/sand-eval-runner.cjs#L255180-L255192) | `FunctionExpression` | no | `callId, toolCallDelta, modelCallId, messageStartedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475870-475882](../../../../../reference/runtime/host-main.cjs#L475870-L475882) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255180-255192](../../../../../reference/runtime/sand-eval-runner.cjs#L255180-L255192) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475870

Calls written directly in this body: `new InteractionUpdate`, `new ToolCallDeltaUpdate`.

SHA-256 of the source span: `0581a8f97e1df4c380e19ef750ef04414f626134673ce28cb943f258cea81c87`.

### evaluation:255180

Calls written directly in this body: `new InteractionUpdate`, `new ToolCallDeltaUpdate`.

SHA-256 of the source span: `0581a8f97e1df4c380e19ef750ef04414f626134673ce28cb943f258cea81c87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
