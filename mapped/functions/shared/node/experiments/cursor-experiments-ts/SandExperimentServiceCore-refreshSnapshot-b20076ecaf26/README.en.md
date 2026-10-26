# `SandExperimentServiceCore.refreshSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553473-553489](../../../../../../../reference/runtime/host-main.cjs#L553473-L553489) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553473-553489](../../../../../../../reference/runtime/host-main.cjs#L553473-L553489) | 1 | 2 | 0 | 0 | 0 | 1 |

### host:553473

Calls written directly in this body: `areJsonValuesEqual`, `errorLogTag`, `listener`, `property.set`, `reportExperimentsDiagnostic`, `this.computeSnapshot`.

Assignment or increment targets: `this.snapshot`.

SHA-256 of the source span: `1a790b28f6553c5e5ac9a84078f3843cc8545301db5f26f646c605680bf1f9da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
