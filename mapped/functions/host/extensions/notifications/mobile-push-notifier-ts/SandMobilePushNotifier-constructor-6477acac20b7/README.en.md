# `SandMobilePushNotifier.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/notifications/mobile-push-notifier.ts` · [Module README](../../../../../../modules/host/extensions/notifications/mobile-push-notifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703442-703446](../../../../../../../reference/runtime/host-main.cjs#L703442-L703446) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703442-703446](../../../../../../../reference/runtime/host-main.cjs#L703442-L703446) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:703442

Calls written directly in this body: `new SandOsNotificationDecider`.

Assignment or increment targets: `this.decider`, `this.deps`, `this.now`.

SHA-256 of the source span: `216621eeb0d82958dbcbbe14c3a3a54ca3e8e4876aea58448db33d1deb88df32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
