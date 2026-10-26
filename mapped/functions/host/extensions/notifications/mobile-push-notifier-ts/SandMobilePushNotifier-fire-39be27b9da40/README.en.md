# `SandMobilePushNotifier.fire`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/notifications/mobile-push-notifier.ts` · [Module README](../../../../../../modules/host/extensions/notifications/mobile-push-notifier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703503-703515](../../../../../../../reference/runtime/host-main.cjs#L703503-L703515) | `method` | no | `transition` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703503-703515](../../../../../../../reference/runtime/host-main.cjs#L703503-L703515) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:703503

Calls written directly in this body: `.catch`, `parseAgentId`, `this.deps.notify`.

SHA-256 of the source span: `9156ac53cf240afb5a25f0627ad559022dd976f30093e57f7a22c8da76af6393`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
