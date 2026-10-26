# `sandMeetingJoinReviewer/askConsent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772857-772899](../../../../../../reference/runtime/host-main.cjs#L772857-L772899) | `ArrowFunctionExpression` | yes | `{ toolCallId, reviewCallId: reviewCallId2, needsConsent, signal }` |
| [evaluation:572083-572125](../../../../../../reference/runtime/sand-eval-runner.cjs#L572083-L572125) | `ArrowFunctionExpression` | yes | `{ toolCallId, reviewCallId: reviewCallId2, needsConsent, signal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772857-772899](../../../../../../reference/runtime/host-main.cjs#L772857-L772899) | 7 | 0 | 2 | 6 | 0 | 0 |
| [evaluation:572083-572125](../../../../../../reference/runtime/sand-eval-runner.cjs#L572083-L572125) | 7 | 0 | 2 | 6 | 0 | 0 |

### host:772857

Calls written directly in this body: `beforeReview`, `controller.cardReasonFor`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `needsConsent`, `options2`, `refusal`, `requestReviewedApproval`, `reviewOptions.getApprovalExpiryPolicy`, `startsFromDirectChat`.

SHA-256 of the source span: `0a96a61d26a6ead16631276b48016c8efd97e1e657fd707b1d3843e5de901ce3`.

### evaluation:572083

Calls written directly in this body: `beforeReview`, `controller.cardReasonFor`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `needsConsent`, `options2`, `refusal`, `requestReviewedApproval`, `reviewOptions.getApprovalExpiryPolicy`, `startsFromDirectChat`.

SHA-256 of the source span: `0a96a61d26a6ead16631276b48016c8efd97e1e657fd707b1d3843e5de901ce3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
