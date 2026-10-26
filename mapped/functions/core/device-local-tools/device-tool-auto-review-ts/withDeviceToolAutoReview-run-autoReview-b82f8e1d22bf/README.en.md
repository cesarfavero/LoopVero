# `withDeviceToolAutoReview/run/autoReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/device-local-tools/device-tool-auto-review.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566238-566271](../../../../../../reference/runtime/sand-eval-runner.cjs#L566238-L566271) | `ArrowFunctionExpression` | yes | `reviewCtx, phone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566238-566271](../../../../../../reference/runtime/sand-eval-runner.cjs#L566238-L566271) | 5 | 0 | 1 | 6 | 0 | 0 |

### evaluation:566238

Calls written directly in this body: `review.assertNoPendingAutoReviewApproval`, `review.options`, `reviewCtx.get`, `reviewOfAllowed`, `reviewOfDenied`, `runSandAutoReviewFlow`, `tools.find`.

SHA-256 of the source span: `72dd25e18acc7c41155f95fff2e771dc0fde4b6975e098d0296e2f22ebcccd21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
