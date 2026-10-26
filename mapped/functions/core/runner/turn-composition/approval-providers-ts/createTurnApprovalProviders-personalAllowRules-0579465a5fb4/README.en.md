# `createTurnApprovalProviders/personalAllowRules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/turn-composition/approval-providers.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/approval-providers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583760-583763](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583760-L583763) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583760-583763](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583760-L583763) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583760

Calls written directly in this body: `turnToolHost.getAutoReviewInstructions`.

SHA-256 of the source span: `9b06ea5b75d6eb8e0fb8bf27b285f57bd98e6347dfec45ad8a0f6b9dd9e380bf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
