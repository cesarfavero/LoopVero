# `SandExperimentServiceCore.logComposerTriggerExperimentExposure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553067-553069](../../../../../../../reference/runtime/host-main.cjs#L553067-L553069) | `method` | no | `trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553067-553069](../../../../../../../reference/runtime/host-main.cjs#L553067-L553069) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:553067

Calls written directly in this body: `this.logExperimentExposure`.

SHA-256 of the source span: `e28d1323c0e8ae4e0ca6aa9f9ac5602980c3c5e8fd2cd630578822f52a072d6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
