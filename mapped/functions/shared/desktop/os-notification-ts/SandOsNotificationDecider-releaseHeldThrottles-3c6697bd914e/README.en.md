# `SandOsNotificationDecider.releaseHeldThrottles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703404-703407](../../../../../../reference/runtime/host-main.cjs#L703404-L703407) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703404-703407](../../../../../../reference/runtime/host-main.cjs#L703404-L703407) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:703404

Calls written directly in this body: `this.heldThrottleKeys.clear`, `this.lastNotifiedAtMs.delete`.

SHA-256 of the source span: `26bf6a8c835eb0eadc28b1d3dfd751a73695c5763ee103d9f0041379280029a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
