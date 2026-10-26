# `checkpointSandAgentDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/store-db.ts` · [Module README](../../../../../modules/host/storage/store-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478901-478926](../../../../../../reference/runtime/host-main.cjs#L478901-L478926) | `FunctionDeclaration` | no | `dbPath, busyTimeoutMs = DB_BUSY_TIMEOUT_MS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478901-478926](../../../../../../reference/runtime/host-main.cjs#L478901-L478926) | 2 | 0 | 0 | 5 | 0 | 2 |

### host:478901

Calls written directly in this body: `.get`, `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `db.prepare`, `new import_node_sqlite.DatabaseSync`, `refuseSandDataDatabaseLinksSync`, `reportFallback`, `walFramesFullyFolded`.

Assignment or increment targets: `db`, `result`.

SHA-256 of the source span: `39507a6d6ec5e20ac79d0883ea7fb32fece9194116549323a1c33f19749445ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
