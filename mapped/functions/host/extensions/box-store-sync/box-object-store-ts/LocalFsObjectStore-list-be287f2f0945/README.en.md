# `LocalFsObjectStore.list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475357-475361](../../../../../../../reference/runtime/host-main.cjs#L475357-L475361) | `method` | yes | `prefix` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475357-475361](../../../../../../../reference/runtime/host-main.cjs#L475357-L475361) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:475357

Calls written directly in this body: `.filter`, `.sort`, `found.map`, `walkFiles`.

SHA-256 of the source span: `37c0d596a3958c1b868df0727bb58abe7c0325874f7fca8dcf260fc72ec8d954`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
