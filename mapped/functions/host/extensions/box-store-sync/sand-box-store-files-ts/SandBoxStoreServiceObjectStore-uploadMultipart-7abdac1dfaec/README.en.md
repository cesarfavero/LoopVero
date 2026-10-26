# `SandBoxStoreServiceObjectStore.uploadMultipart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475062-475132](../../../../../../../reference/runtime/host-main.cjs#L475062-L475132) | `method` | yes | `key, srcPath, multipart` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475062-475132](../../../../../../../reference/runtime/host-main.cjs#L475062-L475132) | 10 | 2 | 4 | 2 | 5 | 2 |

### host:475062

Calls written directly in this body: `.sort`, `String`, `new SandBoxStoreSyncError`, `putPart`, `this.bestEffortAbortMultipart`, `this.client.completeSandBoxStoreMultipartWrites`, `uploaded.push`.

Assignment or increment targets: `attempt`, `lastFailure`, `result`.

Explicit throw targets: `SandBoxStoreSyncError`, `error64`.

SHA-256 of the source span: `7d17a624cf3ba151bfc5a602b51f794103c5df8fd1fe8357a0a352401bd8c84e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
