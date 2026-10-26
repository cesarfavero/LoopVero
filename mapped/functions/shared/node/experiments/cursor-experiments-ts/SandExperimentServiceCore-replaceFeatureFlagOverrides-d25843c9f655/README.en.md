# `SandExperimentServiceCore.replaceFeatureFlagOverrides`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552794-552797](../../../../../../../reference/runtime/host-main.cjs#L552794-L552797) | `method` | no | `overrides` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552794-552797](../../../../../../../reference/runtime/host-main.cjs#L552794-L552797) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:552794

Calls written directly in this body: `this.overrideStore.replaceAll`, `this.persistAndBroadcastOverrides`.

SHA-256 of the source span: `896d41f3226d2a226c31ab936823c35c8133f7a2cdaa6d3ba6d3650fbe7f6b4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
