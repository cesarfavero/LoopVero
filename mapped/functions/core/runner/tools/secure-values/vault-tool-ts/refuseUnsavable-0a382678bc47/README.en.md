# `refuseUnsavable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767964-767969](../../../../../../../../reference/runtime/host-main.cjs#L767964-L767969) | `FunctionDeclaration` | no | `values` |
| [evaluation:563480-563485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563480-L563485) | `FunctionDeclaration` | no | `values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767964-767969](../../../../../../../../reference/runtime/host-main.cjs#L767964-L767969) | 1 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:563480-563485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563480-L563485) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:767964

Calls written directly in this body: `definedValues`, `new SandToolInputError`, `parseVaultContactInput`, `vaultContactInputOfForm`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `2a40fced15f302d0ce9b1585ffa9c8dc46f6b49aa14daaa0e9111ac9ff3b94a4`.

### evaluation:563480

Calls written directly in this body: `definedValues`, `new SandToolInputError`, `parseVaultContactInput`, `vaultContactInputOfForm`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `efe94e263166e8b613586c6d1db7b6b00f342f75fa05bb1f252d9d116f6bce21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
