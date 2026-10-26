# `parseCronField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682303-682331](../../../../../../reference/runtime/host-main.cjs#L682303-L682331) | `FunctionDeclaration` | no | `field, min, max` |
| [evaluation:526517-526545](../../../../../../reference/runtime/sand-eval-runner.cjs#L526517-L526545) | `FunctionDeclaration` | no | `field, min, max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682303-682331](../../../../../../reference/runtime/host-main.cjs#L682303-L682331) | 9 | 2 | 0 | 5 | 0 | 0 |
| [evaluation:526517-526545](../../../../../../reference/runtime/sand-eval-runner.cjs#L526517-L526545) | 9 | 2 | 0 | 5 | 0 | 0 |

### host:682303

Calls written directly in this body: `Number`, `Number.isInteger`, `field.split`, `new Set`, `part.split`, `rangePart.includes`, `rangePart.split`, `values.add`.

Assignment or increment targets: `rangeEnd`, `rangeStart`, `value`.

SHA-256 of the source span: `c341b38aa14f17a545b81f110c5810853d4ae57058c8b857260791368b93af2b`.

### evaluation:526517

Calls written directly in this body: `Number`, `Number.isInteger`, `field.split`, `new Set`, `part.split`, `rangePart.includes`, `rangePart.split`, `values.add`.

Assignment or increment targets: `rangeEnd`, `rangeStart`, `value`.

SHA-256 of the source span: `c341b38aa14f17a545b81f110c5810853d4ae57058c8b857260791368b93af2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
