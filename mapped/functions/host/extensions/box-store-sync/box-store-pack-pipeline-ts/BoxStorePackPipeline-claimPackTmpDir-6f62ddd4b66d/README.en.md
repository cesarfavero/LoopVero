# `BoxStorePackPipeline.claimPackTmpDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479010-479024](../../../../../../../reference/runtime/host-main.cjs#L479010-L479024) | `method` | yes | `directory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479010-479024](../../../../../../../reference/runtime/host-main.cjs#L479010-L479024) | 5 | 0 | 2 | 2 | 2 | 0 |

### host:479010

Calls written directly in this body: `directory.handle.chmod`, `directory.handle.stat`, `new SandBoxStoreSyncError`, `process.geteuid`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `a78719b4a52334876e5748306343b58cee784b84fc26099c41515fc1d5da0031`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
