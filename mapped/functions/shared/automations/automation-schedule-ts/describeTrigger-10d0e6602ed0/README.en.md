# `describeTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682955-682957](../../../../../../reference/runtime/host-main.cjs#L682955-L682957) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:527179-527181](../../../../../../reference/runtime/sand-eval-runner.cjs#L527179-L527181) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682955-682957](../../../../../../reference/runtime/host-main.cjs#L682955-L682957) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527179-527181](../../../../../../reference/runtime/sand-eval-runner.cjs#L527179-L527181) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682955

Calls written directly in this body: `describeTriggerWith`.

SHA-256 of the source span: `3d5aa31e116b28de21260a7136b7926fc993a68969091e4a722e4f13c95fb4a3`.

### evaluation:527179

Calls written directly in this body: `describeTriggerWith`.

SHA-256 of the source span: `d0c644f1ea40ed90d9a4b155d6fbb4db1a1ee902ce3319eb3ef5e68e801c402f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
