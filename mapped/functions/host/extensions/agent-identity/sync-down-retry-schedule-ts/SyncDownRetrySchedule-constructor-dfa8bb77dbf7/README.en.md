# `SyncDownRetrySchedule.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/sync-down-retry-schedule.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/sync-down-retry-schedule-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495030-495033](../../../../../../../reference/runtime/host-main.cjs#L495030-L495033) | `method` | no | `clock, retry2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495030-495033](../../../../../../../reference/runtime/host-main.cjs#L495030-L495033) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:495030

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.clock`, `this.retry`.

SHA-256 of the source span: `bcbf6c22dd04169e3bff1f376fcf0b5b5324465fcf51a40d30371fbc2f144f8c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
