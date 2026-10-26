# `SandCookieOriginApprovalBridge.cancelAndRefuse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542842-542851](../../../../../../../reference/runtime/host-main.cjs#L542842-L542851) | `method` | no | `requestId2, message, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542842-542851](../../../../../../../reference/runtime/host-main.cjs#L542842-L542851) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:542842

Calls written directly in this body: `bound.send`, `this.pending.get`, `this.providersById.get`, `this.settle`.

SHA-256 of the source span: `c6f4e499ffac8a9b307d21a43de1ce374da4433e8e0a4f8f5f38f62f8451e134`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
