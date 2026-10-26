# `SandCookieOriginApprovalBridge.submitResponses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/cookie-origin-approval/cookie-origin-approval-bridge.ts` · [Module README](../../../../../../modules/host/extensions/cookie-origin-approval/cookie-origin-approval-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542661-542708](../../../../../../../reference/runtime/host-main.cjs#L542661-L542708) | `method` | no | `batch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542661-542708](../../../../../../../reference/runtime/host-main.cjs#L542661-L542708) | 14 | 1 | 0 | 0 | 0 | 0 |

### host:542661

Calls written directly in this body: `this.deps.clock.now`, `this.providersById.get`, `this.settle`.

Assignment or increment targets: `provider.hasHeartbeat`, `provider.lastSeenAt`.

SHA-256 of the source span: `80089ff94c3285dd92f02aa34eeff63eaab73a532144b93463c6570671d285f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
