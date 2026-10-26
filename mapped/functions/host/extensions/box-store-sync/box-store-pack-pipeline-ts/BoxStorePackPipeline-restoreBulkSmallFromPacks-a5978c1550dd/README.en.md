# `BoxStorePackPipeline.restoreBulkSmallFromPacks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479200-479326](../../../../../../../reference/runtime/host-main.cjs#L479200-L479326) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479200-479326](../../../../../../../reference/runtime/host-main.cjs#L479200-L479326) | 3 | 0 | 2 | 1 | 0 | 1 |

### host:479200

Calls written directly in this body: `.toString`, `Buffer.from`, `errorMessage`, `forEachBounded`, `new ClaimSet`, `new Set`, `parsePackIndex`, `restoredByPack.snapshot`, `store.get`, `this.log`.

Assignment or increment targets: `packIndex`.

SHA-256 of the source span: `2b3d23b2033280b99a8331f5e62624305675d09dacc2334fb592bf01583801eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
