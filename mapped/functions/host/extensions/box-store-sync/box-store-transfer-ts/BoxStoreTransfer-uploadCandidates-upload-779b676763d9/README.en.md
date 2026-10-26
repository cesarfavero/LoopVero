# `BoxStoreTransfer.uploadCandidates/upload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479813-479858](../../../../../../../reference/runtime/host-main.cjs#L479813-L479858) | `ArrowFunctionExpression` | yes | `candidate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479813-479858](../../../../../../../reference/runtime/host-main.cjs#L479813-L479858) | 5 | 0 | 3 | 5 | 0 | 1 |

### host:479813

Calls written directly in this body: `fileStat.isFile`, `fileStat.isSymbolicLink`, `isPermissionDenied`, `tallyFileOutcome`, `tallyMetadataFailure`, `tallySkippedInaccessible`, `this.fs.lstat`, `this.manifestFormatLacksSymlinkEntries`, `this.skipInaccessibleEnabled`, `this.syncFile`, `this.syncSymlink`.

Assignment or increment targets: `fileStat`, `summary.filesScanned`.

SHA-256 of the source span: `372cb4d395ec48b142224e6ab793392f18f51d25e076747ea9fea57ad7fee87f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
