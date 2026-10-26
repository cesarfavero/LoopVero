# `StoreDbSnapshotUpload.runVacuumOffThread`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-snapshot-upload.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-snapshot-upload-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480597-480622](../../../../../../../reference/runtime/host-main.cjs#L480597-L480622) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480597-480622](../../../../../../../reference/runtime/host-main.cjs#L480597-L480622) | 4 | 0 | 2 | 1 | 1 | 1 |

### host:480597

Calls written directly in this body: `defaultVacuumWorkerEntryPath`, `errorMessage`, `runVacuumInWorker`, `sqliteVacuumInto`, `this.discardSnapshotTemp`, `this.log`.

Assignment or increment targets: `this.vacuumWorkerAvailable`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `7bac18deb6d848ea0be0e9f1c7db74ffc4965255bb7c52ccf8e4d728770993b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
