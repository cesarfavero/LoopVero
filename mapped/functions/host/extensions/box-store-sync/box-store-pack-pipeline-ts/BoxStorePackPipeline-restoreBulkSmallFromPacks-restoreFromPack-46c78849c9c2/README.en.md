# `BoxStorePackPipeline.restoreBulkSmallFromPacks/restoreFromPack`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479219-479256](../../../../../../../reference/runtime/host-main.cjs#L479219-L479256) | `ArrowFunctionExpression` | yes | `pack` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479219-479256](../../../../../../../reference/runtime/host-main.cjs#L479219-L479256) | 6 | 2 | 5 | 2 | 0 | 0 |

### host:479219

Calls written directly in this body: `.toString`, `bulkSmall.get`, `ensureDir`, `entryOf`, `localFileMatches`, `restorePackThrough`, `restoredByPack.has`, `this.openSweptPackTmpDir`, `tmpDir.handle.close`, `usable.push`.

Assignment or increment targets: `pending`, `usableClen`, `usableSize`.

SHA-256 of the source span: `5433511ff0e83581f62852c45b2b2a8866d8f28811c343cc8392e42dc5f835ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
