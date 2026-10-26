# `formatClock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682609-682613](../../../../../../reference/runtime/host-main.cjs#L682609-L682613) | `FunctionDeclaration` | no | `hour, minute` |
| [evaluation:526833-526837](../../../../../../reference/runtime/sand-eval-runner.cjs#L526833-L526837) | `FunctionDeclaration` | no | `hour, minute` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682609-682613](../../../../../../reference/runtime/host-main.cjs#L682609-L682613) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526833-526837](../../../../../../reference/runtime/sand-eval-runner.cjs#L526833-L526837) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:682609

Calls written directly in this body: `.padStart`, `String`.

SHA-256 of the source span: `3c5901a98ff2b089bfc3e98a9fda053492f3bb54e9610a115e04625eb0335773`.

### evaluation:526833

Calls written directly in this body: `.padStart`, `String`.

SHA-256 of the source span: `3c5901a98ff2b089bfc3e98a9fda053492f3bb54e9610a115e04625eb0335773`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
