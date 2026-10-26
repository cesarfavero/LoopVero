# `isCalendarDate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682900-682903](../../../../../../reference/runtime/host-main.cjs#L682900-L682903) | `FunctionDeclaration` | no | `{ month, day }` |
| [evaluation:527124-527127](../../../../../../reference/runtime/sand-eval-runner.cjs#L527124-L527127) | `FunctionDeclaration` | no | `{ month, day }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682900-682903](../../../../../../reference/runtime/host-main.cjs#L682900-L682903) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527124-527127](../../../../../../reference/runtime/sand-eval-runner.cjs#L527124-L527127) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682900

Calls written directly in this body: `date6.getDate`, `date6.getMonth`, `new Date`.

SHA-256 of the source span: `f6b03fd6212abb8238c291a44db0ae62ffb186247f57349712e41a087e3180e3`.

### evaluation:527124

Calls written directly in this body: `date6.getDate`, `date6.getMonth`, `new Date`.

SHA-256 of the source span: `f6b03fd6212abb8238c291a44db0ae62ffb186247f57349712e41a087e3180e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
