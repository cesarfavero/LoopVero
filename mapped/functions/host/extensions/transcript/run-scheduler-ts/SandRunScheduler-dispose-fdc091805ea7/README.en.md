# `SandRunScheduler.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739724-739739](../../../../../../../reference/runtime/host-main.cjs#L739724-L739739) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739724-739739](../../../../../../../reference/runtime/host-main.cjs#L739724-L739739) | 0 | 2 | 0 | 0 | 0 | 0 |

### host:739724

Calls written directly in this body: `.then`, `Promise.resolve`, `queue.graceTimer.dispose`, `queue.pendingAgent.splice`, `queue.pendingBackground.splice`, `queue.pendingUser.splice`, `queue.watchdogTimer.dispose`, `this.queues.values`.

Assignment or increment targets: `queue.graceTimer`, `queue.watchdogTimer`, `this.disposed`.

SHA-256 of the source span: `8450833191594e17676a62f97402e55f1bfcf9c514a5aaec3fcf94b097519292`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
