# `SandMobilePushNotifier.seedBaseline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/notifications/mobile-push-notifier.ts` · [Module README](../../../../../../modules/host/extensions/notifications/mobile-push-notifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703452-703455](../../../../../../../reference/runtime/host-main.cjs#L703452-L703455) | `method` | no | `agents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703452-703455](../../../../../../../reference/runtime/host-main.cjs#L703452-L703455) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:703452

Calls written directly in this body: `.map`, `agents.filter`, `this.decider.seedBaseline`, `this.flushPreSeedDeltas`.

SHA-256 of the source span: `fa14b61186d18be1f11a1a648932cb49ecf2dd57b6817245e81f4c2e9aeeb46b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
