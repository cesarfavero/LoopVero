# `compileCronMatcher`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682484-682489](../../../../../../reference/runtime/host-main.cjs#L682484-L682489) | `FunctionDeclaration` | no | `schedule` |
| [evaluation:526698-526703](../../../../../../reference/runtime/sand-eval-runner.cjs#L526698-L526703) | `FunctionDeclaration` | no | `schedule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682484-682489](../../../../../../reference/runtime/host-main.cjs#L682484-L682489) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526698-526703](../../../../../../reference/runtime/sand-eval-runner.cjs#L526698-L526703) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:682484

Calls written directly in this body: `expandAlias`, `getZonedFormatter`, `parseCron`, `splitScheduleTimeZone`.

SHA-256 of the source span: `2c3d5aa2ff6fdddccdfb7c0686e59996ad387eb95b169e7776342203d772f8a1`.

### evaluation:526698

Calls written directly in this body: `expandAlias`, `getZonedFormatter`, `parseCron`, `splitScheduleTimeZone`.

SHA-256 of the source span: `2c3d5aa2ff6fdddccdfb7c0686e59996ad387eb95b169e7776342203d772f8a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
