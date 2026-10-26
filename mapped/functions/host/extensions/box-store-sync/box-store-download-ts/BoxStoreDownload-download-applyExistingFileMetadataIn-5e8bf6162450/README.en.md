# `BoxStoreDownload.download/applyExistingFileMetadataIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477807-477819](../../../../../../../reference/runtime/host-main.cjs#L477807-L477819) | `ArrowFunctionExpression` | yes | `parent, destPath, relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477807-477819](../../../../../../../reference/runtime/host-main.cjs#L477807-L477819) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:477807

Calls written directly in this body: `applyOpenFileMetadata`, `entryOf`, `fileEntries.get`, `new SandBoxStoreSyncError`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `912a2ed1545763c471891d5b88c33b40be64dd670b8b077a8485937a8c99df7b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
