# `partialToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475931-475939](../../../../../reference/runtime/host-main.cjs#L475931-L475939) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |
| [evaluation:255241-255249](../../../../../reference/runtime/sand-eval-runner.cjs#L255241-L255249) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475931-475939](../../../../../reference/runtime/host-main.cjs#L475931-L475939) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255241-255249](../../../../../reference/runtime/sand-eval-runner.cjs#L255241-L255249) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475931

Calls written directly in this body: `new InteractionUpdate`, `new PartialToolCallUpdate`.

SHA-256 of the source span: `0134ccec432b9429117ab12181d27d7933accd45c31958cb2c9ce92215cbf70d`.

### evaluation:255241

Calls written directly in this body: `new InteractionUpdate`, `new PartialToolCallUpdate`.

SHA-256 of the source span: `0134ccec432b9429117ab12181d27d7933accd45c31958cb2c9ce92215cbf70d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
