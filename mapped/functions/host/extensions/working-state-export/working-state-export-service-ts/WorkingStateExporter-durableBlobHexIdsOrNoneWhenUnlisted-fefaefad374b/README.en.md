# `WorkingStateExporter.durableBlobHexIdsOrNoneWhenUnlisted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-export-service.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785535-785576](../../../../../../../reference/runtime/host-main.cjs#L785535-L785576) | `method` | yes | `progress, control` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785535-785576](../../../../../../../reference/runtime/host-main.cjs#L785535-L785576) | 3 | 0 | 1 | 3 | 1 | 1 |

### host:785535

Calls written directly in this body: `Math.max`, `errorLogTag`, `listing.pageSubscribers.add`, `listing.pageSubscribers.delete`, `new Set`, `this.deps.log`, `this.deps.now`, `this.durableBlobListing`, `waitForWorkingStateOperation`.

Assignment or increment targets: `progress.listedBlobs`, `progress.listingDurationMs`, `progress.listingKnownBlobs`, `progress.listingOutcome`, `progress.listingPages`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `36425183f624c48b977704e0567210b8bdfeab77335e2060224fef3098cad239`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
