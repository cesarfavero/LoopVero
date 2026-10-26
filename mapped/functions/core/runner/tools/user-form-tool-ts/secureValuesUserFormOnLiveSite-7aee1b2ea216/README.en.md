# `secureValuesUserFormOnLiveSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726627-726639](../../../../../../../reference/runtime/host-main.cjs#L726627-L726639) | `FunctionDeclaration` | yes | `ctx, args, deps` |
| [evaluation:561242-561254](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561242-L561254) | `FunctionDeclaration` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726627-726639](../../../../../../../reference/runtime/host-main.cjs#L726627-L726639) | 2 | 0 | 2 | 3 | 0 | 0 |
| [evaluation:561242-561254](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561242-L561254) | 2 | 0 | 2 | 3 | 0 | 0 |

### host:726627

Calls written directly in this body: `bindSecureValuesUserFormToLiveSite`, `normalizeSecureValuesUserFormRequest`, `vaultContactChangeUserForm`.

SHA-256 of the source span: `3f4915565a96f69d26e29f714a88d7388f58ece0105ce0feb379fde1d74c0287`.

### evaluation:561242

Calls written directly in this body: `bindSecureValuesUserFormToLiveSite`, `normalizeSecureValuesUserFormRequest`, `vaultContactChangeUserForm`.

SHA-256 of the source span: `3f4915565a96f69d26e29f714a88d7388f58ece0105ce0feb379fde1d74c0287`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
