# `SandOsNotificationDecider.gateTransitions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703379-703400](../../../../../../reference/runtime/host-main.cjs#L703379-L703400) | `method` | no | `transitions, input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703379-703400](../../../../../../reference/runtime/host-main.cjs#L703379-L703400) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:703379

Calls written directly in this body: `classifyNotifyDecision`, `out.push`, `this.dedupeAccountedMessages`, `this.lastNotifiedAtMs.get`, `this.lastNotifiedAtMs.set`, `throttleKey`.

SHA-256 of the source span: `5211642b5fb1c7c8c0d1c9b768065e1ab51dd6d2a9e4f2e29c9ee5f9834efc39`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
