# `getHealthOnDisk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-isolation/conversation-blob-db.ts` · [Module README](../../../../../modules/host/agent-isolation/conversation-blob-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:1028-1056](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1028-L1056) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:1028-1056](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L1028-L1056) | 2 | 1 | 0 | 3 | 0 | 3 |

### state-worker:1028

Calls written directly in this body: `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new import_node_sqlite3.DatabaseSync`, `refuseSandDataDatabaseLinksSync`, `removeSqliteSidecars`, `runQuickCheck`.

Assignment or increment targets: `attempt`, `db`.

SHA-256 of the source span: `b85ef35e1d04cf75ac7a35425cb8c3fb9f3e2b29397b7f1b187380ba63122155`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
