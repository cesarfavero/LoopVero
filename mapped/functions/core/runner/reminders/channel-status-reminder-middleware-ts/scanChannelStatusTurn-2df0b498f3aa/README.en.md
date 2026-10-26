# `scanChannelStatusTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480374-480429](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480374-L480429) | `FunctionDeclaration` | no | `spec, messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480374-480429](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480374-L480429) | 8 | 2 | 0 | 1 | 0 | 0 |

### evaluation:480374

Calls written directly in this body: `calls.findLast`, `channelStatusReminderKindOf`, `isInjectedReminderMessage`, `isSandUserDeliveryToolName`, `message.content.flatMap`, `spec.delegation.toolNames.has`, `spec.statusOf`.

Assignment or increment targets: `delegatedSinceStatus`, `delegates`, `delegationCallsSinceStatus`, `delegationRemindedSinceStatus`, `index`, `latestBatchDelegates`, `remindedSinceStatus`, `status`, `workCallsSinceStatus`.

SHA-256 of the source span: `c82939801c52c425801f3c592a097d8b4612b4a55597904df384424f51f3547e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
