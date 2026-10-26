# `openSqliteForSalvageInPlace/open`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:864-881](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L864-L881) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:864-881](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L864-L881) | 1 | 0 | 0 | 1 | 1 | 2 |

### state-worker:864

Calls written directly in this body: `.get`, `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `db.prepare`, `new import_node_sqlite2.DatabaseSync`, `refuseSandDataDatabaseLinksSync`.

Explicit throw targets: `error`.

SHA-256 of the source span: `d3aadaad5e504f02afe75aeeeeffa567a4bd1bff032c248f88e3dea442eeece7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
