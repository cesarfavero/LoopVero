# `describeOneShotSchedule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682884-682899](../../../../../../reference/runtime/host-main.cjs#L682884-L682899) | `FunctionDeclaration` | no | `schedule` |
| [evaluation:527108-527123](../../../../../../reference/runtime/sand-eval-runner.cjs#L527108-L527123) | `FunctionDeclaration` | no | `schedule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682884-682899](../../../../../../reference/runtime/host-main.cjs#L682884-L682899) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:527108-527123](../../../../../../reference/runtime/sand-eval-runner.cjs#L527108-L527123) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:682884

Calls written directly in this body: `.schedule.startsWith`, `compileCronMatcher`, `formatClock`, `isCalendarDate`, `normalizeSchedule`, `parseEveryIntervalMs`, `splitScheduleTimeZone`.

SHA-256 of the source span: `492eadf507d955d48473b430f43a7c1160701f0783d22967ab72def831497c18`.

### evaluation:527108

Calls written directly in this body: `.schedule.startsWith`, `compileCronMatcher`, `formatClock`, `isCalendarDate`, `normalizeSchedule`, `parseEveryIntervalMs`, `splitScheduleTimeZone`.

SHA-256 of the source span: `492eadf507d955d48473b430f43a7c1160701f0783d22967ab72def831497c18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
