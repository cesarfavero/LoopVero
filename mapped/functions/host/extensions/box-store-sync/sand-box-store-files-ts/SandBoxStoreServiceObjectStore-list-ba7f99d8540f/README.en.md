# `SandBoxStoreServiceObjectStore.list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475167-475185](../../../../../../../reference/runtime/host-main.cjs#L475167-L475185) | `method` | yes | `prefix, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475167-475185](../../../../../../../reference/runtime/host-main.cjs#L475167-L475185) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:475167

Calls written directly in this body: `keys.push`, `opts.onPage`, `page.entries.map`, `this.client.listSandBoxStoreObjects`.

Assignment or increment targets: `cursor`.

SHA-256 of the source span: `e09b7a315f8f68e303b2d9a050a9af3ca516d49494a82d2d1714a1db46b81ced`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
