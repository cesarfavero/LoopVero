# `normalizeSecureValuesUserFormRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726461-726513](../../../../../../../reference/runtime/host-main.cjs#L726461-L726513) | `FunctionDeclaration` | no | `args, options2 = {}` |
| [evaluation:561076-561128](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561076-L561128) | `FunctionDeclaration` | no | `args, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726461-726513](../../../../../../../reference/runtime/host-main.cjs#L726461-L726513) | 7 | 0 | 0 | 3 | 4 | 0 |
| [evaluation:561076-561128](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561076-L561128) | 7 | 0 | 0 | 3 | 4 | 0 |

### host:726461

Calls written directly in this body: `fields3.some`, `new SandToolInputError`, `normalizeSecureValuesDomains`, `normalizeSecureValuesFields`, `normalizeUserFormTitle`, `vaultCardFormFieldsWithDefaults`, `vaultContactFormDefaults`, `vaultContactFormFields`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5a594a91fd97045187edb1377821e5a011677562113072682b9b04be0e227cee`.

### evaluation:561076

Calls written directly in this body: `fields3.some`, `new SandToolInputError`, `normalizeSecureValuesDomains`, `normalizeSecureValuesFields`, `normalizeUserFormTitle`, `vaultCardFormFieldsWithDefaults`, `vaultContactFormDefaults`, `vaultContactFormFields`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5a594a91fd97045187edb1377821e5a011677562113072682b9b04be0e227cee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
