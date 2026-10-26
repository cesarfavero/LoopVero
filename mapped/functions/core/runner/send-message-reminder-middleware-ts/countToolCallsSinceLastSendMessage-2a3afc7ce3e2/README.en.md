# `countToolCallsSinceLastSendMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/send-message-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483113-483129](../../../../../../reference/runtime/sand-eval-runner.cjs#L483113-L483129) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483113-483129](../../../../../../reference/runtime/sand-eval-runner.cjs#L483113-L483129) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:483113

Calls written directly in this body: `countNonSendMessageToolCalls`, `hasSendMessageCall`, `isAgentStatusReminderMessage`, `isSlackStatusReminderMessage`, `isTeamsStatusReminderMessage`.

Assignment or increment targets: `count2`, `index`.

SHA-256 of the source span: `f37d23e0933b4fefd2b4115e99c9b32717550a2e238c296c51bd14dc88be1b03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
