# `BoxStorePackPipeline.syncPacks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479025-479199](../../../../../../../reference/runtime/host-main.cjs#L479025-L479199) | `method` | yes | `storeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479025-479199](../../../../../../../reference/runtime/host-main.cjs#L479025-L479199) | 20 | 3 | 13 | 7 | 1 | 4 |

### host:479025

Calls written directly in this body: `.filter`, `.toString`, `Buffer.from`, `JSON.stringify`, `Math.max`, `buildPackFile`, `built.members.reduce`, `builtPacks.flatMap`, `builtPacks.push`, `eligible.has`, `eligible.set`, `entryOf`, `errorMessage`, `info2.isFile`, `isBoxStoreManifestFileEntry`, `live.set`, `localBySha.set`, `merged.some`, `new Map`, `new SandBoxStoreSyncError`, `new Set`, `new Uint8Array`, `nextIndex2.packs.map`, `parsePackIndex`, `parsePackRetired`, `plan.retiredPackIds.filter`, `planPackMaintenance`, `planned.flatMap`, `serializePackRetired`, `store.delete`, `store.get`, `store.put`, `store.putFromFile`, `this.discardTemp`, `this.log`, `this.manifestStore.loadManifest`, `this.objectStore`, `this.openSweptPackTmpDir`, `this.resolveLocalPathForRelPath`, `this.sha256File`, `tmpDir.handle.close`, `yieldToFlush`.

Assignment or increment targets: `existing`, `summary.bytesUploaded`, `summary.failures`, `summary.filesScanned`, `summary.filesUploaded`, `summary.removed`, `summary.skippedUnchanged`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `127078b7692f731cc1f3140041ebda572c5ce3f64e3447139f0c2b279f00cd6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
