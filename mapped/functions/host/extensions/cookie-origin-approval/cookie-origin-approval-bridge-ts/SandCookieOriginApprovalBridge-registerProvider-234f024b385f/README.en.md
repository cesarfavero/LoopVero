# `SandCookieOriginApprovalBridge.registerProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542616-542632](../../../../../../../reference/runtime/host-main.cjs#L542616-L542632) | `method` | no | `send` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542616-542632](../../../../../../../reference/runtime/host-main.cjs#L542616-L542632) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:542616

Calls written directly in this body: `send`, `this.deps.clock.now`, `this.providers.add`, `this.providersById.set`, `this.represent`.

SHA-256 of the source span: `cf23d046ab8d16a978bee067e6a05af852fd3efad734752a25fd29545c56427d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
