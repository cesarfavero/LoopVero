# `approximateWhenShifted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682927-682929](../../../../../../reference/runtime/host-main.cjs#L682927-L682929) | `FunctionDeclaration` | no | `trigger2, sentence` |
| [evaluation:527151-527153](../../../../../../reference/runtime/sand-eval-runner.cjs#L527151-L527153) | `FunctionDeclaration` | no | `trigger, sentence` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682927-682929](../../../../../../reference/runtime/host-main.cjs#L682927-L682929) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527151-527153](../../../../../../reference/runtime/sand-eval-runner.cjs#L527151-L527153) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:682927

Calls written directly in this body: `isApproximateCronTrigger`, `sentence.replace`.

SHA-256 of the source span: `54c9de9f78a0930ae27f76fe21d903fe08c3d78b9cff63be01207f25a02edaa0`.

### evaluation:527151

Calls written directly in this body: `isApproximateCronTrigger`, `sentence.replace`.

SHA-256 of the source span: `3dd0658129c5b4305a9dd3d8605f1585e59e1657b002a3e7fa61551596273b64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
