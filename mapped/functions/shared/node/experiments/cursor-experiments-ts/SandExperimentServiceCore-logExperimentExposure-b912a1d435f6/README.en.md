# `SandExperimentServiceCore.logExperimentExposure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553151-553175](../../../../../../../reference/runtime/host-main.cjs#L553151-L553175) | `method` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553151-553175](../../../../../../../reference/runtime/host-main.cjs#L553151-L553175) | 4 | 0 | 0 | 6 | 0 | 1 |

### host:553151

Calls written directly in this body: `Object.hasOwn`, `client.getExperiment`, `this.experimentOverrideStore.read`, `this.flushExposureLog`, `this.hasHydratedStatsigUserId`, `this.reportConfigParseFailure`.

SHA-256 of the source span: `896d432e64ed03a6405764d8ff57bd5a890b02cb7eb280487b2fbc0e5309c684`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
