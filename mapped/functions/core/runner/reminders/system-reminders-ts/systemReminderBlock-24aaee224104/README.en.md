# `systemReminderBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/system-reminders.ts` · [Module README](../../../../../../modules/core/runner/reminders/system-reminders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:480314-480316](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480314-L480316) | `FunctionDeclaration` | no | `reminders` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:480314-480316](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480314-L480316) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:480314

Calls written directly in this body: `.join`, `reminders.map`, `wrap2`.

SHA-256 of the source span: `cfb0a05923641bea1e6e2c21eaddbd8d656109a900d049cc4cd60fa36bd002df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
