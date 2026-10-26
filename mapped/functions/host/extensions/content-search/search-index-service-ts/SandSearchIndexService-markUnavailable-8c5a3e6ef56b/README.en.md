# `SandSearchIndexService.markUnavailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542350-542364](../../../../../../../reference/runtime/host-main.cjs#L542350-L542364) | `method` | no | `stage, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542350-542364](../../../../../../../reference/runtime/host-main.cjs#L542350-L542364) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:542350

Calls written directly in this body: `errorLogTag`, `this.db.close`, `this.report`, `this.terminateWorker`.

Assignment or increment targets: `this.db`, `this.isUnavailable`, `this.port`, `this.queryPort`.

SHA-256 of the source span: `5beafa2358ed409b1af687747276480e1c0dc53ecc6d001babb3a5c80f9a089d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
