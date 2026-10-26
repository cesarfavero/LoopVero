# `WorkerSearchIndexQueryPort.searchMedia`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542193-542198](../../../../../../../reference/runtime/host-main.cjs#L542193-L542198) | `method` | yes | `query2, limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542193-542198](../../../../../../../reference/runtime/host-main.cjs#L542193-L542198) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:542193

Calls written directly in this body: `invariant`, `this.run`.

SHA-256 of the source span: `a8fdddf9a1ca32da648338853f616deabcc1ecc6a716da5c93d2d8dc48418629`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
