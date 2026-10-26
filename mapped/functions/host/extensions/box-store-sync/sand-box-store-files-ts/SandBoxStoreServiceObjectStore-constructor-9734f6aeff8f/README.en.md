# `SandBoxStoreServiceObjectStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474794-474805](../../../../../../../reference/runtime/host-main.cjs#L474794-L474805) | `method` | no | `client, multipartThresholdBytes, multipartPartSizeBytes, manifestCommit = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474794-474805](../../../../../../../reference/runtime/host-main.cjs#L474794-L474805) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:474794

Calls written directly in this body: `createRequestCoalescer`.

Assignment or increment targets: `this.client`, `this.manifestCommit`, `this.multipartPartSizeBytes`, `this.multipartThresholdBytes`, `this.writePresignCoalescer`.

SHA-256 of the source span: `f72b20ed810faeefa88a44319fa839da6350cf3db5f786e12ef9598f6ebe2071`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
