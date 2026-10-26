# `SandExperimentServiceCore.readExperiment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552931-552954](../../../../../../../reference/runtime/host-main.cjs#L552931-L552954) | `method` | no | `name18, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552931-552954](../../../../../../../reference/runtime/host-main.cjs#L552931-L552954) | 5 | 1 | 0 | 3 | 0 | 1 |

### host:552931

Calls written directly in this body: `client.getExperiment`, `this.experimentOverrideStore.read`, `this.reportConfigParseFailure`.

SHA-256 of the source span: `40802db812a507771dda855a7c8f1e081f77aba36675ae84343e2b4f66cf0ed4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
