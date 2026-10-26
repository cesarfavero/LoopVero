# `WorkingStateExporter.durableBlobHexIdsOrNoneWhenUnlisted/onPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-export-service.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785549-785555](../../../../../../../reference/runtime/host-main.cjs#L785549-L785555) | `ArrowFunctionExpression` | no | `blobHexIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785549-785555](../../../../../../../reference/runtime/host-main.cjs#L785549-L785555) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:785549

Calls written directly in this body: `control.onProgress`.

Assignment or increment targets: `progress.listedBlobs`, `progress.listingKnownBlobs`, `progress.listingPages`.

SHA-256 of the source span: `2aef1f215d414e110e47de4a226b12312f0907fb93b068c8db7a5fcd04a1df2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
