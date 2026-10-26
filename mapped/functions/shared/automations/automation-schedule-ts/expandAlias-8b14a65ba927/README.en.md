# `expandAlias`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682299-682302](../../../../../../reference/runtime/host-main.cjs#L682299-L682302) | `FunctionDeclaration` | no | `schedule` |
| [evaluation:526513-526516](../../../../../../reference/runtime/sand-eval-runner.cjs#L526513-L526516) | `FunctionDeclaration` | no | `schedule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682299-682302](../../../../../../reference/runtime/host-main.cjs#L682299-L682302) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526513-526516](../../../../../../reference/runtime/sand-eval-runner.cjs#L526513-L526516) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682299

Calls written directly in this body: `schedule.toLowerCase`.

SHA-256 of the source span: `bfddaf3e7c9def4796f7c0ed66e4e9cd44201aa441513ed408738025698e51d7`.

### evaluation:526513

Calls written directly in this body: `schedule.toLowerCase`.

SHA-256 of the source span: `bfddaf3e7c9def4796f7c0ed66e4e9cd44201aa441513ed408738025698e51d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
