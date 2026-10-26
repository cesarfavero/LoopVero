# `SandOsNotificationDecider.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703274-703277](../../../../../../reference/runtime/host-main.cjs#L703274-L703277) | `method` | no | `throttleWindowMs = SAND_OS_NOTIFICATION_THROTTLE_MS, dedupe = "last-message"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703274-703277](../../../../../../reference/runtime/host-main.cjs#L703274-L703277) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:703274

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.dedupe`, `this.throttleWindowMs`.

SHA-256 of the source span: `d0b8747a756e4d9bdf9c12f6e9237299761f17a1c34d23aaedbd0c9009a54302`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
