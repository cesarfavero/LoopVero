# `openConversationBlobRecoveryTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:1093-1136](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1093-L1136) | `FunctionDeclaration` | no | `options, dbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1093-1136](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1093-L1136) | 4 | 1 | 0 | 1 | 3 | 2 |

### state-worker:1093

Calls written directly in this body: `db.close`, `getHealth`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new ConversationBlobRecoveryError`, `open`, `remove`, `removeSqliteSidecars`.

Assignment or increment targets: `attempt`, `db`, `retriedWithoutSidecars`.

Explicit throw targets: `ConversationBlobRecoveryError`, `error`.

SHA-256 of the source span: `62a7c629ac95915cdd40c61aed70f4eae92a93360da8089d0b48533dc6ec3f06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
