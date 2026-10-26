# `contactFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/user-form-vault-kinds.ts` · [Module README](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724751-724770](../../../../../../../reference/runtime/host-main.cjs#L724751-L724770) | `FunctionDeclaration` | no | `parts, prefill` |
| [evaluation:560310-560329](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560310-L560329) | `FunctionDeclaration` | no | `parts, prefill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724751-724770](../../../../../../../reference/runtime/host-main.cjs#L724751-L724770) | 2 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:560310-560329](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560310-L560329) | 2 | 1 | 0 | 1 | 1 | 0 |

### host:724751

Calls written directly in this body: `.flatMap`, `JSON.stringify`, `Object.entries`, `checkPrefillKeys`, `isVaultContactFormFieldId`, `new SandToolInputError`, `new Set`, `parts.flatMap`, `vaultContactFormFields`, `vaultContactFormValueProblem`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `fd96a1bf50f153a759a3a6f561b9738266b477c68dd66b51d29d0e830112f44e`.

### evaluation:560310

Calls written directly in this body: `.flatMap`, `JSON.stringify`, `Object.entries`, `checkPrefillKeys`, `isVaultContactFormFieldId`, `new SandToolInputError`, `new Set`, `parts.flatMap`, `vaultContactFormFields`, `vaultContactFormValueProblem`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `fd96a1bf50f153a759a3a6f561b9738266b477c68dd66b51d29d0e830112f44e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
