# `SandBoxStoreServiceObjectStore.put`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474877-474887](../../../../../../../reference/runtime/host-main.cjs#L474877-L474887) | `method` | yes | `key, bytes, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474877-474887](../../../../../../../reference/runtime/host-main.cjs#L474877-L474887) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:474877

Calls written directly in this body: `this.commitManifest`, `this.putContentAddressed`, `this.putMutable`.

SHA-256 of the source span: `578240326c35e8431760d332c0d7df40c92157ce1d0dfeab4db2c9a0164e92f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
