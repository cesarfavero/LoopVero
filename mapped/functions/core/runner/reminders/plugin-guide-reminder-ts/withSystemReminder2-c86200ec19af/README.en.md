# `withSystemReminder2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585720-585725](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585720-L585725) | `FunctionDeclaration` | no | `result, body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585720-585725](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585720-L585725) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585720

Calls written directly in this body: `new McpResult`, `new SystemReminder`, `result.result.value.clone`, `success2.systemReminders.push`.

SHA-256 of the source span: `44d83191f59a3adaad7b18a7341dbf0033670b1ddb184778b0ca1b20fce3fb59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
