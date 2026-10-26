# `StoreDbBundleCapture.captureAgentSqliteDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480113-480203](../../../../../../../reference/runtime/host-main.cjs#L480113-L480203) | `method` | yes | `storeId, manifest, relPath, absPath, fileStat` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480113-480203](../../../../../../../reference/runtime/host-main.cjs#L480113-L480203) | 6 | 0 | 7 | 3 | 0 | 1 |

### host:480113

Calls written directly in this body: `.catch`, `.toString`, `Math.max`, `errorMessage`, `isBoxStoreManifestFileEntry`, `manifest.get`, `this.agentDbWriteGeneration`, `this.elapsedDurationMs`, `this.isAgentDbDurablyCaptured`, `this.log`, `this.now`, `this.readWalStat`, `this.snapshotUpload.discardSnapshotTemp`, `this.snapshotUpload.uploadAgentDbSnapshot`, `this.storeDbCaptures.delete`, `this.storeDbCaptures.get`, `this.storeDbCaptures.set`, `this.transfer.hasDiskSpaceForLargeObject`, `this.vacuumInto`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `c9154ddde59d16ea9172c95ecaa687310be0299ee46d654e40ab2cbbb18b19f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
