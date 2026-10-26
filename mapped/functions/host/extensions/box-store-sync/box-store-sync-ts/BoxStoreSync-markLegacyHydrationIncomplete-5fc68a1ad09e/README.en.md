# `BoxStoreSync.markLegacyHydrationIncomplete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481404-481406](../../../../../../../reference/runtime/host-main.cjs#L481404-L481406) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481404-481406](../../../../../../../reference/runtime/host-main.cjs#L481404-L481406) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:481404

Calls written directly in this body: `this.manifestStore.markLegacyHydrationIncomplete`.

SHA-256 of the source span: `5f67b8f7d8f0d55008b5afc4343f4a97f80407cb6e0804dcd2de10edb24c817a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
