# `isFts5Available`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-db.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542024-542036](../../../../../../../reference/runtime/host-main.cjs#L542024-L542036) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542024-542036](../../../../../../../reference/runtime/host-main.cjs#L542024-L542036) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:542024

Calls written directly in this body: `db.close`, `db.exec`, `new import_node_sqlite3.DatabaseSync`, `reportFallback`.

Assignment or increment targets: `db`.

SHA-256 of the source span: `23ef5e8fb7ccbffb6f09d73ad795559896201d2cf77d64340eecf3004dad8a5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
