# `SandExperimentServiceCore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552587-552615](../../../../../../../reference/runtime/host-main.cjs#L552587-L552615) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552587-552615](../../../../../../../reference/runtime/host-main.cjs#L552587-L552615) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:552587

Calls written directly in this body: `createDeadlinePolicy`, `createPollingPolicy3`, `jitteredSandExperimentPollIntervalMs`, `new SandExperimentOverrideStore`, `new SandFeatureFlagOverrideStore`, `this.canUseFeatureFlagOverrides`, `this.computeSnapshot`, `this.overrideStore.hydrateFromDisk`.

Assignment or increment targets: `this.bootstrapDeadline`, `this.clock`, `this.experimentOverrideStore`, `this.options`, `this.overrideStore`, `this.refreshPoll`, `this.registry`, `this.snapshot`.

SHA-256 of the source span: `0c896e127841febc93fac8a72cdd9f27948635aca51d3f8505f685aa69549465`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
