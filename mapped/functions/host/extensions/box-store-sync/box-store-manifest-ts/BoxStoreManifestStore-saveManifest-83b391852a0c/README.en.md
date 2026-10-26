# `BoxStoreManifestStore.saveManifest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477235-477299](../../../../../../../reference/runtime/host-main.cjs#L477235-L477299) | `method` | no | `storeId, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477235-477299](../../../../../../../reference/runtime/host-main.cjs#L477235-L477299) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:477235

Calls written directly in this body: `Promise.reject`, `Promise.resolve`, `new Error`, `new SandBoxStoreSyncError`, `revisionState.capture`, `save.then`, `settled.then`, `this.manifestRevisionState`, `this.manifestWriteQueue.then`, `this.now`.

Assignment or increment targets: `this.manifestWriteQueue`.

SHA-256 of the source span: `29f716fb2ea47004d3d31eec2fecac1987e084d24bfac904100f328813598d53`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
