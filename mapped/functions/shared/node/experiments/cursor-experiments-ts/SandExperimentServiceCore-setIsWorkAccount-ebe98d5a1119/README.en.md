# `SandExperimentServiceCore.setIsWorkAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552763-552767](../../../../../../../reference/runtime/host-main.cjs#L552763-L552767) | `method` | no | `isWorkAccount` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552763-552767](../../../../../../../reference/runtime/host-main.cjs#L552763-L552767) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552763

Calls written directly in this body: `this.refreshSnapshot`.

Assignment or increment targets: `this.isWorkAccount`.

SHA-256 of the source span: `c9228fcc4ae498017f6a54b421e6aa9e545b311a29cd0835706796b9e2912804`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
