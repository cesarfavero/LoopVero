# `SandCookieOriginApprovalBridge.cancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542784-542788](../../../../../../../reference/runtime/host-main.cjs#L542784-L542788) | `method` | no | `requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542784-542788](../../../../../../../reference/runtime/host-main.cjs#L542784-L542788) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:542784

Calls written directly in this body: `this.cancelAndRefuse`, `this.rememberCancelled`, `this.takeSettled`.

SHA-256 of the source span: `c960d8ec33b608b73708218781f73a4bfb4186d8316ff3a62268d75908edf9a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
