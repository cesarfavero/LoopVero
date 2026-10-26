# `runClassifier2/loadConversationContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699845-699851](../../../../../../reference/runtime/host-main.cjs#L699845-L699851) | `ArrowFunctionExpression` | yes | `(none)` |
| [evaluation:513601-513607](../../../../../../reference/runtime/sand-eval-runner.cjs#L513601-L513607) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699845-699851](../../../../../../reference/runtime/host-main.cjs#L699845-L699851) | 2 | 0 | 2 | 3 | 0 | 0 |
| [evaluation:513601-513607](../../../../../../reference/runtime/sand-eval-runner.cjs#L513601-L513607) | 2 | 0 | 2 | 3 | 0 | 0 |

### host:699845

Calls written directly in this body: `options2.extractConversationContext`, `tryExtractSandAutoReviewClassifierConversationContext`.

SHA-256 of the source span: `8c489958c17f9982c1c05beaa3ed89158d2dba1c6723bbb57653b38145f665b4`.

### evaluation:513601

Calls written directly in this body: `options2.extractConversationContext`, `tryExtractSandAutoReviewClassifierConversationContext`.

SHA-256 of the source span: `8c489958c17f9982c1c05beaa3ed89158d2dba1c6723bbb57653b38145f665b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
