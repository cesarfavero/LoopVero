# `handSymlinkTo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478309-478319](../../../../../../../reference/runtime/host-main.cjs#L478309-L478319) | `FunctionDeclaration` | yes | `path33, uid, gid` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478309-478319](../../../../../../../reference/runtime/host-main.cjs#L478309-L478319) | 1 | 0 | 4 | 0 | 0 | 0 |

### host:478309

Calls written directly in this body: `handle.close`, `handle.fd.toString`, `handle.stat`, `info2.isSymbolicLink`, `mayHandOverTo`.

SHA-256 of the source span: `9ae4eb27fda83da2c96aa031be62f9dc805db32b552dd6365925d54eac1db421`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
