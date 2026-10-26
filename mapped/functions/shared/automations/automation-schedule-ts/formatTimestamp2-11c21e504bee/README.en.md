# `formatTimestamp2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:526709-526718](../../../../../../reference/runtime/sand-eval-runner.cjs#L526709-L526718) | `FunctionDeclaration` | no | `ms2, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526709-526718](../../../../../../reference/runtime/sand-eval-runner.cjs#L526709-L526718) | 2 | 0 | 0 | 3 | 0 | 1 |

### evaluation:526709

Calls written directly in this body: `.toLocaleString`, `Number.isFinite`, `new Date`.

SHA-256 of the source span: `d261a5685633f56210498632ff529cd89f71a1f90e8e2942a24669c147511034`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
