# `userFormFieldIsForcedCardSecret`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726167-726172](../../../../../../../reference/runtime/host-main.cjs#L726167-L726172) | `FunctionDeclaration` | no | `field, siblings` |
| [evaluation:560785-560790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560785-L560790) | `FunctionDeclaration` | no | `field, siblings` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726167-726172](../../../../../../../reference/runtime/host-main.cjs#L726167-L726172) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:560785-560790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560785-L560790) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:726167

Calls written directly in this body: `CARD_CONTEXT_FIELD_PATTERN.test`, `CARD_MASKABLE_TYPES.has`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `fieldSniffText`, `siblings.some`, `userFormFieldIsCardCredential`.

SHA-256 of the source span: `1be4a7048bc37a350c41df67dc790b34a5367afab26e4a52d40659a01f3a52c1`.

### evaluation:560785

Calls written directly in this body: `CARD_CONTEXT_FIELD_PATTERN.test`, `CARD_MASKABLE_TYPES.has`, `CARD_NON_CREDENTIAL_FIELD_PATTERN.test`, `fieldSniffText`, `siblings.some`, `userFormFieldIsCardCredential`.

SHA-256 of the source span: `1be4a7048bc37a350c41df67dc790b34a5367afab26e4a52d40659a01f3a52c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
