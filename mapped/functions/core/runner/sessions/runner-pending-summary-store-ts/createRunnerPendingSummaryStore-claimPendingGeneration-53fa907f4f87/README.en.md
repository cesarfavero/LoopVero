# `createRunnerPendingSummaryStore/claimPendingGeneration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/sessions/runner-pending-summary-store.ts` · [Module README](../../../../../../modules/core/runner/sessions/runner-pending-summary-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535169-535174](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535169-L535174) | `ArrowFunctionExpression` | no | `conversationId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535169-535174](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535169-L535174) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:535169

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `pendingGeneration`.

SHA-256 of the source span: `ef69c313dd772121af2604e7a469324715f29523c50aabd88a879d18a6242847`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
