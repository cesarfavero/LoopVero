# `channelStatusRefreshReminderMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480345-480350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480345-L480350) | `FunctionDeclaration` | no | `spec, status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480345-480350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480345-L480350) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:480345

Calls written directly in this body: `JSON.stringify`, `systemReminder`.

SHA-256 of the source span: `d4d9a93633123646de353236004aa2861a5aae2951c80c61834ad627341a668e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
