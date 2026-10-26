# `BoxStoreSync.readManifestStrictDetailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481401-481403](../../../../../../../reference/runtime/host-main.cjs#L481401-L481403) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481401-481403](../../../../../../../reference/runtime/host-main.cjs#L481401-L481403) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:481401

Calls written directly in this body: `this.manifestStore.readManifestStrictDetailed`.

SHA-256 of the source span: `f3cc85af005a518435d84b107ee2c038a70fdf2edbe3b463fae52ab6a4a17ff3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
