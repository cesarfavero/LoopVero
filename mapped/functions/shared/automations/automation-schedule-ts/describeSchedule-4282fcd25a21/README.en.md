# `describeSchedule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682920-682923](../../../../../../reference/runtime/host-main.cjs#L682920-L682923) | `FunctionDeclaration` | no | `schedule` |
| [evaluation:527144-527147](../../../../../../reference/runtime/sand-eval-runner.cjs#L527144-L527147) | `FunctionDeclaration` | no | `schedule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682920-682923](../../../../../../reference/runtime/host-main.cjs#L682920-L682923) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527144-527147](../../../../../../reference/runtime/sand-eval-runner.cjs#L527144-L527147) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682920

Calls written directly in this body: `describeScheduleWith`, `normalizeSchedule`.

SHA-256 of the source span: `e868a68a2d399dfa6b97b82e56d01f0fd8dd082a5a85a40ebf6d8580eae5f72e`.

### evaluation:527144

Calls written directly in this body: `describeScheduleWith`, `normalizeSchedule`.

SHA-256 of the source span: `e868a68a2d399dfa6b97b82e56d01f0fd8dd082a5a85a40ebf6d8580eae5f72e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
