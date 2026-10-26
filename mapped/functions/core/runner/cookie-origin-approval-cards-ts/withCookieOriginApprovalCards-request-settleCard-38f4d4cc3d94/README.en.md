# `withCookieOriginApprovalCards/request/settleCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/cookie-origin-approval-cards.ts` · [Module README](../../../../../modules/core/runner/cookie-origin-approval-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775038-775046](../../../../../../reference/runtime/host-main.cjs#L775038-L775046) | `ArrowFunctionExpression` | no | `settlement` |
| [evaluation:574667-574675](../../../../../../reference/runtime/sand-eval-runner.cjs#L574667-L574675) | `ArrowFunctionExpression` | no | `settlement` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775038-775046](../../../../../../reference/runtime/host-main.cjs#L775038-L775046) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:574667-574675](../../../../../../reference/runtime/sand-eval-runner.cjs#L574667-L574675) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:775038

Calls written directly in this body: `host.transport.onUpdate`.

SHA-256 of the source span: `c235225f044c1c60bb5450ae9e9d5da08d1ac406687f49fc7e35b0b95636eca0`.

### evaluation:574667

Calls written directly in this body: `host.transport.onUpdate`.

SHA-256 of the source span: `ff4f635998a8c288e841628b7137161ecfbba8556ce1cf198f9042eacce94c7d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
