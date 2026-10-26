# `SandCookieOriginApprovalBridge.park`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542653-542660](../../../../../../../reference/runtime/host-main.cjs#L542653-L542660) | `method` | no | `requestId2, pending` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542653-542660](../../../../../../../reference/runtime/host-main.cjs#L542653-L542660) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:542653

Calls written directly in this body: `this.represent`, `this.selectProvider`.

Assignment or increment targets: `pending.providerId`.

SHA-256 of the source span: `adb1c20546f97218f34b3abd486a1ac6abababb2e2d2d0d7904e609a2e0b7a33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
