# `SandExperimentServiceCore.applyFeatureFlagOverrideCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552801-552820](../../../../../../../reference/runtime/host-main.cjs#L552801-L552820) | `method` | no | `command` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552801-552820](../../../../../../../reference/runtime/host-main.cjs#L552801-L552820) | 6 | 0 | 0 | 0 | 0 | 0 |

### host:552801

Calls written directly in this body: `this.clearAllFeatureFlagOverrides`, `this.clearFeatureFlagOverride`, `this.overrideStore.isFlagName`, `this.setAllFeatureFlagOverridesToBundledValues`, `this.setFeatureFlagOverride`.

SHA-256 of the source span: `28f99301f90118760ec982c8924460da2ef9d56ddbaabef2cf0957f6848a06a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
