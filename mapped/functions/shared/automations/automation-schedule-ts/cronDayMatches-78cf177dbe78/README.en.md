# `cronDayMatches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682355-682363](../../../../../../reference/runtime/host-main.cjs#L682355-L682363) | `FunctionDeclaration` | no | `matcher, wall` |
| [evaluation:526569-526577](../../../../../../reference/runtime/sand-eval-runner.cjs#L526569-L526577) | `FunctionDeclaration` | no | `matcher, wall` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682355-682363](../../../../../../reference/runtime/host-main.cjs#L682355-L682363) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:526569-526577](../../../../../../reference/runtime/sand-eval-runner.cjs#L526569-L526577) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:682355

Calls written directly in this body: `matcher.dayOfMonth.has`, `matcher.dayOfWeek.has`, `matcher.month.has`.

SHA-256 of the source span: `fc1c512ae6b23f172f638f65b0fad8d480331b85bb8bcc4dc9f4a2b79d226fbe`.

### evaluation:526569

Calls written directly in this body: `matcher.dayOfMonth.has`, `matcher.dayOfWeek.has`, `matcher.month.has`.

SHA-256 of the source span: `fc1c512ae6b23f172f638f65b0fad8d480331b85bb8bcc4dc9f4a2b79d226fbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
