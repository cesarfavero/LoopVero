# `reviewSandOutboundCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-outbound-call-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-outbound-call-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763555-763605](../../../../../../reference/runtime/host-main.cjs#L763555-L763605) | `FunctionDeclaration` | yes | `args` |
| [evaluation:556597-556647](../../../../../../reference/runtime/sand-eval-runner.cjs#L556597-L556647) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763555-763605](../../../../../../reference/runtime/host-main.cjs#L763555-L763605) | 5 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:556597-556647](../../../../../../reference/runtime/sand-eval-runner.cjs#L556597-L556647) | 5 | 0 | 1 | 4 | 0 | 0 |

### host:763555

Calls written directly in this body: `.filter`, `.join`, `args.options.getApprovalExpiryPolicy`, `counted2`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

SHA-256 of the source span: `c93884245c37709273b84e623c84f1e1195a041b8c70e47e66d74d50cc1baf60`.

### evaluation:556597

Calls written directly in this body: `.filter`, `.join`, `args.options.getApprovalExpiryPolicy`, `counted2`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

SHA-256 of the source span: `c93884245c37709273b84e623c84f1e1195a041b8c70e47e66d74d50cc1baf60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
