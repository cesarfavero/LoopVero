# `WorkerSearchIndexJobPort.terminate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542171-542173](../../../../../../../reference/runtime/host-main.cjs#L542171-L542173) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542171-542173](../../../../../../../reference/runtime/host-main.cjs#L542171-L542173) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:542171

Calls written directly in this body: `this.channel.terminate`.

SHA-256 of the source span: `b2f3f5e1a98a9535cfe7f6a0d5de8a4f009d2588c59d37bd0a9d76ef5585b746`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
