# `StoreDbSnapshotUpload.uploadAgentDbSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-snapshot-upload.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-snapshot-upload-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480507-480591](../../../../../../../reference/runtime/host-main.cjs#L480507-L480591) | `method` | yes | `storeId, manifest, relPath, snapshotPath, mode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480507-480591](../../../../../../../reference/runtime/host-main.cjs#L480507-L480591) | 4 | 0 | 5 | 6 | 0 | 3 |

### host:480507

Calls written directly in this body: `.put`, `.putFromFile`, `errorMessage`, `isBoxStoreManifestFileEntry`, `manifest.get`, `sha256File`, `sha256Hex`, `this.elapsedDurationMs`, `this.log`, `this.manifestStore.setManifestEntry`, `this.now`, `this.objectStore`.

Assignment or increment targets: `bytes`, `sha`, `size`.

SHA-256 of the source span: `82fbeda8b21ab4d7f6f192874e1f49f36a26114ab9d4d50e9da1d34073d3f24f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
