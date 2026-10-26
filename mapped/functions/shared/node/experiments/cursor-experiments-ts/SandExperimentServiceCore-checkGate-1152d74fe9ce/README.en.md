# `SandExperimentServiceCore.checkGate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552923-552927](../../../../../../../reference/runtime/host-main.cjs#L552923-L552927) | `method` | yes | `name18, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552923-552927](../../../../../../../reference/runtime/host-main.cjs#L552923-L552927) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:552923

Calls written directly in this body: `this.checkFeatureGate`, `this.whenReady`.

SHA-256 of the source span: `890470505d7d0905f2c78a943b751663c7830a99a9fbb91005d72e07d012e047`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
