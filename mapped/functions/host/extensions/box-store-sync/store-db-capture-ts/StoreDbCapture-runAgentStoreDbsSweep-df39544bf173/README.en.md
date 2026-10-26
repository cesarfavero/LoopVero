# `StoreDbCapture.runAgentStoreDbsSweep`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480734-480870](../../../../../../../reference/runtime/host-main.cjs#L480734-L480870) | `method` | yes | `storeId, skipLiveHandles` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480734-480870](../../../../../../../reference/runtime/host-main.cjs#L480734-L480870) | 10 | 2 | 8 | 3 | 0 | 2 |

### host:480734

Calls written directly in this body: `.sort`, `bundles.filter`, `bundles.push`, `createStoreDbCaptureTrace`, `entry.isDirectory`, `errorMessage`, `findSystemErrno`, `forEachBounded`, `new Set`, `parseAgentId`, `recordStoreDbCaptureFailure`, `targets.find`, `targets.push`, `targets.reduce`, `this.bundleCapture.agentHasPendingDbRecovery`, `this.bundleCapture.readWalStat`, `this.deps.categories.find`, `this.fs.stat`, `this.hasLiveHandle`, `this.log`, `this.manifestStore.loadManifest`, `this.verifyAgentDbsComplete`.

Assignment or increment targets: `bundleBlocked`, `fileStat`, `roster`, `summary.failures`.

SHA-256 of the source span: `28c1e4f4dd6efebd6377d9260e0979ced505d4c310bdf7d3dee6adb33d332881`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
