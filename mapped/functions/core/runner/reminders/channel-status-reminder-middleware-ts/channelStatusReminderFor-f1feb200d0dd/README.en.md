# `channelStatusReminderFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480430-480450](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480430-L480450) | `FunctionDeclaration` | no | `spec, messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480430-480450](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480430-L480450) | 8 | 0 | 0 | 7 | 0 | 0 |

### evaluation:480430

Calls written directly in this body: `channelStatusDelegationReminderMessage`, `channelStatusFirstReminderMessage`, `channelStatusRefreshReminderMessage`, `hasUserDeliverySincePrompt`, `refreshRemindersSincePrompt`, `scanChannelStatusTurn`.

SHA-256 of the source span: `d76cadc237c949c3e4c08dcaf10d2d3cc528222608bbebdef71f6d4205ece73e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
