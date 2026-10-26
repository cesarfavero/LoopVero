# `normalizeSecureValuesFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726527-726568](../../../../../../../reference/runtime/host-main.cjs#L726527-L726568) | `FunctionDeclaration` | no | `argFields` |
| [evaluation:561142-561183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561142-L561183) | `FunctionDeclaration` | no | `argFields` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726527-726568](../../../../../../../reference/runtime/host-main.cjs#L726527-L726568) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561142-561183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561142-L561183) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726527

Calls written directly in this body: `argFields.map`, `new Set`, `normalizedFields.map`.

SHA-256 of the source span: `0ae1d34556a91d2b19a97715bb6ff6fba1a9a13c047fd9d6269118604c59aaad`.

### evaluation:561142

Calls written directly in this body: `argFields.map`, `new Set`, `normalizedFields.map`.

SHA-256 of the source span: `0ae1d34556a91d2b19a97715bb6ff6fba1a9a13c047fd9d6269118604c59aaad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
