# `SearchIndexWorkerChannel.lose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542124-542129](../../../../../../../reference/runtime/host-main.cjs#L542124-L542129) | `method` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542124-542129](../../../../../../../reference/runtime/host-main.cjs#L542124-L542129) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:542124

Calls written directly in this body: `settle3`, `this.pending.clear`, `this.pending.values`.

Assignment or increment targets: `this.isLost`.

SHA-256 of the source span: `6fa57cccade535af3c7b40fc4a7898dc67dbf39d4146a931737a74401c7d63da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
