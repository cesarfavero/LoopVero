# `isGoalIdentityValid`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/goal-continuation.js` · [Module README](../../../../modules/agent-core/goal-continuation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475477-475479](../../../../../reference/runtime/host-main.cjs#L475477-L475479) | `FunctionDeclaration` | no | `goalState, identity` |
| [evaluation:254697-254699](../../../../../reference/runtime/sand-eval-runner.cjs#L254697-L254699) | `FunctionDeclaration` | no | `goalState, identity2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475477-475479](../../../../../reference/runtime/host-main.cjs#L475477-L475479) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254697-254699](../../../../../reference/runtime/sand-eval-runner.cjs#L254697-L254699) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:475477

Calls written directly in this body: `isGoalOwnerValid`.

SHA-256 of the source span: `87acd69bf64fe3f7f50785e7c72053ebdbb9955e547f7b2030654fab074a8602`.

### evaluation:254697

Calls written directly in this body: `isGoalOwnerValid`.

SHA-256 of the source span: `38c05eb71674e157d4abf038fb4d2f5da67b880c6582bc5862d6b3849ac70841`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
