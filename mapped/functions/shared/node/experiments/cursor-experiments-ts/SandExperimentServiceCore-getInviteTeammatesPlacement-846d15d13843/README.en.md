# `SandExperimentServiceCore.getInviteTeammatesPlacement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553014-553025](../../../../../../../reference/runtime/host-main.cjs#L553014-L553025) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553014-553025](../../../../../../../reference/runtime/host-main.cjs#L553014-L553025) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:553014

Calls written directly in this body: `Object.hasOwn`, `this.getExperiment`, `this.getExperimentGroupName`, `this.hasHydratedStatsigUserId`.

SHA-256 of the source span: `2595f5a079fbbb3b4a6b85bdcea827ebceeb5c785f34ff19d93087b6163940f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
