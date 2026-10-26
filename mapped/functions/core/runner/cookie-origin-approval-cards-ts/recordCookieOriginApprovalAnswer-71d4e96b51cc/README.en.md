# `recordCookieOriginApprovalAnswer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-cards.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775010-775019](../../../../../../reference/runtime/host-main.cjs#L775010-L775019) | `FunctionDeclaration` | no | `audit, toolCallId, cardId, answer` |
| [evaluation:574639-574648](../../../../../../reference/runtime/sand-eval-runner.cjs#L574639-L574648) | `FunctionDeclaration` | no | `audit, toolCallId, cardId, answer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775010-775019](../../../../../../reference/runtime/host-main.cjs#L775010-L775019) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574639-574648](../../../../../../reference/runtime/sand-eval-runner.cjs#L574639-L574648) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:775010

Calls written directly in this body: `.ruleRefused`, `audit.recordHumanAnswer`, `humanOnlyReviewLedger`.

SHA-256 of the source span: `0bd133fd6f48cc5f5c9cf6cef96912a08240ed2a2aa59885823fe9f7c3b53e6f`.

### evaluation:574639

Calls written directly in this body: `.ruleRefused`, `audit.recordHumanAnswer`, `humanOnlyReviewLedger`.

SHA-256 of the source span: `0bd133fd6f48cc5f5c9cf6cef96912a08240ed2a2aa59885823fe9f7c3b53e6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
