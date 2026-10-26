# `createSandTurnBudgetGuard/observeToolCallEvents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/turn-budget.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/turn-budget-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587829-587838](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587829-L587838) | `FunctionExpression` | no | `events` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587829-587838](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587829-L587838) | 3 | 1 | 0 | 2 | 0 | 0 |

### evaluation:587829

Calls written directly in this body: `exceed`.

Assignment or increment targets: `consecutiveTimeouts`.

SHA-256 of the source span: `cb0ae301c51ba7a64911c1c19577e6b699034ce2ad6eb6b16284b9c3a215d851`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
