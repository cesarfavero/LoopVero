# `WorkerSearchIndexJobPort.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542147-542149](../../../../../../../reference/runtime/host-main.cjs#L542147-L542149) | `method` | no | `entryPath, config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542147-542149](../../../../../../../reference/runtime/host-main.cjs#L542147-L542149) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:542147

Calls written directly in this body: `new SearchIndexWorkerChannel`.

Assignment or increment targets: `this.channel`.

SHA-256 of the source span: `b5f8eac924f62df04ba51b764e37dbaa92ae73f317958d7b1f6182ef404b3673`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
