# `StartOfTurnAckReminderMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/start-of-turn-ack-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/start-of-turn-ack-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587064-587088](../../../../../../reference/runtime/sand-eval-runner.cjs#L587064-L587088) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587064-587088](../../../../../../reference/runtime/sand-eval-runner.cjs#L587064-L587088) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:587064

Calls written directly in this body: `countToolCallsSinceLastSendMessage`, `hasTextSendMessageSinceTurnStart`, `isStartOfTurnAckReminderMessage`, `logReminderShimOnSettle`, `logger102.info`, `messages.at`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`, `this.reactionAcknowledged`.

SHA-256 of the source span: `e6051d967598243942d755e40abce6ce31a061328e6257e07f02da7bef4cc9ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
