# `SandRunScheduler.pump`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739754-739813](../../../../../../../reference/runtime/host-main.cjs#L739754-L739813) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739754-739813](../../../../../../../reference/runtime/host-main.cjs#L739754-L739813) | 7 | 0 | 0 | 3 | 0 | 1 |

### host:739754

Calls written directly in this body: `Promise.reject`, `new Promise`, `next.task`, `queue.pendingAgent.shift`, `queue.pendingBackground.shift`, `takeNextUserTask`, `taskPromise.then`, `this.armWatchdog`, `this.clock.now`, `this.disarmWatchdog`, `this.options.telemetry.onDequeued`, `this.queues.get`.

Assignment or increment targets: `next`, `queue.active`, `queue.generationCounter`, `taskPromise`.

SHA-256 of the source span: `20c61c4473c5dbdc7fc812cce7b54f61cfc509282407f71ac08813b6907941f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
