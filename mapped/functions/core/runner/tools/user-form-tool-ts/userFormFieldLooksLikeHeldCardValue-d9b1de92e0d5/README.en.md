# `userFormFieldLooksLikeHeldCardValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726173-726177](../../../../../../../reference/runtime/host-main.cjs#L726173-L726177) | `FunctionDeclaration` | no | `field, siblings` |
| [evaluation:560791-560795](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560791-L560795) | `FunctionDeclaration` | no | `field, siblings` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726173-726177](../../../../../../../reference/runtime/host-main.cjs#L726173-L726177) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560791-560795](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560791-L560795) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726173

Calls written directly in this body: `CARD_CONTEXT_FIELD_PATTERN.test`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `fieldSniffText`, `siblings.some`, `userFormFieldLooksLikeCardCredential`.

SHA-256 of the source span: `34827f64cf0073269574ded3519f1aae2e25857e0bccd5cd0056c96a78845764`.

### evaluation:560791

Calls written directly in this body: `CARD_CONTEXT_FIELD_PATTERN.test`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `fieldSniffText`, `siblings.some`, `userFormFieldLooksLikeCardCredential`.

SHA-256 of the source span: `34827f64cf0073269574ded3519f1aae2e25857e0bccd5cd0056c96a78845764`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
