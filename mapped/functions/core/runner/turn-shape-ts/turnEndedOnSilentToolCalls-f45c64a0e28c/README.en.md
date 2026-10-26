# `turnEndedOnSilentToolCalls`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-shape.ts` · [Module README](../../../../../modules/core/runner/turn-shape-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587213-587264](../../../../../../reference/runtime/sand-eval-runner.cjs#L587213-L587264) | `FunctionDeclaration` | no | `rawMessages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587213-587264](../../../../../../reference/runtime/sand-eval-runner.cjs#L587213-L587264) | 15 | 4 | 0 | 6 | 0 | 0 |

### evaluation:587213

Calls written directly in this body: `.some`, `deliveryToolCallIds`, `erroredToolResultIds`, `hasDeliveryToolCall`, `hasUndeliveredTextAfter`, `isInjectedReminderMessage`, `isUndeliveredAssistantText`, `rawMessages.map`, `tailCalls.some`, `toolCalls2`.

Assignment or increment targets: `ackedFirst`, `boundary`, `firstCallingIndex`, `index`, `lastDeliveryIndex`, `tailIndex`.

SHA-256 of the source span: `b71b6a0e7b279272ee0a8aac436034e4d6575f53464fedc3a207254ae6d1c229`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
