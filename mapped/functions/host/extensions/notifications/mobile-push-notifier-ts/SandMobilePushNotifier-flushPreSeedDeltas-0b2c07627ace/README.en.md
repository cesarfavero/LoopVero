# `SandMobilePushNotifier.flushPreSeedDeltas`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/notifications/mobile-push-notifier.ts` · [Module README](../../../../../../modules/host/extensions/notifications/mobile-push-notifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703492-703502](../../../../../../../reference/runtime/host-main.cjs#L703492-L703502) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703492-703502](../../../../../../../reference/runtime/host-main.cjs#L703492-L703502) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:703492

Calls written directly in this body: `this.handleAgentUpsertedEvent`.

Assignment or increment targets: `this.hasSeededBaseline`, `this.preSeedDeltas`.

SHA-256 of the source span: `ea384be8327b8074ae9803257fffd4635c2658fab626586b7872e2d677b0738b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
