# `classify`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:541749-541765](../../../../../../reference/runtime/sand-eval-runner.cjs#L541749-L541765) | `FunctionDeclaration` | no | `ctx, route, options2, toolCallId, mode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:541749-541765](../../../../../../reference/runtime/sand-eval-runner.cjs#L541749-L541765) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:541749

Calls written directly in this body: `runSandAutoReviewClassifier`.

SHA-256 of the source span: `908cf2c637be9b65b952f80dcca0327b8919ef8f8600fa1090a793c4c71a4dad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
