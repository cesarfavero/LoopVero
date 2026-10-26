# `parseCronWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716290-716296](../../../../../../reference/runtime/host-main.cjs#L716290-L716296) | `FunctionDeclaration` | no | `window2` |
| [evaluation:527973-527979](../../../../../../reference/runtime/sand-eval-runner.cjs#L527973-L527979) | `FunctionDeclaration` | no | `window2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716290-716296](../../../../../../reference/runtime/host-main.cjs#L716290-L716296) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527973-527979](../../../../../../reference/runtime/sand-eval-runner.cjs#L527973-L527979) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:716290

Calls written directly in this body: `windowMinutes`.

SHA-256 of the source span: `379743e52acc3896442abcb1e8736e91449100bdb064588e8f8862c6df4c1725`.

### evaluation:527973

Calls written directly in this body: `windowMinutes`.

SHA-256 of the source span: `379743e52acc3896442abcb1e8736e91449100bdb064588e8f8862c6df4c1725`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
