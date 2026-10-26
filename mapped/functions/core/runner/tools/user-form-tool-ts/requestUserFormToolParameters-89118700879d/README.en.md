# `requestUserFormToolParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726730-726742](../../../../../../../reference/runtime/host-main.cjs#L726730-L726742) | `FunctionDeclaration` | no | `deps` |
| [evaluation:561345-561357](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561345-L561357) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726730-726742](../../../../../../../reference/runtime/host-main.cjs#L726730-L726742) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:561345-561357](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561345-L561357) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:726730

Calls written directly in this body: `offersVaultKinds`.

SHA-256 of the source span: `0ed3c9df302b7544ff3191d92522e7cb5d25b764c7d77515902b2d288d9faf2e`.

### evaluation:561345

Calls written directly in this body: `offersVaultKinds`.

SHA-256 of the source span: `0ed3c9df302b7544ff3191d92522e7cb5d25b764c7d77515902b2d288d9faf2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
