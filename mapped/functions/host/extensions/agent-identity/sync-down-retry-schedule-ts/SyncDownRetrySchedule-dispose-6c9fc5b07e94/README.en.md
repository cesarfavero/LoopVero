# `SyncDownRetrySchedule.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/sync-down-retry-schedule.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/sync-down-retry-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495062-495065](../../../../../../../reference/runtime/host-main.cjs#L495062-L495065) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495062-495065](../../../../../../../reference/runtime/host-main.cjs#L495062-L495065) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:495062

Calls written directly in this body: `this.cancelTimer`.

Assignment or increment targets: `this.isDisposed`.

SHA-256 of the source span: `9e3ab3ed970ab10a649f417bd4c8861b5f56ffb52fec56329e1c6a2c12256afb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
