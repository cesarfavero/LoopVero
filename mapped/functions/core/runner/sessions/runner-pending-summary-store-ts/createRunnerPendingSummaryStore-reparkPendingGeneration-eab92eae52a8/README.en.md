# `createRunnerPendingSummaryStore/reparkPendingGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/sessions/runner-pending-summary-store.ts` · [Module README](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535175-535179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535175-L535179) | `ArrowFunctionExpression` | no | `generation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535175-535179](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535175-L535179) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535175

Calls written directly in this body: `settledGenerations.has`.

Assignment or increment targets: `pendingGeneration`.

SHA-256 of the source span: `02754240d13726587f96a0db95f2da966e597c42f251d22330edc8094a255fdc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
