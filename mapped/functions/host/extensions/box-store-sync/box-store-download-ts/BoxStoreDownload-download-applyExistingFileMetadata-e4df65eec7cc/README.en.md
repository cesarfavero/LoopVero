# `BoxStoreDownload.download/applyExistingFileMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477820-477824](../../../../../../../reference/runtime/host-main.cjs#L477820-L477824) | `ArrowFunctionExpression` | yes | `destPath, relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477820-477824](../../../../../../../reference/runtime/host-main.cjs#L477820-L477824) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:477820

Calls written directly in this body: `withRestoreParent`.

SHA-256 of the source span: `4bfa356d6774ab205c8564cf993d7237048d02495c6730a011ca6888a341772b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
