# `emailTurnTools/reviewClaim`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-turn-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/email-turn-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765278-765292](../../../../../../../reference/runtime/host-main.cjs#L765278-L765292) | `ArrowFunctionExpression` | yes | `{ toolCallId, target, signal }` |
| [evaluation:558646-558660](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558646-L558660) | `ArrowFunctionExpression` | yes | `{ toolCallId, target, signal }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765278-765292](../../../../../../../reference/runtime/host-main.cjs#L765278-L765292) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558646-558660](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558646-L558660) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:765278

Calls written directly in this body: `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandEmailClaim`.

SHA-256 of the source span: `6c8418f2166d4d942825e1d69568315cd19e5d5bc9b7e071f63b0789d8c7b310`.

### evaluation:558646

Calls written directly in this body: `host.assertNoPendingAutoReviewApproval`, `host.getConversationId`, `reviewSandEmailClaim`.

SHA-256 of the source span: `6c8418f2166d4d942825e1d69568315cd19e5d5bc9b7e071f63b0789d8c7b310`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
