# `SandExperimentServiceCore.reportModelConfigRejection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553216-553229](../../../../../../../reference/runtime/host-main.cjs#L553216-L553229) | `method` | no | `configName, rejection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553216-553229](../../../../../../../reference/runtime/host-main.cjs#L553216-L553229) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:553216

Calls written directly in this body: `logged.add`, `logged.has`, `new Set`, `reportExperimentsDiagnostic`, `this.loggedModelConfigRejections.get`, `this.loggedModelConfigRejections.set`.

Assignment or increment targets: `logged`.

SHA-256 of the source span: `e270b31f6b237a69a6e69d0fe9058c52ea0c35bb226d063d754cbeb95ae38986`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
