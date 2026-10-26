# `peerWakeApprovalReminderFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/reminders/peer-wake-approval-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/peer-wake-approval-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529716-529719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529716-L529719) | `FunctionDeclaration` | no | `gates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529716-529719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529716-L529719) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:529716

Calls written directly in this body: `gates.peerWakeApprovalReminder`, `gates.peerWakeDelegationAwareReminder`.

SHA-256 of the source span: `bb2d8c97d3a608d76d551bbb93cb4b652d8d7808332cdf12bd9a03ac42ea0347`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
