# `copyFileHashing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478366-478398](../../../../../../../reference/runtime/host-main.cjs#L478366-L478398) | `FunctionDeclaration` | yes | `srcPath, destPath, onChunk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478366-478398](../../../../../../../reference/runtime/host-main.cjs#L478366-L478398) | 1 | 0 | 4 | 1 | 1 | 0 |

### host:478366

Calls written directly in this body: `handle.close`, `handle.createReadStream`, `handle.stat`, `hash2.digest`, `info2.isFile`, `new SandBoxStoreSyncError`, `new import_node_stream4.Transform`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `a043a8e3e05769a3f4697c3d98e544d51c4e455bea111bdbd905ae8ed38fe303`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
