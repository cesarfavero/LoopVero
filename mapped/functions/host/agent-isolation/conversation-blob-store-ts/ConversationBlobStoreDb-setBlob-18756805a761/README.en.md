# `ConversationBlobStoreDb.setBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22493-22504](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22493-L22504) | `method` | no | `blobId, blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22493-22504](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22493-L22504) | 2 | 1 | 0 | 1 | 0 | 0 |

### state-worker:22493

Calls written directly in this body: `.next`, `Date.now`, `this.recentWriteMsByHexId.delete`, `this.recentWriteMsByHexId.keys`, `this.recentWriteMsByHexId.set`, `this.setBlobStmt.run`, `toHex2`.

SHA-256 of the source span: `d7e053587e74cd30ab7273fc1b99d57fd0b8d5a90b017cd0beb039bdcf6fc01b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
