# `createCookieOriginApprovalPort/toGatewayReply`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-service.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542905-542910](../../../../../../../reference/runtime/host-main.cjs#L542905-L542910) | `ArrowFunctionExpression` | yes | `outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542905-542910](../../../../../../../reference/runtime/host-main.cjs#L542905-L542910) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:542905

Calls written directly in this body: `settleResolved`.

SHA-256 of the source span: `0ad576407013bd5f20a9d5a9c7b680847fb43d52cf55c5b6d6c5767f94005534`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
