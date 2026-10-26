# `openSqliteForSalvageInPlace/open13`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/storage/sqlite-recovery.ts` · [Module README](../../../../../modules/host/storage/sqlite-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717456-717473](../../../../../../reference/runtime/host-main.cjs#L717456-L717473) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717456-717473](../../../../../../reference/runtime/host-main.cjs#L717456-L717473) | 1 | 0 | 0 | 1 | 1 | 2 |

### host:717456

Calls written directly in this body: `.get`, `checkSandDataDatabaseSync`, `db.close`, `db.exec`, `db.prepare`, `new import_node_sqlite4.DatabaseSync`, `refuseSandDataDatabaseLinksSync`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `de93ebc4a651f48527b31bee07c9575e351ecdc352fcb33ba8637eefb47ced1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
