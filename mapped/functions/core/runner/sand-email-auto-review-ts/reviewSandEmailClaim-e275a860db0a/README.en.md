# `reviewSandEmailClaim`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764679-764715](../../../../../../reference/runtime/host-main.cjs#L764679-L764715) | `FunctionDeclaration` | yes | `args` |
| [evaluation:558047-558083](../../../../../../reference/runtime/sand-eval-runner.cjs#L558047-L558083) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764679-764715](../../../../../../reference/runtime/host-main.cjs#L764679-L764715) | 5 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:558047-558083](../../../../../../reference/runtime/sand-eval-runner.cjs#L558047-L558083) | 5 | 0 | 1 | 4 | 0 | 0 |

### host:764679

Calls written directly in this body: `args.options.getApprovalExpiryPolicy`, `claimReviewArguments`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`, `sandEmailClaimFingerprintPayload`, `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `32acabebf166d0d1c07bb0abd9e57a352b88fc974e8c66fe94fe095ddfc54d05`.

### evaluation:558047

Calls written directly in this body: `args.options.getApprovalExpiryPolicy`, `claimReviewArguments`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`, `sandEmailClaimFingerprintPayload`, `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `32acabebf166d0d1c07bb0abd9e57a352b88fc974e8c66fe94fe095ddfc54d05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
