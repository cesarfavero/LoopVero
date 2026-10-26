# `SandSearchIndexService.openAndMigrate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542386-542403](../../../../../../../reference/runtime/host-main.cjs#L542386-L542403) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542386-542403](../../../../../../../reference/runtime/host-main.cjs#L542386-L542403) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:542386

Calls written directly in this body: `db.close`, `ensureSandDataDirSync`, `ensureSearchIndexSchema`, `errorLogTag`, `openSearchIndexDb`, `readSearchIndexFileMode`, `readSearchIndexSchemaVersion`, `stampSearchIndexSchemaVersion`, `this.recreateIndexFile`, `this.report`.

Assignment or increment targets: `db`.

SHA-256 of the source span: `ca47bab548e4e351954cfb7fff77f6832f188fa77bb063aa8ef3a27da8d42c5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
