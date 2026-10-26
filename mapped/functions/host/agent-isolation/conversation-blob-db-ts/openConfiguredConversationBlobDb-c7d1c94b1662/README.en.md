# `openConfiguredConversationBlobDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:1001-1016](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1001-L1016) | `FunctionDeclaration` | no | `dbPath, busyTimeoutMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1001-1016](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1001-L1016) | 0 | 0 | 0 | 1 | 1 | 2 |

### state-worker:1001

Calls written directly in this body: `applyStorePragmas`, `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `new import_node_sqlite3.DatabaseSync`, `refuseSandDataDatabaseLinksSync`.

Explicit throw targets: `error`.

SHA-256 of the source span: `3f69317dc573debc76c46b8cc7a2f8778d919f6294466a62cfcc75d0e7a038b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
