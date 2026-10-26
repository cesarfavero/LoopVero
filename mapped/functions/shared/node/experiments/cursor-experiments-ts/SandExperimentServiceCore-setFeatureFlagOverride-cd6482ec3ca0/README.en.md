# `SandExperimentServiceCore.setFeatureFlagOverride`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552771-552775](../../../../../../../reference/runtime/host-main.cjs#L552771-L552775) | `method` | no | `name18, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552771-552775](../../../../../../../reference/runtime/host-main.cjs#L552771-L552775) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:552771

Calls written directly in this body: `this.canUseFeatureFlagOverrides`, `this.overrideStore.set`, `this.persistAndBroadcastOverrides`.

SHA-256 of the source span: `cf52f48764a225133e1eda7ac6915d0583dea9e56c12ed1bae53058281a3582d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
