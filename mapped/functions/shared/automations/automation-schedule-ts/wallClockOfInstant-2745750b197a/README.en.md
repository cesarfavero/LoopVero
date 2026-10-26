# `wallClockOfInstant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682490-682494](../../../../../../reference/runtime/host-main.cjs#L682490-L682494) | `FunctionDeclaration` | no | `ms2, timeZone` |
| [evaluation:526704-526708](../../../../../../reference/runtime/sand-eval-runner.cjs#L526704-L526708) | `FunctionDeclaration` | no | `ms2, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682490-682494](../../../../../../reference/runtime/host-main.cjs#L682490-L682494) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526704-526708](../../../../../../reference/runtime/sand-eval-runner.cjs#L526704-L526708) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:682490

Calls written directly in this body: `boxLocalWallClock`, `getZonedFormatter`, `new Date`, `zonedWallClock`.

SHA-256 of the source span: `987b85c5ca08be1006b5ca492a13078f8fd41c3ed2ab365f7b7702ef64fda41e`.

### evaluation:526704

Calls written directly in this body: `boxLocalWallClock`, `getZonedFormatter`, `new Date`, `zonedWallClock`.

SHA-256 of the source span: `987b85c5ca08be1006b5ca492a13078f8fd41c3ed2ab365f7b7702ef64fda41e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
