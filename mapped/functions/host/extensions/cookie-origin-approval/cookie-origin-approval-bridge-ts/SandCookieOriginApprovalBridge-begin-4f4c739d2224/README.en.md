# `SandCookieOriginApprovalBridge.begin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542709-542753](../../../../../../../reference/runtime/host-main.cjs#L542709-L542753) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542709-542753](../../../../../../../reference/runtime/host-main.cjs#L542709-L542753) | 6 | 0 | 0 | 4 | 0 | 1 |

### host:542709

Calls written directly in this body: `args.origins.map`, `new Set`, `provider.send`, `this.askTtl.arm`, `this.cancelledByRequestId.has`, `this.dropProvider`, `this.pending.has`, `this.pending.set`, `this.selectProvider`, `this.settledByRequestId.has`.

SHA-256 of the source span: `b216859cf3e691ee8313ed8f7a322c55c6c8ddd0cec8e82be47216d6b2cd2c9e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
