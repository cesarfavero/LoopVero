# `SandCookieOriginApprovalBridge.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542598-542605](../../../../../../../reference/runtime/host-main.cjs#L542598-L542605) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542598-542605](../../../../../../../reference/runtime/host-main.cjs#L542598-L542605) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:542598

Calls written directly in this body: `createExpiryPolicy`.

Assignment or increment targets: `this.askTtl`, `this.deps`.

SHA-256 of the source span: `deed23379d9c756c8f1f31430cf297eb5569ca62bb3a0e1cfce0acba0162e5ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
