# `openConversationBlobDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:1397-1461](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1397-L1461) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1397-1461](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1397-L1461) | 8 | 0 | 0 | 7 | 4 | 6 |

### state-worker:1397

Calls written directly in this body: `db.close`, `ensureSandDataDirSync`, `findPendingRecovery`, `finishConversationBlobRecovery`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new ConversationBlobRecoveryError`, `openConfiguredConversationBlobDb`, `recoverConversationBlobDb`, `removeSqliteSidecars`, `runQuickCheck`.

Assignment or increment targets: `db`, `health`.

Explicit throw targets: `ConversationBlobRecoveryError`, `error`, `retryError`.

SHA-256 of the source span: `f4d888e9f8fc3928a8350296ca122bd840c7c8e0ca0dd95677da71160a9c7f1d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
