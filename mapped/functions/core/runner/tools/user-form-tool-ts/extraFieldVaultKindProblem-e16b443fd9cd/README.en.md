# `extraFieldVaultKindProblem`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726193-726218](../../../../../../../reference/runtime/host-main.cjs#L726193-L726218) | `FunctionDeclaration` | no | `field` |
| [evaluation:560811-560836](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560811-L560836) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726193-726218](../../../../../../../reference/runtime/host-main.cjs#L726193-L726218) | 8 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:560811-560836](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560811-L560836) | 8 | 0 | 0 | 9 | 0 | 0 |

### host:726193

Calls written directly in this body: `CARD_CONTEXT_FIELD_PATTERN.test`, `EXTRA_ADDRESS_PATTERN.test`, `EXTRA_BARE_ADDRESS_LABEL_PATTERN.test`, `EXTRA_CARD_DETAIL_PATTERN.test`, `EXTRA_CARD_WORD_PATTERN.test`, `EXTRA_CODE_PATTERN.test`, `EXTRA_EMAIL_PATTERN.test`, `EXTRA_NAME_PATTERN.test`, `EXTRA_NON_SIGN_IN_SECRET_PATTERN.test`, `EXTRA_PHONE_PATTERN.test`, `EXTRA_SIGN_IN_PATTERN.test`, `EXTRA_USERNAME_PATTERN.test`, `JSON.stringify`, `fieldSniffText`, `userFormFieldLooksLikeCardCredential`.

SHA-256 of the source span: `ebfc8e9b463ef21dec223e1282f5376b0c181236bd48f43e07e65c77abe7da9d`.

### evaluation:560811

Calls written directly in this body: `CARD_CONTEXT_FIELD_PATTERN.test`, `EXTRA_ADDRESS_PATTERN.test`, `EXTRA_BARE_ADDRESS_LABEL_PATTERN.test`, `EXTRA_CARD_DETAIL_PATTERN.test`, `EXTRA_CARD_WORD_PATTERN.test`, `EXTRA_CODE_PATTERN.test`, `EXTRA_EMAIL_PATTERN.test`, `EXTRA_NAME_PATTERN.test`, `EXTRA_NON_SIGN_IN_SECRET_PATTERN.test`, `EXTRA_PHONE_PATTERN.test`, `EXTRA_SIGN_IN_PATTERN.test`, `EXTRA_USERNAME_PATTERN.test`, `JSON.stringify`, `fieldSniffText`, `userFormFieldLooksLikeCardCredential`.

SHA-256 of the source span: `ebfc8e9b463ef21dec223e1282f5376b0c181236bd48f43e07e65c77abe7da9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
