# `emailTurnTools/reviewSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-turn-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/email-turn-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765242-765267](../../../../../../../reference/runtime/host-main.cjs#L765242-L765267) | `ArrowFunctionExpression` | yes | `{ toolCallId, target, signal }` |
| [evaluation:558610-558635](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558610-L558635) | `ArrowFunctionExpression` | yes | `{ toolCallId, target, signal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765242-765267](../../../../../../../reference/runtime/host-main.cjs#L765242-L765267) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558610-558635](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558610-L558635) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:765242

Calls written directly in this body: `host.activeTurnAutomationWakeEmail`, `host.activeTurnAutomationWakeEmbedsExternalEvent`, `host.activeTurnRequestSource`, `host.assertNoPendingAutoReviewApproval`, `host.getAutoReviewInstructions`, `host.getConversationId`, `review.getUserInstructions`, `reviewSandEmailSend`.

SHA-256 of the source span: `861ba2567d2e68f181c22da4c7e91dc45c396bc5fc565fb13b156f58f3e2762c`.

### evaluation:558610

Calls written directly in this body: `host.activeTurnAutomationWakeEmail`, `host.activeTurnAutomationWakeEmbedsExternalEvent`, `host.activeTurnRequestSource`, `host.assertNoPendingAutoReviewApproval`, `host.getAutoReviewInstructions`, `host.getConversationId`, `review.getUserInstructions`, `reviewSandEmailSend`.

SHA-256 of the source span: `861ba2567d2e68f181c22da4c7e91dc45c396bc5fc565fb13b156f58f3e2762c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
