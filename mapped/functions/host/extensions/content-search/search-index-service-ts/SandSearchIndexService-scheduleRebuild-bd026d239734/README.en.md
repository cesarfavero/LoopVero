# `SandSearchIndexService.scheduleRebuild`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542441-542471](../../../../../../../reference/runtime/host-main.cjs#L542441-L542471) | `method` | no | `stage, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542441-542471](../../../../../../../reference/runtime/host-main.cjs#L542441-L542471) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:542441

Calls written directly in this body: `.catch`, `.finally`, `this.enqueue`, `this.jobTail.then`, `this.markUnavailable`, `this.report`.

Assignment or increment targets: `this.isRebuildPending`, `this.isReconcileDone`, `this.jobTail`, `this.port`, `this.queryPort`, `this.rebuildCount`.

SHA-256 of the source span: `c72f84d440d1718d7a75e559a2d42cd4f50abbd21db1720d29b124217e03688f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
