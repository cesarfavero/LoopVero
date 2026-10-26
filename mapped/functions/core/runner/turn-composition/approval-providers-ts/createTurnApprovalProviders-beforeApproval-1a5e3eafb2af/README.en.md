# `createTurnApprovalProviders/beforeApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/turn-composition/approval-providers.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/approval-providers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583726-583733](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583726-L583733) | `ArrowFunctionExpression` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583726-583733](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583726-L583733) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:583726 uses an implicit arrow-function return.

### evaluation:583726

Calls written directly in this body: `localToolPermission.awaitDesktopStandingDecision`, `turnToolHost.getConversationId`.

SHA-256 of the source span: `b6064b5d205f97363f7b6d82259e08b7dbe3a366f95efcb2a3a8c5b4d07facef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
