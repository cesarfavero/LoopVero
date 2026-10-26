# `StoreDbBundleCapture.isAgentDbDurablyCaptured`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-bundle-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-bundle-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480220-480227](../../../../../../../reference/runtime/host-main.cjs#L480220-L480227) | `method` | yes | `relPath, absPath, fileStat, manifest` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480220-480227](../../../../../../../reference/runtime/host-main.cjs#L480220-L480227) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:480220

Calls written directly in this body: `isBoxStoreManifestFileEntry`, `manifest.get`, `this.agentDbWriteGeneration`, `this.storeDbCaptures.get`, `this.walHasNoNewFramesSince`.

SHA-256 of the source span: `6ff5ec729aef972e9272f3523daafe1276a12bade057e75afb0598877ec71e38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
