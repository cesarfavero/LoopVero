# `withCookieOriginApprovalCards/request`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-cards.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775022-775070](../../../../../../reference/runtime/host-main.cjs#L775022-L775070) | `ArrowFunctionExpression` | yes | `request5` |
| [evaluation:574651-574699](../../../../../../reference/runtime/sand-eval-runner.cjs#L574651-L574699) | `ArrowFunctionExpression` | yes | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775022-775070](../../../../../../reference/runtime/host-main.cjs#L775022-L775070) | 2 | 0 | 2 | 2 | 1 | 1 |
| [evaluation:574651-574699](../../../../../../reference/runtime/sand-eval-runner.cjs#L574651-L574699) | 2 | 0 | 2 | 2 | 1 | 1 |

### host:775022

Calls written directly in this body: `Date.now`, `cookieOriginApprovalAnswer`, `cookieOriginApprovalCardSettlement`, `cookieOriginApprovalItemsFromOrigins`, `host.getConversationId`, `host.transport.onUpdate`, `port.request`, `record3`, `settleCard`.

Assignment or increment targets: `outcome`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `05797cb16e0688085b639b5e3a5edc423b8fffbb1dad21dbee78f1084ef42047`.

### evaluation:574651

Calls written directly in this body: `Date.now`, `cookieOriginApprovalAnswer`, `cookieOriginApprovalCardSettlement`, `cookieOriginApprovalItemsFromOrigins`, `host.getConversationId`, `host.transport.onUpdate`, `port.request`, `record4`, `settleCard`.

Assignment or increment targets: `outcome`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `80ac9b258dd0eb5981e17044274fcc46f11b9699555da017a7f551874ab53c76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
