# `sha256File`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478350-478365](../../../../../../../reference/runtime/host-main.cjs#L478350-L478365) | `FunctionDeclaration` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478350-478365](../../../../../../../reference/runtime/host-main.cjs#L478350-L478365) | 1 | 0 | 4 | 1 | 1 | 0 |

### host:478350

Calls written directly in this body: `handle.close`, `handle.createReadStream`, `handle.stat`, `hash2.digest`, `info2.isFile`, `new SandBoxStoreSyncError`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `dcbae8fbd35d25b231511e26412e6fcb7e28c2c9b9445d53f2fc61d96d4330d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
