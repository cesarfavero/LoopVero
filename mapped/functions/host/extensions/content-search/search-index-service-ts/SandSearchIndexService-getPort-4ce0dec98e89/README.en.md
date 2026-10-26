# `SandSearchIndexService.getPort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542472-542480](../../../../../../../reference/runtime/host-main.cjs#L542472-L542480) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542472-542480](../../../../../../../reference/runtime/host-main.cjs#L542472-L542480) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:542472

Calls written directly in this body: `this.createJobPort`.

Assignment or increment targets: `this.port`.

SHA-256 of the source span: `9bfa0315ff560486ae65e81156e6e6dbdb72da2bc759861ae30868840d9a696a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
