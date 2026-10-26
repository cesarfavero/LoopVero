# `parseTemporalDurationMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682457-682469](../../../../../../reference/runtime/host-main.cjs#L682457-L682469) | `FunctionDeclaration` | no | `duration3, allowZero` |
| [evaluation:526671-526683](../../../../../../reference/runtime/sand-eval-runner.cjs#L526671-L526683) | `FunctionDeclaration` | no | `duration3, allowZero` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682457-682469](../../../../../../reference/runtime/host-main.cjs#L682457-L682469) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:526671-526683](../../../../../../reference/runtime/sand-eval-runner.cjs#L526671-L526683) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:682457

Calls written directly in this body: `Number`, `TEMPORAL_DURATION_PART.exec`, `part[computed].toLowerCase`.

Assignment or increment targets: `TEMPORAL_DURATION_PART.lastIndex`, `consumed`, `part`, `totalMs`.

SHA-256 of the source span: `8b0ebe349e33a847e53da5dcd0b31fc1fbaaff2b86bf86997461da9f73c243f5`.

### evaluation:526671

Calls written directly in this body: `Number`, `TEMPORAL_DURATION_PART.exec`, `part[computed].toLowerCase`.

Assignment or increment targets: `TEMPORAL_DURATION_PART.lastIndex`, `consumed`, `part`, `totalMs`.

SHA-256 of the source span: `8b0ebe349e33a847e53da5dcd0b31fc1fbaaff2b86bf86997461da9f73c243f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
