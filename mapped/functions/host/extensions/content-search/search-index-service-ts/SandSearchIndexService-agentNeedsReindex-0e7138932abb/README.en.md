# `SandSearchIndexService.agentNeedsReindex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542322-542326](../../../../../../../reference/runtime/host-main.cjs#L542322-L542326) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542322-542326](../../../../../../../reference/runtime/host-main.cjs#L542322-L542326) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:542322

Calls written directly in this body: `this.enqueue`.

Assignment or increment targets: `this.pendingReindexCount`.

SHA-256 of the source span: `8ff0b0ebb6e62887146d05675598f447439579f7eac4955015d5c797e4bc52c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
