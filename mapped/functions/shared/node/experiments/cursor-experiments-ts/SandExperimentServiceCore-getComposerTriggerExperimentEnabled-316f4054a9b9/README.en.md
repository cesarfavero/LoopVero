# `SandExperimentServiceCore.getComposerTriggerExperimentEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552990-553001](../../../../../../../reference/runtime/host-main.cjs#L552990-L553001) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552990-553001](../../../../../../../reference/runtime/host-main.cjs#L552990-L553001) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:552990

Calls written directly in this body: `Object.hasOwn`, `this.getExperiment`, `this.getExperimentGroupName`, `this.hasHydratedStatsigUserId`.

Assignment or increment targets: `enabledByTrigger[computed]`.

SHA-256 of the source span: `2a65549a2dcfef23cc180e562fba26d9c1aeda80417e4bdabd9627f133ea412b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
