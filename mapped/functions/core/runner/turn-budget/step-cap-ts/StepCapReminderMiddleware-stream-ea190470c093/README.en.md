# `StepCapReminderMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/step-cap.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/step-cap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587334-587340](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587334-L587340) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587334-587340](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587334-L587340) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587334

Calls written directly in this body: `remindedSinceLastSummary`, `stepCapWrapUpAtStep`, `this.innerExecutor.appendMessages`, `this.innerExecutor.getMessages`, `this.innerExecutor.stream`.

SHA-256 of the source span: `2811eecea247e16155de16056c0861f11e7fdfaf53ed675792ed9aafb4de6d4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
