# `StoreDbBundleCapture.isAgentDbSnapshotDurable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480231-480237](../../../../../../../reference/runtime/host-main.cjs#L480231-L480237) | `method` | yes | `relPath, absPath, fileStat, manifest, capturedThisSweep` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480231-480237](../../../../../../../reference/runtime/host-main.cjs#L480231-L480237) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:480231

Calls written directly in this body: `capturedThisSweep.has`, `isBoxStoreManifestFileEntry`, `manifest.get`, `this.isAgentDbDurablyCaptured`.

SHA-256 of the source span: `2d1c6450b983658aca747bfa1017da27224a81644cc286f4370de634c6684e6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
