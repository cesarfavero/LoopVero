# `extractDescendantAutoReviewClassifierContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/sand-auto-review-classifier-context.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-auto-review-classifier-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569260-569263](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569260-L569263) | `ArrowFunctionExpression` | no | `ctx, stateHandler` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569260-569263](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569260-L569263) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:569260 uses an implicit arrow-function return.

### evaluation:569260

Calls written directly in this body: `tryExtractSandAutoReviewClassifierConversationContext`.

SHA-256 of the source span: `aef60181d997909088901fe061f9953647fe532e625da0fe5ae6013f13f731fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
