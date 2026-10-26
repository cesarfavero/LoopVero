# `withPluginGuideReminder/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585730-585739](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585730-L585739) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585730-585739](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585730-L585739) | 2 | 0 | 1 | 3 | 0 | 0 |

### evaluation:585730

Calls written directly in this body: `countReminder`, `deps.messages`, `executor.execute`, `remindedAtStep.get`, `remindedAtStep.set`, `reminderFor`, `stepKey`, `withSystemReminder2`.

SHA-256 of the source span: `81c29ac17f3358965a12ae705e09c58a6cfa2a207396e5683168e3b610a81d7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
