# `userFormFieldLooksLikeCardCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726163-726166](../../../../../../../reference/runtime/host-main.cjs#L726163-L726166) | `FunctionDeclaration` | no | `field` |
| [evaluation:560781-560784](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560781-L560784) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726163-726166](../../../../../../../reference/runtime/host-main.cjs#L726163-L726166) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560781-560784](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560781-L560784) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726163

Calls written directly in this body: `CARD_CREDENTIAL_FIELD_PATTERN.test`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `fieldSniffText`.

SHA-256 of the source span: `5be23f5cf048b6a4628f0e46628f34a13f4432c07f0e9a86729a4aff33fbf007`.

### evaluation:560781

Calls written directly in this body: `CARD_CREDENTIAL_FIELD_PATTERN.test`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `fieldSniffText`.

SHA-256 of the source span: `5be23f5cf048b6a4628f0e46628f34a13f4432c07f0e9a86729a4aff33fbf007`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
