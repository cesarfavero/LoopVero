# `BoxStoreSync.markLegacyHydrationCompleteForHandoff`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481407-481409](../../../../../../../reference/runtime/host-main.cjs#L481407-L481409) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481407-481409](../../../../../../../reference/runtime/host-main.cjs#L481407-L481409) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:481407

Calls written directly in this body: `this.manifestStore.markLegacyHydrationCompleteForHandoff`.

SHA-256 of the source span: `2ff5377a4f72b19ee3c9a6affcd555e4ff4341d5ad4b68fb295338d224a19204`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
