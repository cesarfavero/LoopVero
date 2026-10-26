# `ConversationBlobStoreDb.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22380-22399](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22380-L22399) | `method` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22380-22399](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22380-L22399) | 1 | 0 | 0 | 0 | 0 | 0 |

### state-worker:22380

Calls written directly in this body: `openConversationBlobDb`, `this.adoptLegacyBlobs`, `this.db.prepare`.

Assignment or increment targets: `this.blobLengthStmt`, `this.clearBlobsStmt`, `this.db`, `this.getBlobStmt`, `this.log`, `this.scanBlobIndexStmt`, `this.setBlobStmt`.

SHA-256 of the source span: `243082e2b37cc54f636964c45fbafe26f9b573b8c9ba280612fe951c115b3e25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
