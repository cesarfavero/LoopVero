# `BoxStoreManifestStore.setManifestEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477110-477137](../../../../../../../reference/runtime/host-main.cjs#L477110-L477137) | `method` | no | `manifest, relPath, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477110-477137](../../../../../../../reference/runtime/host-main.cjs#L477110-L477137) | 5 | 2 | 0 | 3 | 0 | 0 |

### host:477110

Calls written directly in this body: `.markChanged`, `boxStoreManifestEntriesEqual`, `counts.get`, `existingPath.startsWith`, `manifest.get`, `manifest.keys`, `manifest.set`, `relPath.indexOf`, `relPath.slice`, `this.adjustAncestorRefCounts`, `this.ancestorRefCounts`, `this.configuredEntry`, `this.deleteManifestEntryWithIndex`, `this.manifestAncestorRefCounts.get`, `this.manifestRevisionState`.

Assignment or increment targets: `removedConflict`, `separatorIndex`.

SHA-256 of the source span: `3a0a89ec3ebea0e2601972a9497f30a3cb3cd5e1114d83266756c3a2fbed7aaa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
