# `ConversationBlobStoreDb.collectGarbage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22555-22642](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22555-L22642) | `method` | no | `{     retainedRootIdHex,     pendingWriteRetentionMs   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22555-22642](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22555-L22642) | 10 | 2 | 0 | 5 | 1 | 2 |

### state-worker:22555

Calls written directly in this body: `Date.now`, `collectReachableBlobHexIds`, `deletableHexIds.push`, `deleteBlobStmt.run`, `liveBlobTypeNameOf`, `this.db.exec`, `this.db.prepare`, `this.getBlobStmt.get`, `this.recentWriteMsByHexId.get`, `this.scanBlobIndexStmt.iterate`, `walk.blobTypeByHexId.get`.

Assignment or increment targets: `deletedBytes`, `inTransaction`, `liveBytes`, `liveBytesByType.pending`, `liveBytesByType[computed]`, `liveRows`, `retainedPendingRows`, `walk`.

Explicit throw targets: `error`.

SHA-256 of the source span: `d58d974cafd0a89f26ae727fdc5139841ddee92cc5fe18e6cb6c980c6aecb1e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
