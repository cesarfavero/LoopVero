# `SandCookieOriginApprovalBridge.dropProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542633-542639](../../../../../../../reference/runtime/host-main.cjs#L542633-L542639) | `method` | no | `provider` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542633-542639](../../../../../../../reference/runtime/host-main.cjs#L542633-L542639) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:542633

Calls written directly in this body: `this.park`, `this.providers.delete`, `this.providersById.delete`.

SHA-256 of the source span: `3af7d2d285557d02636645a312a4bb004ea81db5b38ce6f27ccd00db3f7c89b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
