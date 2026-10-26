# `SandCookieOriginApprovalBridge.rememberCancelled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542789-542796](../../../../../../../reference/runtime/host-main.cjs#L542789-L542796) | `method` | no | `requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542789-542796](../../../../../../../reference/runtime/host-main.cjs#L542789-L542796) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:542789

Calls written directly in this body: `.dispose`, `this.cancelledByRequestId.get`, `this.cancelledByRequestId.set`, `this.deps.clock.schedule`.

SHA-256 of the source span: `eda0150fbbb67a7715b14cc188640a20455435d49f8b21e0361dddd54b28c7c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
