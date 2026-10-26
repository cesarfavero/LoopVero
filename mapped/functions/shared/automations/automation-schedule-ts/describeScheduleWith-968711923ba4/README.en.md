# `describeScheduleWith`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682904-682919](../../../../../../reference/runtime/host-main.cjs#L682904-L682919) | `FunctionDeclaration` | no | `normalized, forDisplay` |
| [evaluation:527128-527143](../../../../../../reference/runtime/sand-eval-runner.cjs#L527128-L527143) | `FunctionDeclaration` | no | `normalized, forDisplay` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682904-682919](../../../../../../reference/runtime/host-main.cjs#L682904-L682919) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:527128-527143](../../../../../../reference/runtime/sand-eval-runner.cjs#L527128-L527143) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:682904

Calls written directly in this body: `EVERY_PATTERN.exec`, `compileCronMatcher`, `describeCronMatcher`, `describeOneShotSchedule`, `match2[computed].toLowerCase`, `parseEveryIntervalMs`.

SHA-256 of the source span: `80e096c96a26758fb637d43737aa5a0cde0cd7222a587c3c5bcdcc37b709d45c`.

### evaluation:527128

Calls written directly in this body: `EVERY_PATTERN.exec`, `compileCronMatcher`, `describeCronMatcher`, `describeOneShotSchedule`, `match2[computed].toLowerCase`, `parseEveryIntervalMs`.

SHA-256 of the source span: `4b948cdb49ebca07da764323fd50cb9e8becfcfbce4f9f21afce7c2a44406088`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
