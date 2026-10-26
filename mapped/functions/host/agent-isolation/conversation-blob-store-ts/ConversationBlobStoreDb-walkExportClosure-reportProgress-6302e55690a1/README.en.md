# `ConversationBlobStoreDb.walkExportClosure/reportProgress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22438-22445](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22438-L22445) | `ArrowFunctionExpression` | no | `force = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22438-22445](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22438-L22445) | 1 | 0 | 0 | 1 | 0 | 0 |

### state-worker:22438

Calls written directly in this body: `onProgress`.

Assignment or increment targets: `reportedBlobCount`, `reportedByteSize`.

SHA-256 of the source span: `369f09dca948c558b8efe8cc6a374e898656817fa374670392e48fce481785a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
