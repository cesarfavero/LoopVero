# `SandSteerInbox.receiver/pop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/steer/turn-steer.ts` · [Module README](../../../../../../modules/core/runner/steer/turn-steer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589820-589826](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589820-L589826) | `ArrowFunctionExpression` | no | `_ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589820-589826](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589820-L589826) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:589820

Calls written directly in this body: `Promise.resolve`, `this.pending.shift`, `this.settlePoppedAsDelivered`, `toRedactedConversationAction`.

Assignment or increment targets: `this.poppedAwaitingTurn`.

SHA-256 of the source span: `649d3069dc6df106c472a2be2420548f87afb884ef82a04ce5720527b3a339f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
