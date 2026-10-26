# `ConversationBlobStoreDb.walkExportClosure/onBlobReference`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22458-22465](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22458-L22465) | `ArrowFunctionExpression` | no | `hexId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22458-22465](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22458-L22465) | 1 | 0 | 0 | 0 | 1 | 0 |

### state-worker:22458

Calls written directly in this body: `new ExportClosureLimitExceededError`, `reportProgress`, `rowLength`, `this.blobLengthStmt.get`.

Assignment or increment targets: `closureBlobCount`, `closureByteSize`.

Explicit throw targets: `ExportClosureLimitExceededError`.

SHA-256 of the source span: `8594576603d211ae8a206f93c724bea772d9b58fcdaa17257d09444bb1a9fa2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
