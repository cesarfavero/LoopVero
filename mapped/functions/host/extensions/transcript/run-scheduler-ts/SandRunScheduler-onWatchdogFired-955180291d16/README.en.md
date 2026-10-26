# `SandRunScheduler.onWatchdogFired`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739857-739882](../../../../../../../reference/runtime/host-main.cjs#L739857-L739882) | `method` | no | `agentId, queue` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739857-739882](../../../../../../../reference/runtime/host-main.cjs#L739857-L739882) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:739857

Calls written directly in this body: `this.armWatchdog`, `this.clock.now`, `this.clock.schedule`, `this.options.telemetry.onWatchdog`, `this.waitedBehindActiveMs`.

Assignment or increment targets: `active.phase`, `queue.graceTimer`.

SHA-256 of the source span: `a2233d111d2bf0307312636295a9f1ec8cabb0b00aeaec5f67680f8b018a3a0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
