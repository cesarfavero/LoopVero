# `BoxStoreDownload.download/restoreLargeInto`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477990-478040](../../../../../../../reference/runtime/host-main.cjs#L477990-L478040) | `ArrowFunctionExpression` | yes | `parent, group, relPath, destPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477990-478040](../../../../../../../reference/runtime/host-main.cjs#L477990-L478040) | 3 | 0 | 9 | 7 | 0 | 3 |

### host:477990

Calls written directly in this body: `boxStoreRestoreTempName`, `copyInFailureOf`, `entryOf`, `errorMessage`, `installVerifiedTemp`, `recordFailure`, `reportProgress`, `sha256File`, `store.getToFile`, `this.discardTemp`, `this.hasDiskSpaceForLargeObject`.

Assignment or increment targets: `actualSha`, `bytes`, `files`, `verified`, `written`.

SHA-256 of the source span: `d25b4469dfe84a3e699da81586095266c666b57d14c33fc0135f974941f24f0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
