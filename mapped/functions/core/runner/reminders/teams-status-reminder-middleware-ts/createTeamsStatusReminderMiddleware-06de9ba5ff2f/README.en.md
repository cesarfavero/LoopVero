# `createTeamsStatusReminderMiddleware`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/teams-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/teams-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480611-480613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480611-L480613) | `FunctionDeclaration` | no | `teamsStatus, reminders` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480611-480613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480611-L480613) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:480611

Calls written directly in this body: `createChannelStatusReminderMiddleware`.

SHA-256 of the source span: `88243706f2182c445ac9fb5fd493f1c843f62db6b3d14abbd735540dc3ca2346`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
