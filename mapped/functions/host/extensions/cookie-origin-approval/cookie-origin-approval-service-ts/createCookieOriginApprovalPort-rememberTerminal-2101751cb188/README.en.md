# `createCookieOriginApprovalPort/rememberTerminal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-service.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542915-542922](../../../../../../../reference/runtime/host-main.cjs#L542915-L542922) | `ArrowFunctionExpression` | no | `requestId2, reply2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542915-542922](../../../../../../../reference/runtime/host-main.cjs#L542915-L542922) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:542915

Calls written directly in this body: `.next`, `terminalByRequestId.delete`, `terminalByRequestId.keys`, `terminalByRequestId.set`.

SHA-256 of the source span: `6afbd02feceda6a33da391eed6b5949d9f6d88f1dc2235603f3c2584c392ce14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
