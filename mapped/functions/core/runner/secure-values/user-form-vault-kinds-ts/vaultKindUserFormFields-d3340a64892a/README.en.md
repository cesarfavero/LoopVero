# `vaultKindUserFormFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/user-form-vault-kinds.ts` · [Module README](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724771-724786](../../../../../../../reference/runtime/host-main.cjs#L724771-L724786) | `FunctionDeclaration` | no | `args` |
| [evaluation:560330-560345](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560330-L560345) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724771-724786](../../../../../../../reference/runtime/host-main.cjs#L724771-L724786) | 4 | 0 | 0 | 3 | 1 | 0 |
| [evaluation:560330-560345](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560330-L560345) | 4 | 0 | 0 | 3 | 1 | 0 |

### host:724771

Calls written directly in this body: `cardFields`, `contactFields`, `loginFields`, `new SandToolInputError`, `partsOf`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `c461d0229ac1e5d1b55a9cd555522bb0957f86277ed4e770a31cf35c498efb17`.

### evaluation:560330

Calls written directly in this body: `cardFields`, `contactFields`, `loginFields`, `new SandToolInputError`, `partsOf`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `c461d0229ac1e5d1b55a9cd555522bb0957f86277ed4e770a31cf35c498efb17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
