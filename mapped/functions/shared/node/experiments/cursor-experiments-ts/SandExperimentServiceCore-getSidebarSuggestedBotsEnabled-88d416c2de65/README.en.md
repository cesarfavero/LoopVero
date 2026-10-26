# `SandExperimentServiceCore.getSidebarSuggestedBotsEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553046-553051](../../../../../../../reference/runtime/host-main.cjs#L553046-L553051) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553046-553051](../../../../../../../reference/runtime/host-main.cjs#L553046-L553051) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:553046

Calls written directly in this body: `Object.hasOwn`, `this.getExperiment`.

SHA-256 of the source span: `a39459c327c339f95cff9b2e8d080ef1206077127ff86aa3b04f92b6644a91ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
