# `SandBoxStoreServiceObjectStore.putFromFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475013-475048](../../../../../../../reference/runtime/host-main.cjs#L475013-L475048) | `method` | yes | `key, srcPath, sha, size` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475013-475048](../../../../../../../reference/runtime/host-main.cjs#L475013-L475048) | 7 | 0 | 5 | 2 | 2 | 0 |

### host:475013

Calls written directly in this body: `BigInt`, `String`, `assertWorkingStateContentAddressedKeyMatchesSha`, `new SandBoxStoreSyncError`, `streamPutFromFile`, `this.planMultipartParts`, `this.uploadMultipart`, `this.writePresignCoalescer`.

Assignment or increment targets: `status`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `f60bae1a75be4138faf3fa4ef6dab96c561bdc2ed5bc5be4706cf696477a4183`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
