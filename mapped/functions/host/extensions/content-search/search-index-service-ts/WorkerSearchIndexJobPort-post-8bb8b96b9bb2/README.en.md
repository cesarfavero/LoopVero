# `WorkerSearchIndexJobPort.post`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542150-542170](../../../../../../../reference/runtime/host-main.cjs#L542150-L542170) | `method` | yes | `job` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542150-542170](../../../../../../../reference/runtime/host-main.cjs#L542150-L542170) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:542150

Calls written directly in this body: `this.channel.request`.

SHA-256 of the source span: `ed0ccdb91fa59346f164a15f8e9f5de3b45320d12acdb7934deb043eaab2b223`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
