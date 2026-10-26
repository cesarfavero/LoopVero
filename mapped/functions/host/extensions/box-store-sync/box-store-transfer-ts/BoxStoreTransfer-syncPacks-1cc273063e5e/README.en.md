# `BoxStoreTransfer.syncPacks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479862-479864](../../../../../../../reference/runtime/host-main.cjs#L479862-L479864) | `method` | yes | `storeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479862-479864](../../../../../../../reference/runtime/host-main.cjs#L479862-L479864) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:479862

Calls written directly in this body: `this.packPipeline.syncPacks`.

SHA-256 of the source span: `ee9f4d718cbc51fef3cc0f04a35a3c8ee49a23bb89c27050634776c00e533248`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
