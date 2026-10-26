# `SandExperimentServiceCore.computeExperimentsDevPanel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552855-552880](../../../../../../../reference/runtime/host-main.cjs#L552855-L552880) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552855-552880](../../../../../../../reference/runtime/host-main.cjs#L552855-L552880) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:552855

Calls written directly in this body: `.map`, `Object.keys`, `isKeyOf`, `items.push`, `jsonParamsOf`, `new Set`, `this.canUseFeatureFlagOverrides`, `this.experimentOverrideStore.read`, `this.getExperiment`, `this.getExperimentGroupName`.

SHA-256 of the source span: `eeb43958909a85b0fab25f7671420496a864c16dd50e5c5dc022b832408cf779`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
