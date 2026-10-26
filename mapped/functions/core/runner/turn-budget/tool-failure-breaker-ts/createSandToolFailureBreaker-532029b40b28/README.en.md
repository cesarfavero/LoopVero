# `createSandToolFailureBreaker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/budgets-recovery/README.en.md).

**Module:** `core/runner/turn-budget/tool-failure-breaker.ts` · [Module README](../../../../../../modules/core/runner/turn-budget/tool-failure-breaker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590454-590490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590454-L590490) | `FunctionDeclaration` | no | `maxConsecutiveFailures` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590454-590490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590454-L590490) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590454

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `449be6a64dfd0254db2512927f1aad78119672f811ffffb8a181ab0bcb993f32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
