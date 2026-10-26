# `pluginGuideReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585681-585688](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585681-L585688) | `FunctionDeclaration` | no | `connector, skill, skillAccess` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585681-585688](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585681-L585688) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585681

Calls written directly in this body: `systemReminder`, `toModelVisibleText`.

SHA-256 of the source span: `06066b0bb31d401ee1662112209ac1a04e088a1e40c43d09923304119659532a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
