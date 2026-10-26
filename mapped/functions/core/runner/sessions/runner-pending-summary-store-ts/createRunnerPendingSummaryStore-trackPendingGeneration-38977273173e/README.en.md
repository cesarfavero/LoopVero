# `createRunnerPendingSummaryStore/trackPendingGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/sessions/runner-pending-summary-store.ts` · [Module README](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535159-535168](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535159-L535168) | `ArrowFunctionExpression` | no | `generation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535159-535168](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535159-L535168) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535159

Calls written directly in this body: `generation.promiseInfo.promise.then`.

Assignment or increment targets: `pendingGeneration`.

SHA-256 of the source span: `0df1a9cb44a5d87481ab49e1c954dc68a6ebff778ca6261b93780d5974707eeb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
