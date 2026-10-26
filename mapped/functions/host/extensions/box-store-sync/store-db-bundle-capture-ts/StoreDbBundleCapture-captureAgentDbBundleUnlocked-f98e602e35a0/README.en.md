# `StoreDbBundleCapture.captureAgentDbBundleUnlocked`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480009-480071](../../../../../../../reference/runtime/host-main.cjs#L480009-L480071) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480009-480071](../../../../../../../reference/runtime/host-main.cjs#L480009-L480071) | 9 | 3 | 4 | 5 | 0 | 1 |

### host:480009

Calls written directly in this body: `args.manifest.get`, `errorMessage`, `initialIdentity.includes`, `isBoxStoreManifestFileEntry`, `new Map`, `recordStoreDbCaptureFailure`, `stagedManifest.get`, `tallyFileOutcome`, `this.agentDbBundleIdentity`, `this.captureAgentSqliteDb`, `this.log`, `this.manifestStore.setManifestEntry`, `this.manifestStore.uncommittedStoreDbEntries.set`.

Assignment or increment targets: `args.captureTrace.blobUploadDurationMs`, `args.captureTrace.captureDurationMs`, `args.summary.failures`, `args.summary.filesScanned`, `complete`.

SHA-256 of the source span: `3e882e795ba958b37842ecd5e2026ad5bcacedac0c3e99d5967e56d407384298`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
