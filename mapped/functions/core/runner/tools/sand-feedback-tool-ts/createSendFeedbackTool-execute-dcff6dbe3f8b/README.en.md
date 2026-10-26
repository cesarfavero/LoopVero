# `createSendFeedbackTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-feedback-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-feedback-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765498-765560](../../../../../../../reference/runtime/host-main.cjs#L765498-L765560) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:558864-558926](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558864-L558926) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765498-765560](../../../../../../../reference/runtime/host-main.cjs#L765498-L765560) | 9 | 0 | 2 | 7 | 0 | 0 |
| [evaluation:558864-558926](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558864-L558926) | 9 | 0 | 2 | 7 | 0 | 0 |

### host:765498

Calls written directly in this body: `Math.ceil`, `Math.max`, `d.getApprovalExpiryPolicy`, `d.getConversationId`, `d.submitProductFeedback`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `isAgentFeedbackBlockedByPrivacyMode`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

Assignment or increment targets: `platformFields`.

SHA-256 of the source span: `92e5bde78afbc642e024f7d1ff6f18c5bd900490cb7511c16f6c9e875bf30736`.

### evaluation:558864

Calls written directly in this body: `Math.ceil`, `Math.max`, `d.getApprovalExpiryPolicy`, `d.getConversationId`, `d.submitProductFeedback`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `isAgentFeedbackBlockedByPrivacyMode`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

Assignment or increment targets: `platformFields`.

SHA-256 of the source span: `92e5bde78afbc642e024f7d1ff6f18c5bd900490cb7511c16f6c9e875bf30736`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
