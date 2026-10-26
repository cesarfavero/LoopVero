# `textLooksCredentialLike`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726225-726228](../../../../../../../reference/runtime/host-main.cjs#L726225-L726228) | `FunctionDeclaration` | no | `text3` |
| [evaluation:560843-560846](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560843-L560846) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726225-726228](../../../../../../../reference/runtime/host-main.cjs#L726225-L726228) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560843-560846](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560843-L560846) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726225

Calls written directly in this body: `BARE_CODE_FIELD_PATTERN.test`, `CREDENTIAL_LIKE_FIELD_PATTERN.test`, `NON_SECRET_CODE_QUALIFIER_PATTERN.test`.

SHA-256 of the source span: `ab7c7805d98e4fe2f9f6833830b790db1a648a2d11372c0d2da3c3c63ffe6363`.

### evaluation:560843

Calls written directly in this body: `BARE_CODE_FIELD_PATTERN.test`, `CREDENTIAL_LIKE_FIELD_PATTERN.test`, `NON_SECRET_CODE_QUALIFIER_PATTERN.test`.

SHA-256 of the source span: `ab7c7805d98e4fe2f9f6833830b790db1a648a2d11372c0d2da3c3c63ffe6363`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
