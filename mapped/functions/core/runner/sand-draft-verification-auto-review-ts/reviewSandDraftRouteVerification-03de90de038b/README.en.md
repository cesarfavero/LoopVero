# `reviewSandDraftRouteVerification`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755891-755939](../../../../../../reference/runtime/host-main.cjs#L755891-L755939) | `FunctionDeclaration` | yes | `args` |
| [evaluation:541766-541814](../../../../../../reference/runtime/sand-eval-runner.cjs#L541766-L541814) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755891-755939](../../../../../../reference/runtime/host-main.cjs#L755891-L755939) | 8 | 0 | 2 | 5 | 0 | 0 |
| [evaluation:541766-541814](../../../../../../reference/runtime/sand-eval-runner.cjs#L541766-L541814) | 8 | 0 | 2 | 5 | 0 | 0 |

### host:755891

Calls written directly in this body: `.catch`, `classify2`, `ctx.get`, `fingerprintSandAutoReviewTarget`, `isHostedGmailRoute`, `options2.gmailSendAsSignature`, `recordedCardRefusal`, `requestReviewedApproval`, `reviewedDraftReads`, `summarizeVerificationReads`.

SHA-256 of the source span: `b8be467189a729aacfbfaffdf82ee3147975baa37ceebf1900793a88671b0a85`.

### evaluation:541766

Calls written directly in this body: `.catch`, `classify`, `ctx.get`, `fingerprintSandAutoReviewTarget`, `isHostedGmailRoute`, `options2.gmailSendAsSignature`, `recordedCardRefusal`, `requestReviewedApproval`, `reviewedDraftReads`, `summarizeVerificationReads`.

SHA-256 of the source span: `c1623ac9b404e0f66703c877b257ae7a5a0346b5e355e933045bb10f9ac51776`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
