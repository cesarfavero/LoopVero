# `vaultContactChangeUserForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726587-726626](../../../../../../../reference/runtime/host-main.cjs#L726587-L726626) | `FunctionDeclaration` | yes | `args, deps` |
| [evaluation:561202-561241](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561202-L561241) | `FunctionDeclaration` | yes | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726587-726626](../../../../../../../reference/runtime/host-main.cjs#L726587-L726626) | 3 | 0 | 1 | 2 | 2 | 0 |
| [evaluation:561202-561241](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561202-L561241) | 3 | 0 | 1 | 2 | 2 | 0 |

### host:726587

Calls written directly in this body: `JSON.stringify`, `clampBlock`, `deps.readSavedContact`, `mergeVaultContactPrefill`, `new SandToolInputError`, `normalizeUserFormTitle`, `vaultContactFormDefaults`, `vaultContactFormFields`, `vaultContactPrefillOf`, `vaultContactSummary`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `1f20c2c3afcc3414bb2bca45bcdcab05bdbc8ec7c3390af699b50015fc71cd75`.

### evaluation:561202

Calls written directly in this body: `JSON.stringify`, `clampBlock`, `deps.readSavedContact`, `mergeVaultContactPrefill`, `new SandToolInputError`, `normalizeUserFormTitle`, `vaultContactFormDefaults`, `vaultContactFormFields`, `vaultContactPrefillOf`, `vaultContactSummary`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `1f20c2c3afcc3414bb2bca45bcdcab05bdbc8ec7c3390af699b50015fc71cd75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
