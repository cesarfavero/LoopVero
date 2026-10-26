# `splitScheduleTimeZone`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682294-682298](../../../../../../reference/runtime/host-main.cjs#L682294-L682298) | `FunctionDeclaration` | no | `schedule` |
| [evaluation:526508-526512](../../../../../../reference/runtime/sand-eval-runner.cjs#L526508-L526512) | `FunctionDeclaration` | no | `schedule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682294-682298](../../../../../../reference/runtime/host-main.cjs#L682294-L682298) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526508-526512](../../../../../../reference/runtime/sand-eval-runner.cjs#L526508-L526512) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:682294

Calls written directly in this body: `SCHEDULE_TZ_PREFIX.exec`, `normalizeSchedule`, `normalized.slice`.

SHA-256 of the source span: `11af8ba607dc69d51e03e2600288be18d599ef403484a1ff63fd0dbf1eeb852a`.

### evaluation:526508

Calls written directly in this body: `SCHEDULE_TZ_PREFIX.exec`, `normalizeSchedule`, `normalized.slice`.

SHA-256 of the source span: `11af8ba607dc69d51e03e2600288be18d599ef403484a1ff63fd0dbf1eeb852a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
