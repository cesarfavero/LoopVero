# `createCookieOriginApprovalPort/cancelRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-service.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542979-542982](../../../../../../../reference/runtime/host-main.cjs#L542979-L542982) | `ArrowFunctionExpression` | yes | `{ requestId: requestId2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542979-542982](../../../../../../../reference/runtime/host-main.cjs#L542979-L542982) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:542979

Calls written directly in this body: `deps.desktop.cancel`, `terminalByRequestId.delete`.

SHA-256 of the source span: `3f86201f273721b308d276476a512f29769e00de2202435ef7ccca77d90c17f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
