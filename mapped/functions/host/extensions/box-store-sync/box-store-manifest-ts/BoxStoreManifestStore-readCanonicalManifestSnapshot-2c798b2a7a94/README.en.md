# `BoxStoreManifestStore.readCanonicalManifestSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477420-477426](../../../../../../../reference/runtime/host-main.cjs#L477420-L477426) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477420-477426](../../../../../../../reference/runtime/host-main.cjs#L477420-L477426) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:477420

Calls written directly in this body: `store.get`, `this.deps.resolveStoreId`, `this.objectStore`, `this.parseManifest`.

SHA-256 of the source span: `5bd3212db1f65004bba84c48a71c6f3e1486751ef25645cc0cba3893ec4922f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
