# `SendMessageReminderMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/send-message-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483183-483207](../../../../../../reference/runtime/sand-eval-runner.cjs#L483183-L483207) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483183-483207](../../../../../../reference/runtime/sand-eval-runner.cjs#L483183-L483207) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:483183

Calls written directly in this body: `countToolCallsSinceLastSendMessage`, `createSendMessageReminderMessage`, `isSendMessageReminderMessage`, `logReminderShimOnSettle`, `logger88.info`, `messages.at`, `this.delegationWording`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 of the source span: `7adfd3c3b3c26d1cc051a784abb48f1441540cc799b279411a6e657830f37c01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
