# `createTeamPublishTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/sand-team-publish-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/sand-team-publish-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781425-781469](../../../../../../../../reference/runtime/host-main.cjs#L781425-L781469) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:581772-581816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581772-L581816) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781425-781469](../../../../../../../../reference/runtime/host-main.cjs#L781425-L781469) | 6 | 0 | 4 | 7 | 0 | 0 |
| [evaluation:581772-581816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581772-L581816) | 6 | 0 | 4 | 7 | 0 | 0 |

### host:781425

Calls written directly in this body: `buildSandAgentShareLinkUrl`, `d.activeTurnRequestSource`, `d.getApprovalExpiryPolicy`, `d.getConversationId`, `d.isTeamSetupUnderway`, `d.teamPublish.checkUnpublish`, `d.teamPublish.publish`, `d.teamPublish.unpublish`, `describePublish`, `describeUnpublish`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

SHA-256 of the source span: `efedc7dd81a743b0fd46e0f210911294257a9d132034051c4a3fed549a155536`.

### evaluation:581772

Calls written directly in this body: `buildSandAgentShareLinkUrl`, `d.activeTurnRequestSource`, `d.getApprovalExpiryPolicy`, `d.getConversationId`, `d.isTeamSetupUnderway`, `d.teamPublish.checkUnpublish`, `d.teamPublish.publish`, `d.teamPublish.unpublish`, `describePublish`, `describeUnpublish`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `ledger.answered`, `ledger.ruleRefused`, `requestReviewedApproval`.

SHA-256 of the source span: `65453c3e67522a250450afce290d23f5a086f0d8dce3ecab0276f67e95198a17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
