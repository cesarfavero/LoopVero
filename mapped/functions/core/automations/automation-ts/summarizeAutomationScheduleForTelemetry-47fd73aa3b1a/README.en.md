# `summarizeAutomationScheduleForTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation.ts` · [Module README](../../../../../modules/core/automations/automation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715027-715070](../../../../../../reference/runtime/host-main.cjs#L715027-L715070) | `FunctionDeclaration` | no | `{   schedule,   timeZone,   startMs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715027-715070](../../../../../../reference/runtime/host-main.cjs#L715027-L715070) | 6 | 1 | 0 | 2 | 0 | 0 |

### host:715027

Calls written directly in this body: `Math.floor`, `compileCronMatcher`, `nextCronRunAt`, `normalizeSchedule`, `parseEveryIntervalMs`, `wallClockOfInstant`.

Assignment or increment targets: `countedFires`, `cursorMs`, `firesOnWeekend`, `firesOvernight`, `nextRunAt`.

SHA-256 of the source span: `844d1be507f9064ec6dc4b6a9dbe996d64cca2ea9dcd62be4aa732f9ac0180b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
