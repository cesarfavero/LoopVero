# `jitteredSandExperimentPollIntervalMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552538-552541](../../../../../../../reference/runtime/host-main.cjs#L552538-L552541) | `FunctionDeclaration` | no | `isDevBuild` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552538-552541](../../../../../../../reference/runtime/host-main.cjs#L552538-L552541) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552538

Calls written directly in this body: `Math.floor`, `Math.max`, `Math.random`.

SHA-256 of the source span: `02f7dd3e9af6886ec75c6d455be8be6cb8fdabf7970a9241f632e12a15fe56d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
