# `channelStatusFirstReminderMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/channel-status-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/channel-status-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740906-740911](../../../../../../../reference/runtime/host-main.cjs#L740906-L740911) | `FunctionDeclaration` | no | `spec` |
| [evaluation:480339-480344](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480339-L480344) | `FunctionDeclaration` | no | `spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740906-740911](../../../../../../../reference/runtime/host-main.cjs#L740906-L740911) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480339-480344](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480339-L480344) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740906

Calls written directly in this body: `systemReminder`.

SHA-256 of the source span: `47f520ec50e0c5db518588289ce804fb961e562070c12e537bb695fa0e8defa3`.

### evaluation:480339

Calls written directly in this body: `systemReminder`.

SHA-256 of the source span: `47f520ec50e0c5db518588289ce804fb961e562070c12e537bb695fa0e8defa3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
