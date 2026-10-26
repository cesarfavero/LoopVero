# `BoxStoreManifestStore.writeManifestAttempt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477347-477366](../../../../../../../reference/runtime/host-main.cjs#L477347-L477366) | `method` | yes | `storeId, manifest` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477347-477366](../../../../../../../reference/runtime/host-main.cjs#L477347-L477366) | 4 | 0 | 2 | 0 | 2 | 1 |

### host:477347

Calls written directly in this body: `.get`, `.put`, `Buffer.from`, `JSON.stringify`, `new ManifestRetryStoppedError`, `new Uint8Array`, `this.isDisposed`, `this.log`, `this.objectStore`, `this.parseManifest`.

Explicit throw targets: `ManifestRetryStoppedError`, `error64`.

SHA-256 of the source span: `49358a9d7000f72fa245389c7e4d7744c5818069d6be6b53bc9119c1e051c737`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
