# `SandCookieOriginApprovalBridge.awaitOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542754-542783](../../../../../../../reference/runtime/host-main.cjs#L542754-L542783) | `method` | no | `requestId2, waitMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542754-542783](../../../../../../../reference/runtime/host-main.cjs#L542754-L542783) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:542754

Calls written directly in this body: `Math.max`, `Math.min`, `Number.isFinite`, `Promise.resolve`, `new Promise`, `this.cancelledByRequestId.has`, `this.pending.get`, `this.takeSettled`.

SHA-256 of the source span: `50d3f34f1541a7370f0bf5531a267c2b36567b7b8cf876b1191a26f8aab1fd8c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
