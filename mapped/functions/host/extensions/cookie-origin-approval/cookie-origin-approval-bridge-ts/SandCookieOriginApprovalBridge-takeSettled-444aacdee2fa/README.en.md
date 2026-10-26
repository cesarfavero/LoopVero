# `SandCookieOriginApprovalBridge.takeSettled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542835-542841](../../../../../../../reference/runtime/host-main.cjs#L542835-L542841) | `method` | no | `requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542835-542841](../../../../../../../reference/runtime/host-main.cjs#L542835-L542841) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:542835

Calls written directly in this body: `settled.expiry.dispose`, `this.settledByRequestId.delete`, `this.settledByRequestId.get`.

SHA-256 of the source span: `159e5b37a92c2a943b2bb6da3f5ca4989403f3ade62bd930727e8240733f3a4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
