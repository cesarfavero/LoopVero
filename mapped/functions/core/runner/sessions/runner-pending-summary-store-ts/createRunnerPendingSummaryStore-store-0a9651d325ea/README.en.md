# `createRunnerPendingSummaryStore/store`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/sessions/runner-pending-summary-store.ts` · [Module README](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535150-535158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535150-L535158) | `ArrowFunctionExpression` | yes | `_ctx, record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535150-535158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535150-L535158) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:535150

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `pendingGeneration`, `pendingSummary`.

SHA-256 of the source span: `2d164c36293645f3e02231527b7035774b7740346646a85200e068b5372163ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
