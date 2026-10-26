# `BoxStoreSync.forgetAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481471-481503](../../../../../../../reference/runtime/host-main.cjs#L481471-L481503) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481471-481503](../../../../../../../reference/runtime/host-main.cjs#L481471-L481503) | 4 | 1 | 4 | 3 | 0 | 1 |

### host:481471

Calls written directly in this body: `errorMessage`, `manifest.keys`, `pending.dispose`, `relPath.includes`, `relPath.startsWith`, `this.deps.resolveStoreId`, `this.ensureWriterLock`, `this.log`, `this.manifestStore.deleteManifestEntry`, `this.manifestStore.loadManifest`, `this.manifestStore.saveManifest`, `this.pendingStoreDb.delete`, `this.pendingStoreDb.get`, `this.storeDbCapture.storeDbCaptures.delete`, `this.transfer.localStat.delete`.

Assignment or increment targets: `removed`.

SHA-256 of the source span: `9932b0bc78e5d0cbb12db5dd9c7493811ad383cfff6a611f0f8a7c70766ab128`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
