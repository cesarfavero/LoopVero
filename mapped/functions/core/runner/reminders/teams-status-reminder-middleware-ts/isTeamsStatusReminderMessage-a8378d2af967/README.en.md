# `isTeamsStatusReminderMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/teams-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/teams-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480608-480610](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480608-L480610) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480608-480610](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480608-L480610) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:480608

Calls written directly in this body: `isChannelStatusReminderMessage`.

SHA-256 of the source span: `a1255d30717301b5c9f94aac4126c3e73d75f58a3ae90a109ced2e9cf6adb5e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
