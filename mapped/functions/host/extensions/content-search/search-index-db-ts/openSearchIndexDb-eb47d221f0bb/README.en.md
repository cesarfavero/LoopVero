# `openSearchIndexDb`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-db.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542037-542051](../../../../../../../reference/runtime/host-main.cjs#L542037-L542051) | `FunctionDeclaration` | no | `dbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542037-542051](../../../../../../../reference/runtime/host-main.cjs#L542037-L542051) | 0 | 0 | 0 | 1 | 1 | 2 |

### host:542037

Calls written directly in this body: `applyStorePragmas`, `checkSandDataDatabaseSync`, `db.close`, `new import_node_sqlite3.DatabaseSync`, `refuseSandDataDatabaseLinksSync`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `9bb4c4879711de26fe849d14a79f12cc5c02f5e3e9cde1a244597e21ce246612`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
