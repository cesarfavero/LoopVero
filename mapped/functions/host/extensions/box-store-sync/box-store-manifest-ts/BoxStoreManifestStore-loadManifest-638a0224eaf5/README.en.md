# `BoxStoreManifestStore.loadManifest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477166-477176](../../../../../../../reference/runtime/host-main.cjs#L477166-L477176) | `method` | no | `storeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477166-477176](../../../../../../../reference/runtime/host-main.cjs#L477166-L477176) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:477166

Calls written directly in this body: `Promise.reject`, `Promise.resolve`, `Promise.withResolvers`, `this.manifestReads.run`.

Assignment or increment targets: `load2`, `this.manifestLoad`.

SHA-256 of the source span: `8d818051f4e4444fb53bcc9f9a82d4fc8aece567455dfb31190ef521040e1fb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
