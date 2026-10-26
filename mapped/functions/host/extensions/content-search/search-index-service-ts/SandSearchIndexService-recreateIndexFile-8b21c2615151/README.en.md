# `SandSearchIndexService.recreateIndexFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542404-542411](../../../../../../../reference/runtime/host-main.cjs#L542404-L542411) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542404-542411](../../../../../../../reference/runtime/host-main.cjs#L542404-L542411) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:542404

Calls written directly in this body: `ensureSearchIndexSchema`, `listener`, `openSearchIndexDb`, `stampSearchIndexSchemaVersion`, `this.removeIndexFiles`.

SHA-256 of the source span: `9da99d06c9c4f3fc37d2aa7683b760a6bfd1771b1dc4bb4de7371a76ffdc0b0c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
