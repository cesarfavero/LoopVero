# `BoxStoreManifestStore.markLegacyHydrationIncomplete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477488-477496](../../../../../../../reference/runtime/host-main.cjs#L477488-L477496) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477488-477496](../../../../../../../reference/runtime/host-main.cjs#L477488-L477496) | 1 | 0 | 4 | 0 | 0 | 0 |

### host:477488

Calls written directly in this body: `removeHydrationHandoffMarker`, `this.deps.resolveStoreId`, `this.loadManifest`, `this.saveManifest`.

Assignment or increment targets: `this.hydrationManifestReadBlocked`.

SHA-256 of the source span: `c3a789c0cb982e0e8722a1c1658a7c949e0db63d1fe2a91c4132c0739f737a0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
