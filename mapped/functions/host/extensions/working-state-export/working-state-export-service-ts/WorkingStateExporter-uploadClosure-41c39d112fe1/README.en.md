# `WorkingStateExporter.uploadClosure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-export-service.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785617-785746](../../../../../../../reference/runtime/host-main.cjs#L785617-L785746) | `method` | yes | `agentId, limits, progress, includeRoot = true, control` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785617-785746](../../../../../../../reference/runtime/host-main.cjs#L785617-L785746) | 23 | 2 | 6 | 18 | 0 | 0 |

### host:785617

Calls written directly in this body: `.map`, `Math.max`, `Promise.all`, `boundedConcurrency`, `chunk.some`, `chunkIds.slice`, `durable.has`, `missing.slice`, `new Set`, `skipped`, `skippedAfterSnapshot`, `this.deps.isStoreEnabled`, `this.deps.isTemporalAgent`, `this.deps.isTurnInFlight`, `this.deps.now`, `this.deps.readClientStateSeed`, `this.deps.readServerId`, `this.durableBlobHexIdsOrNoneWhenUnlisted`, `this.uploadedHexIdsByAgent.get`, `this.uploadedHexIdsByAgent.set`, `uploaded.add`, `uploaded.has`, `waitForWorkingStateOperation`, `walk3.reachableHexIds.filter`.

Assignment or increment targets: `progress.closureBlobs`, `progress.closureBytes`, `progress.readDurationMs`, `progress.rootBytes`, `progress.snapshotDurationMs`, `progress.uploadDurationMs`, `progress.uploadedBlobs`, `progress.uploadedBytes`, `putStart`, `start`, `uploaded`.

SHA-256 of the source span: `3a916d696f7e84c64bc18b4b7b7f397d2f553c45f578638c76cc43bb3dd50c92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
