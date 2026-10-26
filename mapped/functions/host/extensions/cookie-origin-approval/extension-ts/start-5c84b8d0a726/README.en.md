# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/extension.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542994-543028](../../../../../../../reference/runtime/host-main.cjs#L542994-L543028) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542994-543028](../../../../../../../reference/runtime/host-main.cjs#L542994-L543028) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:542994

Calls written directly in this body: `createCookieOriginApprovalPort`, `instrumentCookieOriginApproval`, `new SandCookieOriginApprovalBridge`, `realClock.now`, `sweepPendingCardsOnBoot`.

SHA-256 of the source span: `e5cd99398a9bd2405f2d8065ea4d6d1b5ea01c8d0986682968e1f01edba7a0c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
