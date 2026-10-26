# `userFormFieldIsCardNumberOrExpiry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726150-726152](../../../../../../../reference/runtime/host-main.cjs#L726150-L726152) | `FunctionDeclaration` | no | `field` |
| [evaluation:560768-560770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560768-L560770) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726150-726152](../../../../../../../reference/runtime/host-main.cjs#L726150-L726152) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560768-560770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560768-L560770) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726150

Calls written directly in this body: `.some`, `CARD_EXPIRY_ARM.test`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `compactFieldAliases`, `fieldSniffText`, `userFormFieldLooksLikeCardCredential`.

SHA-256 of the source span: `e7e9211cca47df1eed1f4e66a13b5d0c983bc6447dc75c6f5f945f1f51069d7f`.

### evaluation:560768

Calls written directly in this body: `.some`, `CARD_EXPIRY_ARM.test`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `compactFieldAliases`, `fieldSniffText`, `userFormFieldLooksLikeCardCredential`.

SHA-256 of the source span: `e7e9211cca47df1eed1f4e66a13b5d0c983bc6447dc75c6f5f945f1f51069d7f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
