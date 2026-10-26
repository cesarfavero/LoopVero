# `createTurnApprovalProviders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/turn-composition/approval-providers.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/approval-providers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583706-583770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583706-L583770) | `FunctionDeclaration` | no | `host, turnToolHost, turn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583706-583770](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583706-L583770) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583706

Calls written directly in this body: `allowsSystemReminder`, `createBlockedSendDraftReminder`, `createMcpSendHolds`, `createSandMcpApprovalProvider`, `createSandShellApprovalProvider`, `turnToolHost.getConversationId`.

SHA-256 of the source span: `8ea086777bcfab850528431b5053047a408ddb0d54720d2aa3df1129f9543958`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
