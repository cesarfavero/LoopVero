# `BoxStoreDownload.download/recordRestoredPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478228-478233](../../../../../../../reference/runtime/host-main.cjs#L478228-L478233) | `ArrowFunctionExpression` | no | `byteSize` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478228-478233](../../../../../../../reference/runtime/host-main.cjs#L478228-L478233) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:478228

Calls written directly in this body: `reportProgress`.

Assignment or increment targets: `bytes`, `files`, `verified`.

SHA-256 of the source span: `e02bfb031ec7fca6cb4fb64e35be9e418c8013283e22b0e6525b0512bea4894f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
