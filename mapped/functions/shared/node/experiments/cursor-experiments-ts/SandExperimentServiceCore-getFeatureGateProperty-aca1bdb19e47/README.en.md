# `SandExperimentServiceCore.getFeatureGateProperty`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552694-552701](../../../../../../../reference/runtime/host-main.cjs#L552694-L552701) | `method` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552694-552701](../../../../../../../reference/runtime/host-main.cjs#L552694-L552701) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552694

Calls written directly in this body: `new MutableGateProperty`, `this.checkFeatureGate`, `this.gateProperties.get`, `this.gateProperties.set`.

Assignment or increment targets: `property`.

SHA-256 of the source span: `af5edc745a3559bc94abf5fa60dca913541957179a953c1ab281970e872fdfac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
