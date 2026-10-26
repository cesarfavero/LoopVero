# `startIdleCompaction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/idle-compaction/idle-compaction.ts` · [Module README](../../../../../../modules/core/runner/idle-compaction/idle-compaction-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:526374-526447](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526374-L526447) | `FunctionDeclaration` | yes | `runner, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526374-526447](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526374-L526447) | 3 | 0 | 1 | 3 | 0 | 1 |

### evaluation:526374

Calls written directly in this body: `Promise.withResolvers`, `durationMs`, `errorLogTag`, `performance.now`, `runner.onSummaryLifecycle`, `runner.run`, `settle2`, `stop`, `summary`.

Assignment or increment targets: `summary`.

SHA-256 of the source span: `0a038c1403e33b45edad01af0da6ed1e447a82fbb08fad802a5b2944b62dd563`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
