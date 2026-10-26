# `englishCronDays`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682724-682769](../../../../../../reference/runtime/host-main.cjs#L682724-L682769) | `FunctionDeclaration` | no | `days` |
| [evaluation:526948-526993](../../../../../../reference/runtime/sand-eval-runner.cjs#L526948-L526993) | `FunctionDeclaration` | no | `days` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682724-682769](../../../../../../reference/runtime/host-main.cjs#L682724-L682769) | 9 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:526948-526993](../../../../../../reference/runtime/sand-eval-runner.cjs#L526948-L526993) | 9 | 0 | 0 | 9 | 0 | 0 |

### host:682724

Calls written directly in this body: `days.days.map`, `formatDayOfMonthOrdinal`, `invariant`, `joinWithAnd`.

SHA-256 of the source span: `946a2b09ec8c6f608024332f02b297f6651886b3aa380abebb37e2663b803092`.

### evaluation:526948

Calls written directly in this body: `days.days.map`, `formatDayOfMonthOrdinal`, `invariant`, `joinWithAnd`.

SHA-256 of the source span: `5f00999d1ee1c0f6b4efb6af78cc00e840c9df883ae0f895fa87f8ea123988cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
