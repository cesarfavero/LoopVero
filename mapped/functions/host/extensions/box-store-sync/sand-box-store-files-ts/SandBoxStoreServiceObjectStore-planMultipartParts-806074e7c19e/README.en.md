# `SandBoxStoreServiceObjectStore.planMultipartParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475049-475061](../../../../../../../reference/runtime/host-main.cjs#L475049-L475061) | `method` | yes | `key, srcPath, sha, size` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475049-475061](../../../../../../../reference/runtime/host-main.cjs#L475049-L475061) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:475049

Calls written directly in this body: `new SandBoxStoreSyncError`, `plan.parts.map`, `planSandBoxStoreMultipartParts`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `abd312b3f3926cb29c06918da0dc2b870115e7ae7eb013b6d6759867bd2b740a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
