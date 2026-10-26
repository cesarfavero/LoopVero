# `SandMobilePushNotifier.handleAgentsEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/notifications/mobile-push-notifier.ts` · [Module README](../../../../../../modules/host/extensions/notifications/mobile-push-notifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703456-703468](../../../../../../../reference/runtime/host-main.cjs#L703456-L703468) | `method` | no | `event, presence` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703456-703468](../../../../../../../reference/runtime/host-main.cjs#L703456-L703468) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:703456

Calls written directly in this body: `.map`, `event.agents.filter`, `this.decider.decide`, `this.fire`, `this.flushPreSeedDeltas`, `this.resolvePresence`.

SHA-256 of the source span: `dd21a0ca1c074fb5a4a37e8b37e74e5db4131ad8d889047e63b52c6c2cbf88ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
