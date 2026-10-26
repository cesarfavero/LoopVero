# `BoxStoreManifestStore.prepareCanonicalManifestReset`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477433-477447](../../../../../../../reference/runtime/host-main.cjs#L477433-L477447) | `method` | yes | `storeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477433-477447](../../../../../../../reference/runtime/host-main.cjs#L477433-L477447) | 4 | 0 | 1 | 1 | 2 | 1 |

### host:477433

Calls written directly in this body: `.get`, `this.objectStore`, `this.parseManifest`.

Assignment or increment targets: `this.manifestWriteBlock`.

Explicit throw targets: `error64`, `this.manifestWriteBlock`.

SHA-256 of the source span: `6e755f4bdb70184c52205c953f8ff3d27bef5a5d3ec88915b9a3eed6ff5bb8b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
