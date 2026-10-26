# `toolCallStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475852-475860](../../../../../reference/runtime/host-main.cjs#L475852-L475860) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |
| [evaluation:255162-255170](../../../../../reference/runtime/sand-eval-runner.cjs#L255162-L255170) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475852-475860](../../../../../reference/runtime/host-main.cjs#L475852-L475860) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255162-255170](../../../../../reference/runtime/sand-eval-runner.cjs#L255162-L255170) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475852

Calls written directly in this body: `new InteractionUpdate`, `new ToolCallStartedUpdate`.

SHA-256 of the source span: `6eb589aefe260e23297c26c5f77e3b0813686ef602418bcb8fd4597a40179fc3`.

### evaluation:255162

Calls written directly in this body: `new InteractionUpdate`, `new ToolCallStartedUpdate`.

SHA-256 of the source span: `6eb589aefe260e23297c26c5f77e3b0813686ef602418bcb8fd4597a40179fc3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
