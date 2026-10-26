# `BoxStoreDownload.download/openRestoreParent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477695-477715](../../../../../../../reference/runtime/host-main.cjs#L477695-L477715) | `ArrowFunctionExpression` | yes | `dir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477695-477715](../../../../../../../reference/runtime/host-main.cjs#L477695-L477715) | 3 | 1 | 5 | 1 | 2 | 1 |

### host:477695

Calls written directly in this body: `directory.handle.close`, `handCreatedDirectory`, `new SandBoxStoreSyncError`, `openOrCreateRestoreDirectory`, `openRestoreRoot`, `relDir.split`, `relDir.startsWith`.

Assignment or increment targets: `directory`.

Explicit throw targets: `SandBoxStoreSyncError`, `error64`.

SHA-256 of the source span: `103cf00eb42e5249522237ea7dae71de168c78dbd32a6ca235517119951758cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
