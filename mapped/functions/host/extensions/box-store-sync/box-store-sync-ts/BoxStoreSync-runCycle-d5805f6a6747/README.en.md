# `BoxStoreSync.runCycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481232-481360](../../../../../../../reference/runtime/host-main.cjs#L481232-L481360) | `method` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481232-481360](../../../../../../../reference/runtime/host-main.cjs#L481232-L481360) | 12 | 1 | 11 | 3 | 1 | 4 |

### host:481232

Calls written directly in this body: `.catch`, `aggregateStoreDbSweepOutcome`, `categories.every`, `categories.push`, `categories.some`, `createStoreDbCaptureTrace`, `errorMessage`, `new Set`, `recordStoreDbCaptureFailure`, `removeHydrationHandoffMarker`, `this.buildSummary`, `this.deps.categories.find`, `this.deps.resolveStoreId`, `this.emptyCycle`, `this.ensureWriterLock`, `this.log`, `this.manifestStore.isStoreDbSweepCommitted`, `this.manifestStore.loadManifest`, `this.manifestStore.saveManifest`, `this.now`, `this.report`, `this.reportStoreDbSweepCapture`, `this.storeDbCapture.pruneMissingAgentStoreDbs`, `this.storeDbCapture.runAgentStoreDbsSweep`, `this.storeDbCapture.verifyAgentDbsComplete`, `this.transfer.syncCategory`, `this.transfer.syncPacks`.

Assignment or increment targets: `capturedThisSweep`, `isStoreDbCaptureReported`, `storeDbCapture`, `storeDbComplete`, `sweep`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `df78cd65c9e8c4f1cd4890c3a294f2271b342936611236baf79ed97abdf3dab3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
