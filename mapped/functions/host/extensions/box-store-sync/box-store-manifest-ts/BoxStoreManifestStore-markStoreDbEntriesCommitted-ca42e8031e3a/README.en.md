# `BoxStoreManifestStore.markStoreDbEntriesCommitted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477148-477155](../../../../../../../reference/runtime/host-main.cjs#L477148-L477155) | `method` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477148-477155](../../../../../../../reference/runtime/host-main.cjs#L477148-L477155) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:477148

Calls written directly in this body: `boxStoreManifestEntriesEqual`, `this.uncommittedStoreDbEntries.delete`.

SHA-256 of the source span: `525fa04ba2280d4aa07feff763791caf355e0e3a556ec561ff2686115350510b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
