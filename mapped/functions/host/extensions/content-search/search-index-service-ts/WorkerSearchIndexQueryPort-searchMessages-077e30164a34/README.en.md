# `WorkerSearchIndexQueryPort.searchMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542187-542192](../../../../../../../reference/runtime/host-main.cjs#L542187-L542192) | `method` | yes | `query2, limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542187-542192](../../../../../../../reference/runtime/host-main.cjs#L542187-L542192) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:542187

Calls written directly in this body: `invariant`, `this.run`.

SHA-256 of the source span: `5f4e8976793a3ae82f78a78eddc8d9bfc3afe49310177ba44615ef5fb39e99a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
