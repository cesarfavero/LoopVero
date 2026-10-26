# `ascending`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682647-682649](../../../../../../reference/runtime/host-main.cjs#L682647-L682649) | `FunctionDeclaration` | no | `values` |
| [evaluation:526871-526873](../../../../../../reference/runtime/sand-eval-runner.cjs#L526871-L526873) | `FunctionDeclaration` | no | `values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682647-682649](../../../../../../reference/runtime/host-main.cjs#L682647-L682649) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526871-526873](../../../../../../reference/runtime/sand-eval-runner.cjs#L526871-L526873) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682647

Calls written directly in this body: `.sort`.

SHA-256 of the source span: `b933ee8cf83af10b7986324ee1714d5407556dd26ae898fd9924b07c6eddc5c0`.

### evaluation:526871

Calls written directly in this body: `.sort`.

SHA-256 of the source span: `b933ee8cf83af10b7986324ee1714d5407556dd26ae898fd9924b07c6eddc5c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
