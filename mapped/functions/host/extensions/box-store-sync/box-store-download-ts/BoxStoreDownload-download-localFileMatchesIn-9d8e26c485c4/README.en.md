# `BoxStoreDownload.download/localFileMatchesIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478115-478124](../../../../../../../reference/runtime/host-main.cjs#L478115-L478124) | `ArrowFunctionExpression` | yes | `parent, name18, group` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478115-478124](../../../../../../../reference/runtime/host-main.cjs#L478115-L478124) | 1 | 0 | 2 | 3 | 0 | 1 |

### host:478115

Calls written directly in this body: `entryOf`, `local.isFile`, `reportLocalCompareFailure`, `sha256File`.

SHA-256 of the source span: `0a155ebda508f4d03b0c72b7bc1fb2c98c981b9e4ff1d47122a9b5decc3ec23b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
