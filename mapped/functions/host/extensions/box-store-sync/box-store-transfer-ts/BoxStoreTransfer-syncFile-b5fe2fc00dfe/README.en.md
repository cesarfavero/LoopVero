# `BoxStoreTransfer.syncFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479450-479536](../../../../../../../reference/runtime/host-main.cjs#L479450-L479536) | `method` | yes | `storeId, manifest, relPath, absPath, fileStat, bypassStatCache = false, modeOverride` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479450-479536](../../../../../../../reference/runtime/host-main.cjs#L479450-L479536) | 7 | 0 | 5 | 8 | 1 | 2 |

### host:479450

Calls written directly in this body: `.put`, `classifyFileFailure`, `errorMessage`, `handle.close`, `handle.readFile`, `handle.stat`, `isBoxStoreManifestFileEntry`, `isPermissionDenied`, `isSnapshotNodeRace`, `live.isFile`, `manifest.get`, `new SandBoxStoreSyncError`, `sha256Hex`, `this.fs.open`, `this.localStat.get`, `this.localStat.set`, `this.log`, `this.manifestStore.setManifestEntry`, `this.objectStore`, `this.skipInaccessibleEnabled`, `this.syncLargeFile`.

Assignment or increment targets: `bytes`, `effectiveStat`, `mode`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `921c9bc40949d39038b5c9ed8bf95c58d16d75690c4300fd150e19e31486ebef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
