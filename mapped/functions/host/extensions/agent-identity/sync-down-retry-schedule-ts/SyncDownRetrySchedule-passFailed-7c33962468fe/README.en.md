# `SyncDownRetrySchedule.passFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/sync-down-retry-schedule.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/sync-down-retry-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495048-495058](../../../../../../../reference/runtime/host-main.cjs#L495048-L495058) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495048-495058](../../../../../../../reference/runtime/host-main.cjs#L495048-L495058) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:495048

Calls written directly in this body: `this.cancelTimer`, `this.clock.schedule`.

Assignment or increment targets: `this.isFailing`, `this.timer`.

SHA-256 of the source span: `c68abea900f9516a50be9d48e23f10c66387ac6f214c6b0df96537e39631d1d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
