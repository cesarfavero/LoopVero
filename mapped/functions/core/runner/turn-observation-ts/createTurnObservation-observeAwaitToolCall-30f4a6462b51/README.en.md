# `createTurnObservation/observeAwaitToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588687-588708](../../../../../../reference/runtime/sand-eval-runner.cjs#L588687-L588708) | `FunctionDeclaration` | no | `event, callId, toolCall2, awaitingUserSelection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588687-588708](../../../../../../reference/runtime/sand-eval-runner.cjs#L588687-L588708) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:588687

Calls written directly in this body: `awaitBlockUntilMs`, `cancelledAwaitOutcome`, `classifyCompletedAwaitOutcome`, `host.isActiveRunCanceled`, `onTurnAwait`, `pendingAwaits.delete`, `pendingAwaits.get`, `pendingAwaits.set`.

Assignment or increment targets: `awaitObservationCount`.

SHA-256 of the source span: `48f29504ede61f6b13fe3c51968dc7c1e614aebb47af726c71ec03b2f09402d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
