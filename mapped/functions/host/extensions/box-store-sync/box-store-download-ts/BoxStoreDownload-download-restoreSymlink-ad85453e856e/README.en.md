# `BoxStoreDownload.download/restoreSymlink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477857-477921](../../../../../../../reference/runtime/host-main.cjs#L477857-L477921) | `ArrowFunctionExpression` | yes | `relPath, entry, symlinkOrdinal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477857-477921](../../../../../../../reference/runtime/host-main.cjs#L477857-L477921) | 3 | 0 | 9 | 3 | 1 | 1 |

### host:477857

Calls written directly in this body: `boxStoreRestoreTempName`, `copyInFailureOf`, `destinationPaths.get`, `entryOf`, `errorMessage`, `new SandBoxStoreSyncError`, `parent.handle.close`, `recordFailure`, `replaceDestinationWithTemp`, `reportProgress`, `runSymlinkStep`, `symlinkTargetStaysWithinRoot`.

Assignment or increment targets: `files`, `parent`, `verified`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `07a1fe90d24b5f607682069729d63dc5fc880130553529f27ea5a2fcc81fb84f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
