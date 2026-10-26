# `SandBoxStoreServiceObjectStore.get`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474841-474845](../../../../../../../reference/runtime/host-main.cjs#L474841-L474845) | `method` | yes | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474841-474845](../../../../../../../reference/runtime/host-main.cjs#L474841-L474845) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:474841

Calls written directly in this body: `this.getRaw`, `unwrapSandBoxManifestEnvelope`.

SHA-256 of the source span: `c0a56b9b2e25def960c78f36080fc00baf5f31c9f259eb76e0a15a4a93524645`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
