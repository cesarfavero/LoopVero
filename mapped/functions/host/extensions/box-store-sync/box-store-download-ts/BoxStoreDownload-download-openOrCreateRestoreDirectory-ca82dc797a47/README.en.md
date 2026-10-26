# `BoxStoreDownload.download/openOrCreateRestoreDirectory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477666-477694](../../../../../../../reference/runtime/host-main.cjs#L477666-L477694) | `ArrowFunctionExpression` | yes | `parent, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477666-477694](../../../../../../../reference/runtime/host-main.cjs#L477666-L477694) | 4 | 1 | 3 | 1 | 4 | 3 |

### host:477666

Calls written directly in this body: `entryOf`, `findSystemErrno`, `new SandBoxStoreSyncError`.

Assignment or increment targets: `attempt`, `created`.

Explicit throw targets: `SandBoxStoreSyncError`, `error64`.

SHA-256 of the source span: `9df0cbd13a99405e2e8e3158248b73fc257b5c1ddd51d2892e1f888015e8b09e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
