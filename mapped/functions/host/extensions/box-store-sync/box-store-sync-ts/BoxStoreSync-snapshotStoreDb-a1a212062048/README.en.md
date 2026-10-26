# `BoxStoreSync.snapshotStoreDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481374-481394](../../../../../../../reference/runtime/host-main.cjs#L481374-L481394) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481374-481394](../../../../../../../reference/runtime/host-main.cjs#L481374-L481394) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:481374

Calls written directly in this body: `this.elapsedDurationMs`, `this.now`, `this.reportStoreDbCapture`, `this.storeDbCapture.runAgentStoreDbSnapshot`.

SHA-256 of the source span: `cb6236fb197dfd0dccb544b513c41446cae95dd957ce4f0043eb4292b0e0fe5b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
