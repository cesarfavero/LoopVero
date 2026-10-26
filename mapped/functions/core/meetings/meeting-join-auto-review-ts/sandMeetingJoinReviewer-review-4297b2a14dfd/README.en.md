# `sandMeetingJoinReviewer/review`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772822-772856](../../../../../../reference/runtime/host-main.cjs#L772822-L772856) | `ArrowFunctionExpression` | yes | `{ toolCallId, reviewCallId: reviewCallId2, target, signal }` |
| [evaluation:572048-572082](../../../../../../reference/runtime/sand-eval-runner.cjs#L572048-L572082) | `ArrowFunctionExpression` | yes | `{ toolCallId, reviewCallId: reviewCallId2, target, signal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772822-772856](../../../../../../reference/runtime/host-main.cjs#L772822-L772856) | 7 | 0 | 2 | 5 | 0 | 0 |
| [evaluation:572048-572082](../../../../../../reference/runtime/sand-eval-runner.cjs#L572048-L572082) | 7 | 0 | 2 | 5 | 0 | 0 |

### host:772822

Calls written directly in this body: `.ruleRefused`, `askUser`, `beforeReview`, `classify4`, `humanOnlyReviewLedger`, `meetingIdentity`, `meetingJoinReviewSpec`, `options2`, `startsFromDirectChat`.

SHA-256 of the source span: `4ff956f50d994ac9fc9bc0eecf8ae02e3ae45134fa5968f7db31f6fa847121dd`.

### evaluation:572048

Calls written directly in this body: `.ruleRefused`, `askUser`, `beforeReview`, `classify4`, `humanOnlyReviewLedger`, `meetingIdentity`, `meetingJoinReviewSpec`, `options2`, `startsFromDirectChat`.

SHA-256 of the source span: `4ff956f50d994ac9fc9bc0eecf8ae02e3ae45134fa5968f7db31f6fa847121dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
