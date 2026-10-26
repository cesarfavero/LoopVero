# `SandExperimentServiceCore.replaceExperimentOverrides`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552831-552834](../../../../../../../reference/runtime/host-main.cjs#L552831-L552834) | `method` | no | `overrides` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552831-552834](../../../../../../../reference/runtime/host-main.cjs#L552831-L552834) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:552831

Calls written directly in this body: `this.experimentOverrideStore.replaceAll`, `this.refreshSnapshot`.

SHA-256 of the source span: `c1cf578d095863bfecfe6599d3ba764b839d914a3e41eb4c9d16b200e3f7e154`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
