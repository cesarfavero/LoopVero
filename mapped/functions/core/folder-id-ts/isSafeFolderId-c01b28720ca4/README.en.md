# `isSafeFolderId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/folder-id.ts` · [Module README](../../../../modules/core/folder-id-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496962-496964](../../../../../reference/runtime/host-main.cjs#L496962-L496964) | `FunctionDeclaration` | no | `id` |
| [evaluation:534341-534343](../../../../../reference/runtime/sand-eval-runner.cjs#L534341-L534343) | `FunctionDeclaration` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496962-496964](../../../../../reference/runtime/host-main.cjs#L496962-L496964) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534341-534343](../../../../../reference/runtime/sand-eval-runner.cjs#L534341-L534343) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:496962

Calls written directly in this body: `id.includes`.

SHA-256 of the source span: `68e2c954b352eb5e67d4a21ff748ff30f1ae8b1ad90e83c0e1f84134574bed94`.

### evaluation:534341

Calls written directly in this body: `id.includes`.

SHA-256 of the source span: `68e2c954b352eb5e67d4a21ff748ff30f1ae8b1ad90e83c0e1f84134574bed94`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
