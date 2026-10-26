# `BoxStoreDownload.download`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477571-478282](../../../../../../../reference/runtime/host-main.cjs#L477571-L478282) | `method` | yes | `targetDir, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477571-478282](../../../../../../../reference/runtime/host-main.cjs#L477571-L478282) | 11 | 3 | 7 | 1 | 0 | 0 |

### host:477571

Calls written directly in this body: `.map`, `Promise.all`, `bulkLarge.values`, `bulkSmall.values`, `claimedDestinations.add`, `claimedDestinations.has`, `criticalLarge.values`, `criticalSmall.values`, `destinationPaths.set`, `fileEntries.set`, `forEachBounded`, `group.relPaths.filter`, `group.relPaths.push`, `isBoxStoreManifestFileEntry`, `isBoxStoreManifestSymlinkEntry`, `isCriticalRelPath`, `makeInFlightByteBudget`, `new Map`, `new Set`, `phase.get`, `phase.set`, `recordFailure`, `remainingBulkSmall.push`, `reportTrace`, `resolveRestoreDestination`, `runPhase`, `symlinkEntries.set`, `this.manifestStore.loadManifest`, `this.objectStore`, `this.packPipeline.restoreBulkSmallFromPacks`, `this.resolveStoreId`, `withoutForeignMountEntries`.

Assignment or increment targets: `manifest`, `phase`, `this.manifestStore.manifest`.

SHA-256 of the source span: `373696858bc173c3d4eb8f3806b1f9334245a21191fad0c03e3549aac5da0d83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
