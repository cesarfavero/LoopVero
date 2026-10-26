# `uniformStride`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automation-schedule.ts` · [Module README](../../../../../modules/shared/automations/automation-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682650-682662](../../../../../../reference/runtime/host-main.cjs#L682650-L682662) | `FunctionDeclaration` | no | `sorted` |
| [evaluation:526874-526886](../../../../../../reference/runtime/sand-eval-runner.cjs#L526874-L526886) | `FunctionDeclaration` | no | `sorted` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682650-682662](../../../../../../reference/runtime/host-main.cjs#L682650-L682662) | 3 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:526874-526886](../../../../../../reference/runtime/sand-eval-runner.cjs#L526874-L526886) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:682650

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `index`, `previous`.

SHA-256 of the source span: `57186b4d8f1c7e794ded00ac148731833fe146dde972f10a6006b9ee0099ffd6`.

### evaluation:526874

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `index`, `previous`.

SHA-256 of the source span: `57186b4d8f1c7e794ded00ac148731833fe146dde972f10a6006b9ee0099ffd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
