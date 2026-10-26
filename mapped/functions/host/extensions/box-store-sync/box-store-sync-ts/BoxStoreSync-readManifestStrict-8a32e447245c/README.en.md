# `BoxStoreSync.readManifestStrict`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481398-481400](../../../../../../../reference/runtime/host-main.cjs#L481398-L481400) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481398-481400](../../../../../../../reference/runtime/host-main.cjs#L481398-L481400) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:481398

Calls written directly in this body: `this.manifestStore.readManifestStrict`.

SHA-256 of the source span: `6e3325ba133bb7d0e040b727f492de9b65aa6f159c40471e70b0c488d7eacf59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
