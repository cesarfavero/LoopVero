# `MeetingRepeatSpec.isWeekdays`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/meetings/meeting-repeat.ts` · [Module README](../../../../../modules/shared/meetings/meeting-repeat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763271-763273](../../../../../../reference/runtime/host-main.cjs#L763271-L763273) | `method` | no | `days` |
| [evaluation:556236-556238](../../../../../../reference/runtime/sand-eval-runner.cjs#L556236-L556238) | `method` | no | `days` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763271-763273](../../../../../../reference/runtime/host-main.cjs#L763271-L763273) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556236-556238](../../../../../../reference/runtime/sand-eval-runner.cjs#L556236-L556238) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763271

Calls written directly in this body: `MeetingRepeatValues.isEveryWeekday`.

SHA-256 of the source span: `774913351640b008cb2ec14f675a030a52a0af28c10c41839b49c636014461ad`.

### evaluation:556236

Calls written directly in this body: `MeetingRepeatValues.isEveryWeekday`.

SHA-256 of the source span: `774913351640b008cb2ec14f675a030a52a0af28c10c41839b49c636014461ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
