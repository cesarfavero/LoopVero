# `describeCronMemberWithZone`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682934-682938](../../../../../../reference/runtime/host-main.cjs#L682934-L682938) | `FunctionDeclaration` | no | `member` |
| [evaluation:527158-527162](../../../../../../reference/runtime/sand-eval-runner.cjs#L527158-L527162) | `FunctionDeclaration` | no | `member` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682934-682938](../../../../../../reference/runtime/host-main.cjs#L682934-L682938) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:527158-527162](../../../../../../reference/runtime/sand-eval-runner.cjs#L527158-L527162) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:682934

Calls written directly in this body: `describeCronMember`, `isApproximateCronTrigger`, `sentence.includes`, `splitScheduleTimeZone`.

SHA-256 of the source span: `00dc48c2df485bd0b2491f4c922423fec07516dc29f763752c0de825939018d5`.

### evaluation:527158

Calls written directly in this body: `describeCronMember`, `isApproximateCronTrigger`, `sentence.includes`, `splitScheduleTimeZone`.

SHA-256 of the source span: `00dc48c2df485bd0b2491f4c922423fec07516dc29f763752c0de825939018d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
