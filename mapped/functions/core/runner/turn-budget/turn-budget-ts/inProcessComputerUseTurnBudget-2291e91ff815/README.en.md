# `inProcessComputerUseTurnBudget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/turn-budget.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/turn-budget-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587801-587808](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587801-L587808) | `FunctionDeclaration` | no | `parent, maxSteps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587801-587808](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587801-L587808) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587801

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `086ecd72809dbc0785688bdec58d5e31df1253e20953105ba307a74d9c5ff36b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
