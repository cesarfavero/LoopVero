# `approvePrivateTailnetMcpUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780012-780043](../../../../../../../reference/runtime/host-main.cjs#L780012-L780043) | `FunctionDeclaration` | yes | `ctx, approval, request5` |
| [evaluation:580257-580288](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580257-L580288) | `FunctionDeclaration` | yes | `ctx, approval, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780012-780043](../../../../../../../reference/runtime/host-main.cjs#L780012-L780043) | 3 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:580257-580288](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580257-L580288) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:780012

Calls written directly in this body: `approval.getApprovalExpiryPolicy`, `approval.getConversationId`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `isPrivateTailnetMcpUrl`, `ledger.answered`, `ledger.ruleRefused`, `privateTailnetMcpDeclinedMessage`, `privateTailnetMcpUnavailableMessage`, `requestReviewedApproval`.

SHA-256 of the source span: `de7e97a3da546ab3a07f9d88a2ff270a552fb6e2074645ccf3c72baa3dda4b4f`.

### evaluation:580257

Calls written directly in this body: `approval.getApprovalExpiryPolicy`, `approval.getConversationId`, `fingerprintSandAutoReviewTarget`, `humanOnlyReviewLedger`, `isPrivateTailnetMcpUrl`, `ledger.answered`, `ledger.ruleRefused`, `privateTailnetMcpDeclinedMessage`, `privateTailnetMcpUnavailableMessage`, `requestReviewedApproval`.

SHA-256 of the source span: `e342d4738c0130807261a1f50b84833d34039d633fd685431078b9c238dc38f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
