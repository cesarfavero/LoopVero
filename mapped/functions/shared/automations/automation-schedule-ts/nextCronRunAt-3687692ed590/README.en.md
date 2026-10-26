# `nextCronRunAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682591-682596](../../../../../../reference/runtime/host-main.cjs#L682591-L682596) | `FunctionDeclaration` | no | `matcher, afterMs, timeZone` |
| [evaluation:526815-526820](../../../../../../reference/runtime/sand-eval-runner.cjs#L526815-L526820) | `FunctionDeclaration` | no | `matcher, afterMs, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682591-682596](../../../../../../reference/runtime/host-main.cjs#L682591-L682596) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526815-526820](../../../../../../reference/runtime/sand-eval-runner.cjs#L526815-L526820) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:682591

Calls written directly in this body: `getZonedFormatter`, `nextCronRun`.

SHA-256 of the source span: `6322554128f5a8c79b3d7eb972533bed55330f3fd74466fe472445552741358f`.

### evaluation:526815

Calls written directly in this body: `getZonedFormatter`, `nextCronRun`.

SHA-256 of the source span: `6322554128f5a8c79b3d7eb972533bed55330f3fd74466fe472445552741358f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
