# `ConversationBlobStoreDb.walkExportClosure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22428-22485](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22428-L22485) | `method` | no | `retainedRootIdHex, limits = {}, onProgress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22428-22485](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22428-L22485) | 5 | 0 | 0 | 7 | 0 | 1 |

### state-worker:22428

Calls written directly in this body: `.digest`, `.update`, `collectReachableBlobHexIds`, `errorLogTag`, `new Uint8Array`, `reportProgress`, `rowBlobBytes`, `rowLength`, `this.blobLengthStmt.get`, `this.getBlobStmt.get`, `this.log`, `walk.blobTypeByHexId.keys`.

Assignment or increment targets: `walk`.

SHA-256 of the source span: `392dabd248243ae89656233685cacedea99ba9086660e43741506469c5c96e1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
