# `SandBoxStoreServiceObjectStore.putMutable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474968-475012](../../../../../../../reference/runtime/host-main.cjs#L474968-L475012) | `method` | yes | `key, bytes, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474968-475012](../../../../../../../reference/runtime/host-main.cjs#L474968-L475012) | 5 | 0 | 4 | 0 | 2 | 0 |

### host:474968

Calls written directly in this body: `.trim`, `BigInt`, `etag.replaceAll`, `new BoxStoreCanonicalWriteConflictError`, `new SandBoxStoreSyncError`, `putOnce`, `response.headers.get`, `sha256Hex`, `this.presignWrite`, `this.resolveMutableBaseline`, `this.sessionEtags.delete`, `this.sessionEtags.set`.

Assignment or increment targets: `response`.

Explicit throw targets: `BoxStoreCanonicalWriteConflictError`, `SandBoxStoreSyncError`.

SHA-256 of the source span: `dd2193d353f4ce786a278c99f2bab98952ea19fffc12095984b9d3fe4ca7a0cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
