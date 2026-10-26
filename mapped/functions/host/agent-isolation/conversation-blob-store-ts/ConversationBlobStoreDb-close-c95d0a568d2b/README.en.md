# `ConversationBlobStoreDb.close`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-store.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:22643-22647](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22643-L22647) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22643-22647](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22643-L22647) | 1 | 0 | 0 | 1 | 0 | 0 |

### state-worker:22643

Calls written directly in this body: `this.db.close`.

Assignment or increment targets: `this.isClosed`.

SHA-256 of the source span: `83fd6bb15eadc1d6dc6c3ac35ad8fbf4d6f61522bb4f9f8369e459746e677294`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
