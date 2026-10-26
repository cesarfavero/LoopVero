# `stepKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585716-585719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585716-L585719) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585716-585719](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585716-L585719) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585716

Calls written directly in this body: `String`, `assistant.at`, `firstToolCallId`, `messages.filter`.

SHA-256 of the source span: `38a22c889014160562bf87b0dfb9aa7691efd6caed73d40d222537a8a6225a50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
