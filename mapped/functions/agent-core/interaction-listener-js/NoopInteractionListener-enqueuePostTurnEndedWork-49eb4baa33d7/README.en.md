# `NoopInteractionListener.enqueuePostTurnEndedWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-listener.js` · [Module README](../../../../modules/agent-core/interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:255079-255081](../../../../../reference/runtime/sand-eval-runner.cjs#L255079-L255081) | `method` | no | `work` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:255079-255081](../../../../../reference/runtime/sand-eval-runner.cjs#L255079-L255081) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:255079

Calls written directly in this body: `this.postTurnEndedWorkQueue.push`.

SHA-256 of the source span: `508b565f658e8d9e19209863919413106bc9628814c02dc0afb042b2d40dcdab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
