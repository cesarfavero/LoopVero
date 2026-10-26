# `joinWithAnd`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682629-682633](../../../../../../reference/runtime/host-main.cjs#L682629-L682633) | `FunctionDeclaration` | no | `parts` |
| [evaluation:526853-526857](../../../../../../reference/runtime/sand-eval-runner.cjs#L526853-L526857) | `FunctionDeclaration` | no | `parts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682629-682633](../../../../../../reference/runtime/host-main.cjs#L682629-L682633) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:526853-526857](../../../../../../reference/runtime/sand-eval-runner.cjs#L526853-L526857) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:682629

Calls written directly in this body: `.join`, `parts.slice`.

SHA-256 of the source span: `6ab96f982e4599bc7934773d6444f72e328145a8eabbe942b923ce92a7e54482`.

### evaluation:526853

Calls written directly in this body: `.join`, `parts.slice`.

SHA-256 of the source span: `6ab96f982e4599bc7934773d6444f72e328145a8eabbe942b923ce92a7e54482`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
