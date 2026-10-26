# `vaultCardFormFieldsWithDefaults`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726422-726443](../../../../../../../reference/runtime/host-main.cjs#L726422-L726443) | `FunctionDeclaration` | no | `args` |
| [evaluation:561037-561058](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561037-L561058) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726422-726443](../../../../../../../reference/runtime/host-main.cjs#L726422-L726443) | 3 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:561037-561058](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561037-L561058) | 3 | 1 | 0 | 1 | 1 | 0 |

### host:726422

Calls written directly in this body: `VAULT_CARD_USER_FORM_FIELDS.map`, `canonicalVaultCountryCode`, `defaults2.set`, `new Map`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `fa132eb480df1d1ca8bd54dddb1d3f213fa0f63cdcfee45442d006f4c324c688`.

### evaluation:561037

Calls written directly in this body: `VAULT_CARD_USER_FORM_FIELDS.map`, `canonicalVaultCountryCode`, `defaults2.set`, `new Map`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `fa132eb480df1d1ca8bd54dddb1d3f213fa0f63cdcfee45442d006f4c324c688`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
