# `SandExperimentServiceCore.checkFeatureGate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552716-552733](../../../../../../../reference/runtime/host-main.cjs#L552716-L552733) | `method` | no | `name18, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552716-552733](../../../../../../../reference/runtime/host-main.cjs#L552716-L552733) | 5 | 0 | 0 | 6 | 0 | 1 |

### host:552716

Calls written directly in this body: `client.checkGate`, `this.canUseFeatureFlagOverrides`, `this.overrideStore.read`.

SHA-256 of the source span: `116a86ea2aa842df88dc7264fa4d620928f75b18928d3f8c915b6dd9314b5ebf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
