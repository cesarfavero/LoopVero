# `normalizeVaultKindUserFormRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726035-726082](../../../../../../../reference/runtime/host-main.cjs#L726035-L726082) | `FunctionDeclaration` | no | `args, options2 = {}` |
| [evaluation:560653-560700](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560653-L560700) | `FunctionDeclaration` | no | `args, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726035-726082](../../../../../../../reference/runtime/host-main.cjs#L726035-L726082) | 13 | 1 | 0 | 1 | 6 | 0 |
| [evaluation:560653-560700](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560653-L560700) | 13 | 1 | 0 | 1 | 6 | 0 |

### host:726035

Calls written directly in this body: `extraFieldVaultKindProblem`, `extrasReason`, `isReservedVaultFieldName`, `new SandToolInputError`, `normalizeSecureValuesDomains`, `normalizeSecureValuesFields`, `normalizeUserFormTitle`, `vaultKindUserFormFields`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5df8c4766b9a2260238dc8d49af3a07e94d3e46879d1a2999a21d7b93205461b`.

### evaluation:560653

Calls written directly in this body: `extraFieldVaultKindProblem`, `extrasReason`, `isReservedVaultFieldName`, `new SandToolInputError`, `normalizeSecureValuesDomains`, `normalizeSecureValuesFields`, `normalizeUserFormTitle`, `vaultKindUserFormFields`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5df8c4766b9a2260238dc8d49af3a07e94d3e46879d1a2999a21d7b93205461b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
