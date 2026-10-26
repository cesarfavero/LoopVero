# `BoxStoreManifestStore.readManifestStrictDetailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-manifest.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477451-477487](../../../../../../../reference/runtime/host-main.cjs#L477451-L477487) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477451-477487](../../../../../../../reference/runtime/host-main.cjs#L477451-L477487) | 4 | 1 | 2 | 2 | 2 | 0 |

### host:477451

Calls written directly in this body: `.get`, `Object.entries`, `map4.set`, `new Map`, `new SandBoxStoreSyncError`, `this.configuredManifestVersion`, `this.deps.resolveStoreId`, `this.initializeManifestRevision`, `this.objectStore`, `this.parseManifest`, `this.uncommittedStoreDbEntries.clear`.

Assignment or increment targets: `this.fullyHydrated`, `this.hydrationManifestReadBlocked`, `this.manifest`.

Explicit throw targets: `SandBoxStoreSyncError`, `this.manifestWriteBlock`.

SHA-256 of the source span: `d6bea7242d609443bf69f89913dcc2c96c4c490553e0599a5be2591377ef4549`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
