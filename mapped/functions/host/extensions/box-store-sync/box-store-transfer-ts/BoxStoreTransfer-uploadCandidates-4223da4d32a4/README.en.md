# `BoxStoreTransfer.uploadCandidates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479807-479861](../../../../../../../reference/runtime/host-main.cjs#L479807-L479861) | `method` | yes | `storeId, manifest, candidates, summary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479807-479861](../../../../../../../reference/runtime/host-main.cjs#L479807-L479861) | 1 | 1 | 2 | 0 | 0 | 0 |

### host:479807

Calls written directly in this body: `.push`, `forEachBounded`.

SHA-256 of the source span: `4185165131de0b8ecae18386df9b442840abf45dff5635ad935853da33cbb119`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
