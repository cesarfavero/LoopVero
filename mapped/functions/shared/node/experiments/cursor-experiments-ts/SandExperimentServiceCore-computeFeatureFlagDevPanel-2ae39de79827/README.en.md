# `SandExperimentServiceCore.computeFeatureFlagDevPanel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552881-552896](../../../../../../../reference/runtime/host-main.cjs#L552881-L552896) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552881-552896](../../../../../../../reference/runtime/host-main.cjs#L552881-L552896) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:552881

Calls written directly in this body: `Object.keys`, `items.push`, `overrides.get`, `this.canUseFeatureFlagOverrides`, `this.checkFeatureGate`, `this.overrideStore.activeOverrides`, `this.overrideStore.isFlagName`.

SHA-256 of the source span: `c59eded20e044a426e745715b2e3ae4efe78dce64ec503936afbb0e718220650`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
