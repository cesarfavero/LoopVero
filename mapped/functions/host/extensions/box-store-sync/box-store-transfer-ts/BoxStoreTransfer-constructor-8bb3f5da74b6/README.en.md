# `BoxStoreTransfer.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479396-479427](../../../../../../../reference/runtime/host-main.cjs#L479396-L479427) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479396-479427](../../../../../../../reference/runtime/host-main.cjs#L479396-L479427) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:479396

Calls written directly in this body: `new BoxStoreDownload`, `new BoxStorePackPipeline`.

Assignment or increment targets: `this.deps`, `this.downloader`, `this.fs`, `this.largeObjectThreshold`, `this.log`, `this.manifestStore`, `this.maxObjectBytes`, `this.packPipeline`, `this.readFreeDiskBytes`, `this.uploadConcurrency`.

SHA-256 of the source span: `b357aa322da258d6064dc7ee61db61d64296257a0bd126ca1dfbb057ba5ccb0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
