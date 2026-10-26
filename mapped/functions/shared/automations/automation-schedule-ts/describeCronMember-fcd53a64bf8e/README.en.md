# `describeCronMember`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682930-682932](../../../../../../reference/runtime/host-main.cjs#L682930-L682932) | `FunctionDeclaration` | no | `member` |
| [evaluation:527154-527156](../../../../../../reference/runtime/sand-eval-runner.cjs#L527154-L527156) | `FunctionDeclaration` | no | `member` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682930-682932](../../../../../../reference/runtime/host-main.cjs#L682930-L682932) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527154-527156](../../../../../../reference/runtime/sand-eval-runner.cjs#L527154-L527156) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682930

Calls written directly in this body: `approximateWhenShifted`, `describeSchedule`.

SHA-256 of the source span: `155122675fa8efe123750134ec7c0dcdd14bab06b5e5f7079963c9c0d28cea96`.

### evaluation:527154

Calls written directly in this body: `approximateWhenShifted`, `describeSchedule`.

SHA-256 of the source span: `155122675fa8efe123750134ec7c0dcdd14bab06b5e5f7079963c9c0d28cea96`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
