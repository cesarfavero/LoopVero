# `StoreDbSnapshotUpload.elapsedDurationMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-snapshot-upload.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-snapshot-upload-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480504-480506](../../../../../../../reference/runtime/host-main.cjs#L480504-L480506) | `method` | no | `startedAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480504-480506](../../../../../../../reference/runtime/host-main.cjs#L480504-L480506) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:480504

Calls written directly in this body: `Math.max`, `this.now`.

SHA-256 of the source span: `8a1f6c890e13ddbb6cc1656a6076e8aa08f627ca49b91342faccf6ee5b7d8ad1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
