# `classifyCronDays`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682668-682708](../../../../../../reference/runtime/host-main.cjs#L682668-L682708) | `FunctionDeclaration` | no | `matcher` |
| [evaluation:526892-526932](../../../../../../reference/runtime/sand-eval-runner.cjs#L526892-L526932) | `FunctionDeclaration` | no | `matcher` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682668-682708](../../../../../../reference/runtime/host-main.cjs#L682668-L682708) | 16 | 0 | 0 | 16 | 0 | 0 |
| [evaluation:526892-526932](../../../../../../reference/runtime/sand-eval-runner.cjs#L526892-L526932) | 16 | 0 | 0 | 16 | 0 | 0 |

### host:682668

Calls written directly in this body: `ascending`, `classifyNthWeekday`, `setsEqual`, `uniformStride`.

SHA-256 of the source span: `03de9e0207c1d252936a401e7135aefd5d6c0ea4a18ddbcaa9736a3aa372d4b0`.

### evaluation:526892

Calls written directly in this body: `ascending`, `classifyNthWeekday`, `setsEqual`, `uniformStride`.

SHA-256 of the source span: `03de9e0207c1d252936a401e7135aefd5d6c0ea4a18ddbcaa9736a3aa372d4b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
