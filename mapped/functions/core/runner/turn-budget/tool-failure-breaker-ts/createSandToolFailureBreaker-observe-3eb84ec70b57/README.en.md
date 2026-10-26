# `createSandToolFailureBreaker/observe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/tool-failure-breaker.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/tool-failure-breaker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590463-590477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590463-L590477) | `FunctionExpression` | no | `events` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590463-590477](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590463-L590477) | 4 | 1 | 0 | 2 | 0 | 0 |

### evaluation:590463

Calls written directly in this body: `isRefusedOrCancelled`, `streak.push`.

Assignment or increment targets: `streak`, `trippedOn`.

SHA-256 of the source span: `16504754bdea39d4b66a8bc71bb7d615efb96137d66112396454cfd358a4d056`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
