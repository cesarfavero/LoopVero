# `isAutomationNoticeId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-notices.ts` · [Module README](../../../../../modules/core/automations/automation-notices-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715552-715554](../../../../../../reference/runtime/host-main.cjs#L715552-L715554) | `FunctionDeclaration` | no | `value` |
| [evaluation:527230-527232](../../../../../../reference/runtime/sand-eval-runner.cjs#L527230-L527232) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715552-715554](../../../../../../reference/runtime/host-main.cjs#L715552-L715554) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527230-527232](../../../../../../reference/runtime/sand-eval-runner.cjs#L527230-L527232) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715552

Calls written directly in this body: `SAND_AUTOMATION_NOTICES.some`.

SHA-256 of the source span: `250ea713d091d29d5fe34c30960c1aa01d0f66a3e72306025874090164616717`.

### evaluation:527230

Calls written directly in this body: `SAND_AUTOMATION_NOTICES.some`.

SHA-256 of the source span: `250ea713d091d29d5fe34c30960c1aa01d0f66a3e72306025874090164616717`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
