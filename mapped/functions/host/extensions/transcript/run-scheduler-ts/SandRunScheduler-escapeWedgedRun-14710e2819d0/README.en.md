# `SandRunScheduler.escapeWedgedRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739883-739901](../../../../../../../reference/runtime/host-main.cjs#L739883-L739901) | `method` | no | `agentId, queue, active` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739883-739901](../../../../../../../reference/runtime/host-main.cjs#L739883-L739901) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:739883

Calls written directly in this body: `active.item.resolve`, `active.settled.then`, `queue.zombies.add`, `this.clock.now`, `this.options.telemetry.onWatchdog`, `this.pump`.

Assignment or increment targets: `queue.active`.

SHA-256 of the source span: `d1fc0fc9224527564fdb093af5e1a1531b85f2d1b79e211447560ad61d1887c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
