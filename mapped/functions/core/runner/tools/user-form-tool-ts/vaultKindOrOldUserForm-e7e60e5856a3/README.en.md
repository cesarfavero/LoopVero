# `vaultKindOrOldUserForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726640-726663](../../../../../../../reference/runtime/host-main.cjs#L726640-L726663) | `FunctionDeclaration` | yes | `ctx, rawArgs, deps` |
| [evaluation:561255-561278](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561255-L561278) | `FunctionDeclaration` | yes | `ctx, rawArgs, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726640-726663](../../../../../../../reference/runtime/host-main.cjs#L726640-L726663) | 5 | 0 | 2 | 3 | 2 | 0 |
| [evaluation:561255-561278](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561255-L561278) | 5 | 0 | 2 | 3 | 2 | 0 |

### host:726640

Calls written directly in this body: `bindSecureValuesUserFormToLiveSite`, `new SandToolInputError`, `normalizeVaultKindUserFormRequest`, `oldSchema.safeParse`, `secureValuesUserFormOnLiveSite`, `vaultKindOrOldRequestUserFormParameters.parse`, `vaultKindRequestUserFormParameters.safeParse`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `849f7ff426a6f60ea7f69e443c9f9a9b576dafd7e3a3e2570f51f68c4e79a94a`.

### evaluation:561255

Calls written directly in this body: `bindSecureValuesUserFormToLiveSite`, `new SandToolInputError`, `normalizeVaultKindUserFormRequest`, `oldSchema.safeParse`, `secureValuesUserFormOnLiveSite`, `vaultKindOrOldRequestUserFormParameters.parse`, `vaultKindRequestUserFormParameters.safeParse`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `849f7ff426a6f60ea7f69e443c9f9a9b576dafd7e3a3e2570f51f68c4e79a94a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
