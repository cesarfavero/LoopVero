# `clampScheduleToMinimumInterval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682531-682579](../../../../../../reference/runtime/host-main.cjs#L682531-L682579) | `FunctionDeclaration` | no | `schedule, minimumIntervalMs` |
| [evaluation:526755-526803](../../../../../../reference/runtime/sand-eval-runner.cjs#L526755-L526803) | `FunctionDeclaration` | no | `schedule, minimumIntervalMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682531-682579](../../../../../../reference/runtime/host-main.cjs#L682531-L682579) | 20 | 2 | 0 | 11 | 0 | 0 |
| [evaluation:526755-526803](../../../../../../reference/runtime/sand-eval-runner.cjs#L526755-L526803) | 20 | 2 | 0 | 11 | 0 | 0 |

### host:682531

Calls written directly in this body: `.sort`, `.split`, `.trim`, `Number.isSafeInteger`, `String`, `calendarFields.join`, `commentedExpression.indexOf`, `commentedExpression.slice`, `cronIntervalIsAtLeast`, `expandAlias`, `fields3.join`, `fields3.slice`, `getZonedFormatter`, `isValidSchedule`, `new Set`, `normalizeSchedule`, `normalized.startsWith`, `parseCron`, `parseCronField`, `parseEveryIntervalMs`, `selected.join`, `selected.pop`, `selected.push`, `splitScheduleTimeZone`.

Assignment or increment targets: `fields3[computed]`.

SHA-256 of the source span: `27119174bb24e05cb71fab23554b9419a564d09a97b8a256ea514d1f1dd1815c`.

### evaluation:526755

Calls written directly in this body: `.sort`, `.split`, `.trim`, `Number.isSafeInteger`, `String`, `calendarFields.join`, `commentedExpression.indexOf`, `commentedExpression.slice`, `cronIntervalIsAtLeast`, `expandAlias`, `fields3.join`, `fields3.slice`, `getZonedFormatter`, `isValidSchedule`, `new Set`, `normalizeSchedule`, `normalized.startsWith`, `parseCron`, `parseCronField`, `parseEveryIntervalMs`, `selected.join`, `selected.pop`, `selected.push`, `splitScheduleTimeZone`.

Assignment or increment targets: `fields3[computed]`.

SHA-256 of the source span: `f571154182453d9bfb3a7b4c80639b72b100d4175f5b686516ffbbc7a687849c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
