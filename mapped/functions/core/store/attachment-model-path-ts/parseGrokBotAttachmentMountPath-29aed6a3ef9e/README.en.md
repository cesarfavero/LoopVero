# `parseGrokBotAttachmentMountPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/store/attachment-model-path.ts` · [Module README](../../../../../modules/core/store/attachment-model-path-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752288-752294](../../../../../../reference/runtime/host-main.cjs#L752288-L752294) | `FunctionDeclaration` | no | `mountPath` |
| [evaluation:530366-530372](../../../../../../reference/runtime/sand-eval-runner.cjs#L530366-L530372) | `FunctionDeclaration` | no | `mountPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752288-752294](../../../../../../reference/runtime/host-main.cjs#L752288-L752294) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:530366-530372](../../../../../../reference/runtime/sand-eval-runner.cjs#L530366-L530372) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:752288

Calls written directly in this body: `isAgentStoreId`, `mountPath.slice`, `mountPath.startsWith`, `storeId.toLowerCase`.

SHA-256 of the source span: `0e341e4e3f11358b085ea31da29b756a4c099341c9e199babeb3677c1dd91832`.

### evaluation:530366

Calls written directly in this body: `isAgentStoreId`, `mountPath.slice`, `mountPath.startsWith`, `storeId.toLowerCase`.

SHA-256 of the source span: `0e341e4e3f11358b085ea31da29b756a4c099341c9e199babeb3677c1dd91832`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
