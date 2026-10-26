# `createSandTurnBudgetGuard/exceed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/turn-budget.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/turn-budget-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587815-587819](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587815-L587819) | `ArrowFunctionExpression` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587815-587819](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587815-L587819) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587815

Calls written directly in this body: `args.onExceeded`.

Assignment or increment targets: `exceeded`.

SHA-256 of the source span: `d919b0a6d6b9e673d9ed788b592b621d34886cf540c0807243f95c5dda0f8bab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
