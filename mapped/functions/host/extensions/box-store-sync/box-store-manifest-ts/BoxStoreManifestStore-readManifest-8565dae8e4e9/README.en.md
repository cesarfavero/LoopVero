# `BoxStoreManifestStore.readManifest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477177-477234](../../../../../../../reference/runtime/host-main.cjs#L477177-L477234) | `method` | yes | `storeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477177-477234](../../../../../../../reference/runtime/host-main.cjs#L477177-L477234) | 8 | 1 | 2 | 1 | 5 | 1 |

### host:477177

Calls written directly in this body: `.filter`, `.get`, `Object.entries`, `Object.fromEntries`, `errorMessage`, `map4.set`, `new Map`, `new SandBoxStoreSyncError`, `removeHydrationHandoffMarker`, `this.configuredManifestVersion`, `this.initializeManifestRevision`, `this.log`, `this.objectStore`, `this.parseManifest`.

Assignment or increment targets: `persisted`, `this.fullyHydrated`, `this.hydrationManifestReadBlocked`, `this.manifest`.

Explicit throw targets: `SandBoxStoreSyncError`, `error64`.

SHA-256 of the source span: `2ffc942bb5c40dd0f2f39ce889053de0d98d48dd1ba13b45b5aadbb0dbf42091`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
