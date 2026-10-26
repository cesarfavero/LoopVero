# `createRunnerPendingSummaryStore/take`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/sessions/runner-pending-summary-store.ts` · [Module README](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535183-535191](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535183-L535191) | `ArrowFunctionExpression` | yes | `_ctx, conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535183-535191](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535183-L535191) | 2 | 0 | 1 | 2 | 0 | 0 |

### evaluation:535183

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `pendingSummary`, `pendingWrite`.

SHA-256 of the source span: `57f77a4e0a5613bb6b994a50ea640eef056fb97cbb251a54876d1528828204c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
