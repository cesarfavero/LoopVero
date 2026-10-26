# `BoxStoreDownload.download/localFileMatches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478125-478134](../../../../../../../reference/runtime/host-main.cjs#L478125-L478134) | `ArrowFunctionExpression` | yes | `destPath, group` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478125-478134](../../../../../../../reference/runtime/host-main.cjs#L478125-L478134) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:478125

Calls written directly in this body: `reportLocalCompareFailure`, `withRestoreParent`.

SHA-256 of the source span: `953f2a94542b5c574ef3455faba5bbcf51a941cf7a8744f5737e78bc25c769cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
