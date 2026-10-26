# `windowMinutes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716287-716289](../../../../../../reference/runtime/host-main.cjs#L716287-L716289) | `FunctionDeclaration` | no | `value` |
| [evaluation:527970-527972](../../../../../../reference/runtime/sand-eval-runner.cjs#L527970-L527972) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716287-716289](../../../../../../reference/runtime/host-main.cjs#L716287-L716289) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527970-527972](../../../../../../reference/runtime/sand-eval-runner.cjs#L527970-L527972) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:716287

Calls written directly in this body: `Number.isInteger`.

SHA-256 of the source span: `dd56973118c93b6b0743f3dad69cbcbab3f331377be92e89c08250e7dab999f6`.

### evaluation:527970

Calls written directly in this body: `Number.isInteger`.

SHA-256 of the source span: `dd56973118c93b6b0743f3dad69cbcbab3f331377be92e89c08250e7dab999f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
