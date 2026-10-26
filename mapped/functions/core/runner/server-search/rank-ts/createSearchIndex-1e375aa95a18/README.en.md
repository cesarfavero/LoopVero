# `createSearchIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/server-search/rank.ts` · [Module README](../../../../../../modules/core/runner/server-search/rank-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765900-765920](../../../../../../../reference/runtime/host-main.cjs#L765900-L765920) | `FunctionDeclaration` | yes | `items, toDoc` |
| [evaluation:559264-559284](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559264-L559284) | `FunctionDeclaration` | yes | `items, toDoc` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765900-765920](../../../../../../../reference/runtime/host-main.cjs#L765900-L765920) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:559264-559284](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559264-L559284) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:765900

Calls written directly in this body: `CommandScoreComputer.createInSlices`, `entries.map`, `items.map`, `sliceYielder`.

SHA-256 of the source span: `eebc1a3d9d260af37d31e2402fe11e972f145e3afc9ab59e5d9790c1625e87ab`.

### evaluation:559264

Calls written directly in this body: `CommandScoreComputer.createInSlices`, `entries.map`, `items.map`, `sliceYielder`.

SHA-256 of the source span: `b8232d71a364d4e282bda326f0925b57c3ca40c85127926f20d24003014374e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
