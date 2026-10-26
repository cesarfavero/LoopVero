# `vaultContactFormDefaults`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726444-726460](../../../../../../../reference/runtime/host-main.cjs#L726444-L726460) | `FunctionDeclaration` | no | `fields3` |
| [evaluation:561059-561075](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561059-L561075) | `FunctionDeclaration` | no | `fields3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726444-726460](../../../../../../../reference/runtime/host-main.cjs#L726444-L726460) | 3 | 1 | 0 | 1 | 2 | 0 |
| [evaluation:561059-561075](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561059-L561075) | 3 | 1 | 0 | 1 | 2 | 0 |

### host:726444

Calls written directly in this body: `VAULT_CONTACT_FORM_FIELD_IDS.join`, `isVaultContactFormFieldId`, `new SandToolInputError`, `vaultContactFormValueProblem`.

Assignment or increment targets: `defaults2[computed]`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `ef69fd292ea54e78ce996def818c022193fe40d56d551498a648f484ef24cadb`.

### evaluation:561059

Calls written directly in this body: `VAULT_CONTACT_FORM_FIELD_IDS.join`, `isVaultContactFormFieldId`, `new SandToolInputError`, `vaultContactFormValueProblem`.

Assignment or increment targets: `defaults2[computed]`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `ef69fd292ea54e78ce996def818c022193fe40d56d551498a648f484ef24cadb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
