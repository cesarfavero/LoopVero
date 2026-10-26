# `createSandTurnBudgetGuard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/turn-budget.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/turn-budget-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587809-587844](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587809-L587844) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587809-587844](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587809-L587844) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587809

Calls written directly in this body: `Math.max`, `clock.now`, `clock.schedule`.

Assignment or increment targets: `timer2`.

SHA-256 of the source span: `bc500591e6ec9447a49187ba32509f5e7908d1f974e580179eef7946b52b4421`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
