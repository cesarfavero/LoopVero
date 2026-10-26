# `BoxStoreTransfer.syncCategory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479641-479806](../../../../../../../reference/runtime/host-main.cjs#L479641-L479806) | `method` | yes | `storeId, category` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479641-479806](../../../../../../../reference/runtime/host-main.cjs#L479641-L479806) | 25 | 5 | 6 | 1 | 0 | 3 |

### host:479641

Calls written directly in this body: `.catch`, `.filter`, `.join`, `.map`, `.split`, `absPath.endsWith`, `absPath.startsWith`, `candidates.push`, `category.ignore`, `category.stage`, `discards.some`, `errorMessage`, `excludes.push`, `excludes.some`, `fileStat.isFile`, `fileStat.isSymbolicLink`, `globToRegExp`, `ignore4.ignores`, `isPermissionDenied`, `manifest.keys`, `new Set`, `relPath.includes`, `relPath.startsWith`, `seen.add`, `seen.has`, `staged.cleanup`, `tallyMetadataFailure`, `tallySkippedInaccessible`, `this.fs.lstat`, `this.localStat.delete`, `this.log`, `this.manifestStore.deleteManifestEntry`, `this.manifestStore.loadManifest`, `this.skipInaccessibleEnabled`, `this.uploadCandidates`, `walkNodes`.

Assignment or increment targets: `fileStat`, `staged`, `summary.excludedBytes`, `summary.excludedFiles`, `summary.failures`, `summary.removed`, `walkComplete`.

SHA-256 of the source span: `0058b35734bfc57a2db260f2e35ff2c35b49e55910805b8486a4ba5377288476`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
