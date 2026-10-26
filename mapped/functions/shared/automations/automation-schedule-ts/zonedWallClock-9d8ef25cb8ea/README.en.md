# `zonedWallClock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682410-682424](../../../../../../reference/runtime/host-main.cjs#L682410-L682424) | `FunctionDeclaration` | no | `date6, formatter` |
| [evaluation:526624-526638](../../../../../../reference/runtime/sand-eval-runner.cjs#L526624-L526638) | `FunctionDeclaration` | no | `date6, formatter` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682410-682424](../../../../../../reference/runtime/host-main.cjs#L682410-L682424) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:526624-526638](../../../../../../reference/runtime/sand-eval-runner.cjs#L526624-L526638) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:682410

Calls written directly in this body: `Number`, `formatter.formatToParts`.

Assignment or increment targets: `lookup3[computed]`.

SHA-256 of the source span: `3e339e9d3216745081c073c02a086e295306db3f22acadb24747f598c4e0e63e`.

### evaluation:526624

Calls written directly in this body: `Number`, `formatter.formatToParts`.

Assignment or increment targets: `lookup3[computed]`.

SHA-256 of the source span: `3e339e9d3216745081c073c02a086e295306db3f22acadb24747f598c4e0e63e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
