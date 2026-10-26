# `StepCapReminderMiddleware.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/step-cap.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587329-587332](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587329-L587332) | `method` | no | `innerExecutor, stepCap` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587329-587332](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587329-L587332) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:587329

Calls written directly in this body: `super`.

Assignment or increment targets: `this.stepCap`.

SHA-256 of the source span: `268da7494e969493248138db1923c14fbd36d8a6d66dfe6b28592415aea06bbd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
