# `parseEverySchedule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682470-682480](../../../../../../reference/runtime/host-main.cjs#L682470-L682480) | `FunctionDeclaration` | no | `schedule` |
| [evaluation:526684-526694](../../../../../../reference/runtime/sand-eval-runner.cjs#L526684-L526694) | `FunctionDeclaration` | no | `schedule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682470-682480](../../../../../../reference/runtime/host-main.cjs#L682470-L682480) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:526684-526694](../../../../../../reference/runtime/sand-eval-runner.cjs#L526684-L526694) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:682470

Calls written directly in this body: `TEMPORAL_EVERY_PATTERN.exec`, `intervalAndPhase.split`, `parseTemporalDurationMs`, `schedule.trim`.

SHA-256 of the source span: `6235d815e5470bec94b03e34dfa4b874de5843d384ccfb417fa717693cbe6eb9`.

### evaluation:526684

Calls written directly in this body: `TEMPORAL_EVERY_PATTERN.exec`, `intervalAndPhase.split`, `parseTemporalDurationMs`, `schedule.trim`.

SHA-256 of the source span: `6235d815e5470bec94b03e34dfa4b874de5843d384ccfb417fa717693cbe6eb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
