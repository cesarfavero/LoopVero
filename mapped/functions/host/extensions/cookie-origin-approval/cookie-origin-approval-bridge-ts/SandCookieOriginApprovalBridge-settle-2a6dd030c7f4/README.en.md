# `SandCookieOriginApprovalBridge.settle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542852-542869](../../../../../../../reference/runtime/host-main.cjs#L542852-L542869) | `method` | no | `requestId2, outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542852-542869](../../../../../../../reference/runtime/host-main.cjs#L542852-L542869) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:542852

Calls written directly in this body: `pending.ttl.dispose`, `pending.waiters.clear`, `this.deps.clock.schedule`, `this.pending.delete`, `this.pending.get`, `this.settledByRequestId.set`, `waiter`.

SHA-256 of the source span: `36f9231435e6e42764ce3f4d5399fe429cfe66a3d53b0356486553e3af81f695`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
