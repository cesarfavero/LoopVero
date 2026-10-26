# `BoxStoreManifestStore.reportManifestWriteConflict`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477427-477432](../../../../../../../reference/runtime/host-main.cjs#L477427-L477432) | `method` | no | `info2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477427-477432](../../../../../../../reference/runtime/host-main.cjs#L477427-L477432) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:477427

Calls written directly in this body: `this.deps.onManifestWriteConflict`.

SHA-256 of the source span: `3f0f254df40904a7a0920624861217192a80ce3024304d2047b0b6d4f41e25bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
