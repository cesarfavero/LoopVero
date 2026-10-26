# `BoxStoreTransfer.download`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479865-479867](../../../../../../../reference/runtime/host-main.cjs#L479865-L479867) | `method` | yes | `targetDir, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479865-479867](../../../../../../../reference/runtime/host-main.cjs#L479865-L479867) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:479865

Calls written directly in this body: `this.downloader.download`.

SHA-256 of the source span: `3b20be631ca5c9fced4c291d94fbb2cbecbcc7660ec0802682e6f13aa092e5f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
