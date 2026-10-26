# `NoopInteractionListener.flushPostTurnEndedWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-listener.js` · [Module README](../../../../modules/agent-core/interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:255082-255091](../../../../../reference/runtime/sand-eval-runner.cjs#L255082-L255091) | `method` | yes | `_ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:255082-255091](../../../../../reference/runtime/sand-eval-runner.cjs#L255082-L255091) | 0 | 0 | 1 | 0 | 0 | 0 |

### evaluation:255082

Calls written directly in this body: `Promise.all`, `work.map`.

Assignment or increment targets: `this.postTurnEndedWorkQueue`.

SHA-256 of the source span: `c3d53cfdd4dcf8a099f8c7ff090f11c27f64ef5654f6a9a8bddadbf0490f6aa2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
