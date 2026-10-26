# `userFormFieldIsCardCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726159-726162](../../../../../../../reference/runtime/host-main.cjs#L726159-L726162) | `FunctionDeclaration` | no | `field` |
| [evaluation:560777-560780](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560777-L560780) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726159-726162](../../../../../../../reference/runtime/host-main.cjs#L726159-L726162) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560777-560780](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560777-L560780) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726159

Calls written directly in this body: `CARD_MASKABLE_TYPES.has`, `userFormFieldLooksLikeCardCredential`.

SHA-256 of the source span: `cfc155ae5dfa1197cbef1923333b031265bfa5b94bdac92a855c9aeac9e56c39`.

### evaluation:560777

Calls written directly in this body: `CARD_MASKABLE_TYPES.has`, `userFormFieldLooksLikeCardCredential`.

SHA-256 of the source span: `cfc155ae5dfa1197cbef1923333b031265bfa5b94bdac92a855c9aeac9e56c39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
