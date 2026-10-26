# `sqliteVacuumInto`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sqlite-snapshot.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sqlite-snapshot-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:480320-480328](../../../../../../../reference/runtime/host-main.cjs#L480320-L480328) | `FunctionDeclaration` | no | `srcPath, destPath, busyTimeoutMs = DB_BUSY_TIMEOUT_MS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480320-480328](../../../../../../../reference/runtime/host-main.cjs#L480320-L480328) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:480320

Calls written directly in this body: `db.close`, `db.exec`, `destPath.replace`, `new import_node_sqlite2.DatabaseSync`.

SHA-256 of the source span: `a16ab8c118e4b463b39b3a03f78b1008f26291ff4b9299163d50aac37b75deb1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
