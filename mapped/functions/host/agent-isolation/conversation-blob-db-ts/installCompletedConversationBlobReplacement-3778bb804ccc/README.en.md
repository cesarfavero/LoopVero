# `installCompletedConversationBlobReplacement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:1137-1190](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1137-L1190) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1137-1190](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1137-L1190) | 8 | 0 | 0 | 5 | 4 | 2 |

### state-worker:1137

Calls written directly in this body: `getHealth`, `getHealthOnDisk`, `installed.close`, `isSqliteCorruptError`, `new ConversationBlobRecoveryError`, `openConfiguredConversationBlobDb`, `options.recovery.removeSqliteDb`, `readConversationBlobMigrationState`, `removeSandDataFileSync`, `removeSqliteSidecars`, `replacement.close`, `replacement.exec`.

Assignment or increment targets: `replacement`.

Explicit throw targets: `ConversationBlobRecoveryError`, `error`.

SHA-256 of the source span: `7f920386f2bf08de657169a45fb535e2809970dcffffad09086847db08c96615`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
