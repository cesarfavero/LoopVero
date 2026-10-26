# `isGoalOwnerValid`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/goal-continuation.js` · [Module README](../../../../modules/agent-core/goal-continuation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475480-475485](../../../../../reference/runtime/host-main.cjs#L475480-L475485) | `FunctionDeclaration` | no | `goalState, agentSessionId` |
| [evaluation:254700-254705](../../../../../reference/runtime/sand-eval-runner.cjs#L254700-L254705) | `FunctionDeclaration` | no | `goalState, agentSessionId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475480-475485](../../../../../reference/runtime/host-main.cjs#L475480-L475485) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:254700-254705](../../../../../reference/runtime/sand-eval-runner.cjs#L254700-L254705) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:475480

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e6940fd958fb9426f9eacd0a117db4a8ed877d37b190ffe098bce0a1ba69232f`.

### evaluation:254700

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e6940fd958fb9426f9eacd0a117db4a8ed877d37b190ffe098bce0a1ba69232f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
