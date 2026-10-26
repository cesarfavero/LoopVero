# `StoreDbCapture.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480703-480733](../../../../../../../reference/runtime/host-main.cjs#L480703-L480733) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480703-480733](../../../../../../../reference/runtime/host-main.cjs#L480703-L480733) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:480703

Calls written directly in this body: `new StoreDbBundleCapture`, `new StoreDbSnapshotUpload`.

Assignment or increment targets: `this.bundleCapture`, `this.deps`, `this.ensureWriterLock`, `this.fs`, `this.hasLiveHandle`, `this.isStopped`, `this.largeObjectThreshold`, `this.log`, `this.manifestStore`, `this.snapshotUpload`, `this.transfer`, `this.uploadConcurrency`.

SHA-256 of the source span: `48be83b1b847efc9657b0e7b078cec6dabd8dbec3756f7e193cc7478f0c22454`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
