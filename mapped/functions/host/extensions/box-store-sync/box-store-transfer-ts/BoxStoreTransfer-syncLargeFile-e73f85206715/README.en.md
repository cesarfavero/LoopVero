# `BoxStoreTransfer.syncLargeFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479537-479609](../../../../../../../reference/runtime/host-main.cjs#L479537-L479609) | `method` | yes | `storeId, manifest, relPath, absPath, expectedSizeBytes, expectedMode, modeOverride` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479537-479609](../../../../../../../reference/runtime/host-main.cjs#L479537-L479609) | 9 | 0 | 6 | 7 | 0 | 2 |

### host:479537

Calls written directly in this body: `.putFromFile`, `.toString`, `Promise.allSettled`, `classifyFileFailure`, `copyFileHashing`, `errorMessage`, `isBoxStoreManifestFileEntry`, `isPermissionDenied`, `isSnapshotNodeRace`, `manifest.get`, `this.discardTemp`, `this.hasDiskSpaceForLargeObject`, `this.localStat.set`, `this.log`, `this.manifestStore.setManifestEntry`, `this.matchExistingLargeFile`, `this.objectStore`, `this.skipInaccessibleEnabled`.

Assignment or increment targets: `mode`, `mtimeMs`, `sha`, `size`.

SHA-256 of the source span: `6e5eeaef2e16473a09b6028dd439abb978697aed73e2da9a6df25072b8931db1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
