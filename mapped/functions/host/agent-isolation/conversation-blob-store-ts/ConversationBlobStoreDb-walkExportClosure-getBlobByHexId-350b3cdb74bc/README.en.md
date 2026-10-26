# `ConversationBlobStoreDb.walkExportClosure/getBlobByHexId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22457-22457](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22457-L22457) | `ArrowFunctionExpression` | no | `hexId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22457-22457](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22457-L22457) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at state-worker:22457 uses an implicit arrow-function return.

### state-worker:22457

Calls written directly in this body: `rowBlobBytes`, `this.getBlobStmt.get`.

SHA-256 of the source span: `6b6dcb1e275b762e2c72aa90169115523d583852be5403500cf438c86889c00a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
