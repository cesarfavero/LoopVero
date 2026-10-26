# `userFormFieldLooksCredentialLike`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726229-726231](../../../../../../../reference/runtime/host-main.cjs#L726229-L726231) | `FunctionDeclaration` | no | `field` |
| [evaluation:560847-560849](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560847-L560849) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726229-726231](../../../../../../../reference/runtime/host-main.cjs#L726229-L726231) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560847-560849](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560847-L560849) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726229

Calls written directly in this body: `fieldSniffText`, `textLooksCredentialLike`.

SHA-256 of the source span: `ebb51fc70d17ded13907b480dce112e812b54b54c6600f0adf0c3bb23e117f2c`.

### evaluation:560847

Calls written directly in this body: `fieldSniffText`, `textLooksCredentialLike`.

SHA-256 of the source span: `ebb51fc70d17ded13907b480dce112e812b54b54c6600f0adf0c3bb23e117f2c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
