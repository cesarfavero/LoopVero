# `readServerCursor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-db.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542074-542088](../../../../../../../reference/runtime/host-main.cjs#L542074-L542088) | `FunctionDeclaration` | no | `db, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542074-542088](../../../../../../../reference/runtime/host-main.cjs#L542074-L542088) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:542074

Calls written directly in this body: `.get`, `db.prepare`.

SHA-256 of the source span: `e43d43c35bd92111f8a6625b5c59d870d892d2b40526dd1cac288f86f08f52f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
