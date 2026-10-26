# `SandCookieOriginApprovalBridge.selectProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542870-542880](../../../../../../../reference/runtime/host-main.cjs#L542870-L542880) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542870-542880](../../../../../../../reference/runtime/host-main.cjs#L542870-L542880) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:542870

Calls written directly in this body: `isLive`, `this.deps.clock.now`.

Assignment or increment targets: `best`.

SHA-256 of the source span: `b301bc6c5faf8c1594ef5e5d5fdc32024bfaa0f4d39903d4e16cb3c592c1f124`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
