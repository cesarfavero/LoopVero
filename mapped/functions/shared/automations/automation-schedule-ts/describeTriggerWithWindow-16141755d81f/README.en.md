# `describeTriggerWithWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682958-682963](../../../../../../reference/runtime/host-main.cjs#L682958-L682963) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:527182-527187](../../../../../../reference/runtime/sand-eval-runner.cjs#L527182-L527187) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682958-682963](../../../../../../reference/runtime/host-main.cjs#L682958-L682963) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527182-527187](../../../../../../reference/runtime/sand-eval-runner.cjs#L527182-L527187) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682958

Calls written directly in this body: `describeTriggerWith`.

SHA-256 of the source span: `a078b8aa24b09b9600911732e105fbff274f5040a63748eb52365b8492a4b1a8`.

### evaluation:527182

Calls written directly in this body: `describeTriggerWith`.

SHA-256 of the source span: `c7078a90517a740d83180c482a33255f3819c915ad1ac5e4d2e7c9b606d52abd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
