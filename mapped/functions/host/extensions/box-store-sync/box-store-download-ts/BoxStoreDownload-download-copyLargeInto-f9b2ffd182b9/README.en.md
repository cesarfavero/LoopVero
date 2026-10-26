# `BoxStoreDownload.download/copyLargeInto`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478060-478093](../../../../../../../reference/runtime/host-main.cjs#L478060-L478093) | `ArrowFunctionExpression` | yes | `parent, sourcePath2, group, relPath, destPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478060-478093](../../../../../../../reference/runtime/host-main.cjs#L478060-L478093) | 2 | 0 | 7 | 3 | 0 | 1 |

### host:478060

Calls written directly in this body: `boxStoreRestoreTempName`, `copyFileHashing`, `copyInFailureOf`, `entryOf`, `errorMessage`, `installVerifiedTemp`, `openBelow`, `recordFailure`, `reportProgress`, `segmentsBelow`, `source.handle.close`, `this.discardTemp`, `this.hasDiskSpaceForLargeObject`.

Assignment or increment targets: `bytes`, `copied`, `files`, `verified`.

SHA-256 of the source span: `f886599bef763d2ab3928552dd510a2b9dd6a5727b071348ec29d9aa2317ee63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
