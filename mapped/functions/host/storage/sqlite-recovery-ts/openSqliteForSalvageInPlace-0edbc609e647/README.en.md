# `openSqliteForSalvageInPlace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717453-717500](../../../../../../reference/runtime/host-main.cjs#L717453-L717500) | `FunctionDeclaration` | no | `options2` |
| [state-worker:861-908](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L861-L908) | `FunctionDeclaration` | no | `options` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717453-717500](../../../../../../reference/runtime/host-main.cjs#L717453-L717500) | 4 | 0 | 0 | 8 | 0 | 3 |
| [state-worker:861-908](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L861-L908) | 4 | 0 | 0 | 8 | 0 | 3 |

### host:717453

Calls written directly in this body: `isRefusedSandDataFile`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new import_node_sqlite4.DatabaseSync`, `open13`, `refuseSandDataDatabaseLinksSync`, `removeSqliteSidecars`, `reportFallback`.

SHA-256 of the source span: `55154303fadc612187acc9e7ceebfa45146ec2ce499b0165a3e312aa719e4641`.

### state-worker:861

Calls written directly in this body: `isRefusedSandDataFile`, `isSqliteCantOpenError`, `isSqliteCorruptError`, `isSqliteIoError`, `new import_node_sqlite2.DatabaseSync`, `open`, `refuseSandDataDatabaseLinksSync`, `removeSqliteSidecars`, `reportFallback`.

SHA-256 of the source span: `556cc3827a361ea396d9485d8594233d96efb8c23cd7f1ba798093c789625524`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
