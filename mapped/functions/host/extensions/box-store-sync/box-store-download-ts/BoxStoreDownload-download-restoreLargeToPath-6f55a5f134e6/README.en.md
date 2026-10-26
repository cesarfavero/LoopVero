# `BoxStoreDownload.download/restoreLargeToPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477971-477989](../../../../../../../reference/runtime/host-main.cjs#L477971-L477989) | `ArrowFunctionExpression` | yes | `group, relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477971-477989](../../../../../../../reference/runtime/host-main.cjs#L477971-L477989) | 1 | 0 | 3 | 3 | 0 | 1 |

### host:477971

Calls written directly in this body: `copyInFailureOf`, `destinationPaths.get`, `errorMessage`, `openRestoreParent`, `parent.handle.close`, `recordFailure`, `restoreLargeInto`.

Assignment or increment targets: `parent`.

SHA-256 of the source span: `7e1685afca4a6faac7a198ab8e0c99e86e70a72c055864b3d0a3b53e4945e73b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
