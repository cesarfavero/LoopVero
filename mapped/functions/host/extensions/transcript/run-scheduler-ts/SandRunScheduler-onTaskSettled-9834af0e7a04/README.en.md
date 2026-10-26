# `SandRunScheduler.onTaskSettled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739814-739833](../../../../../../../reference/runtime/host-main.cjs#L739814-L739833) | `method` | no | `agentId, queue, active, failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739814-739833](../../../../../../../reference/runtime/host-main.cjs#L739814-L739833) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:739814

Calls written directly in this body: `active.item.reject`, `active.item.resolve`, `this.clock.now`, `this.disarmWatchdog`, `this.options.telemetry.onWatchdog`, `this.pump`.

Assignment or increment targets: `queue.active`.

SHA-256 of the source span: `d50aef005f461375f51606c404b5213f223420ce8de712c4727b6ce352063433`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
