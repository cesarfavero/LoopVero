# `StoreDbCapture.runAgentStoreDbSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480960-481094](../../../../../../../reference/runtime/host-main.cjs#L480960-L481094) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480960-481094](../../../../../../../reference/runtime/host-main.cjs#L480960-L481094) | 16 | 2 | 10 | 7 | 1 | 4 |

### host:480960

Calls written directly in this body: `AGENT_STORE_DB_BASENAMES.some`, `aggregateStoreDbSweepOutcome`, `createStoreDbCaptureTrace`, `errorMessage`, `findSystemErrno`, `finish`, `new Map`, `recordStoreDbCaptureFailure`, `targets.map`, `targets.push`, `targets.some`, `this.bundleCapture.agentHasPendingDbRecovery`, `this.bundleCapture.captureAgentDbBundle`, `this.bundleCapture.isAgentDbBundleCommitted`, `this.bundleCapture.readWalStat`, `this.deps.categories.find`, `this.deps.resolveStoreId`, `this.ensureWriterLock`, `this.fs.stat`, `this.isStopped`, `this.log`, `this.manifestStore.deleteManifestEntry`, `this.manifestStore.loadManifest`, `this.manifestStore.saveManifest`, `this.storeDbCaptures.delete`, `this.transfer.localStat.delete`.

Assignment or increment targets: `bundleBlocked`, `bundleCommitted`, `fileStat`, `manifestChanged`, `storeId`, `summary.failures`, `summary.removed`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `e5b99f79dc214307b7aae8c0babc21df6de4bf50b3149288961eaf50b32c4fa5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
