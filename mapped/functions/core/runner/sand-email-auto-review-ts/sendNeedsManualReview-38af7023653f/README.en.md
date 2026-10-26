# `sendNeedsManualReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764650-764657](../../../../../../reference/runtime/host-main.cjs#L764650-L764657) | `FunctionDeclaration` | no | `target` |
| [evaluation:558018-558025](../../../../../../reference/runtime/sand-eval-runner.cjs#L558018-L558025) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764650-764657](../../../../../../reference/runtime/host-main.cjs#L764650-L764657) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558018-558025](../../../../../../reference/runtime/sand-eval-runner.cjs#L558018-L558025) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:764650

Calls written directly in this body: `.map`, `attachmentsNotFullyReviewable`, `diverted.join`, `target.fromInboxEmail.toLowerCase`, `target.replyTo.filter`.

SHA-256 of the source span: `d93c242f650f157fb6305b6c11e9765b9893089bf52e06df34989d3f12371860`.

### evaluation:558018

Calls written directly in this body: `.map`, `attachmentsNotFullyReviewable`, `diverted.join`, `target.fromInboxEmail.toLowerCase`, `target.replyTo.filter`.

SHA-256 of the source span: `d93c242f650f157fb6305b6c11e9765b9893089bf52e06df34989d3f12371860`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
