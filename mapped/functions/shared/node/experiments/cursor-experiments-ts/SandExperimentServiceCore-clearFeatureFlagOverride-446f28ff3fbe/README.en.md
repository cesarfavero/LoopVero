# `SandExperimentServiceCore.clearFeatureFlagOverride`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552776-552781](../../../../../../../reference/runtime/host-main.cjs#L552776-L552781) | `method` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552776-552781](../../../../../../../reference/runtime/host-main.cjs#L552776-L552781) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:552776

Calls written directly in this body: `this.canUseFeatureFlagOverrides`, `this.overrideStore.clear`, `this.persistAndBroadcastOverrides`.

SHA-256 of the source span: `95af5674d83ec3a5617d81a810d5c09a40cc0a8cb3f858dfdd1d808e67b5dd2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
