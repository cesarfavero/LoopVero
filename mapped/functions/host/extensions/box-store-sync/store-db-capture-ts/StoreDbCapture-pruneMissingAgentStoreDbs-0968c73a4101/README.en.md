# `StoreDbCapture.pruneMissingAgentStoreDbs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/store-db-capture.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/store-db-capture-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480908-480959](../../../../../../../reference/runtime/host-main.cjs#L480908-L480959) | `method` | yes | `storeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480908-480959](../../../../../../../reference/runtime/host-main.cjs#L480908-L480959) | 8 | 1 | 2 | 3 | 0 | 1 |

### host:480908

Calls written directly in this body: `.map`, `AGENT_STORE_DB_BASENAMES.find`, `AGENT_STORE_DB_BASENAMES.some`, `entries.filter`, `errorLogTag`, `existing.has`, `isMissingPathError`, `manifest.keys`, `new Set`, `relPath.lastIndexOf`, `relPath.slice`, `relPath.startsWith`, `reportBoxStoreDiagnostic`, `rest.includes`, `rest.split`, `this.deps.categories.find`, `this.log`, `this.manifestStore.deleteManifestEntry`, `this.manifestStore.loadManifest`, `this.storeDbCaptures.delete`, `this.transfer.localStat.delete`.

Assignment or increment targets: `existing`, `removed`.

SHA-256 of the source span: `3c9423eeb6bd64fd63519ce7c4c5f1a61b666b904c2ea5eb7ba52ac8d0ac7c26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
