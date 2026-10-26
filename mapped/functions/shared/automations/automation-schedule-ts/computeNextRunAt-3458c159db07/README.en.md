# `computeNextRunAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682580-682590](../../../../../../reference/runtime/host-main.cjs#L682580-L682590) | `FunctionDeclaration` | no | `schedule, afterMs, timeZone` |
| [evaluation:526804-526814](../../../../../../reference/runtime/sand-eval-runner.cjs#L526804-L526814) | `FunctionDeclaration` | no | `schedule, afterMs, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682580-682590](../../../../../../reference/runtime/host-main.cjs#L682580-L682590) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:526804-526814](../../../../../../reference/runtime/sand-eval-runner.cjs#L526804-L526814) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:682580

Calls written directly in this body: `Math.floor`, `compileCronMatcher`, `nextCronRunAt`, `normalizeSchedule`, `parseEverySchedule`.

SHA-256 of the source span: `cbefbe5013c1c9ce7101b48590c38860e410e25a22f941e8f8bd60884626ab93`.

### evaluation:526804

Calls written directly in this body: `Math.floor`, `compileCronMatcher`, `nextCronRunAt`, `normalizeSchedule`, `parseEverySchedule`.

SHA-256 of the source span: `cbefbe5013c1c9ce7101b48590c38860e410e25a22f941e8f8bd60884626ab93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
