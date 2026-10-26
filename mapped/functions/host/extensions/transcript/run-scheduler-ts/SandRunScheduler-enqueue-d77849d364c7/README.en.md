# `SandRunScheduler.enqueue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739633-739680](../../../../../../../reference/runtime/host-main.cjs#L739633-L739680) | `method` | no | `agentId, task, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739633-739680](../../../../../../../reference/runtime/host-main.cjs#L739633-L739680) | 9 | 0 | 0 | 2 | 0 | 0 |

### host:739633

Calls written directly in this body: `.then`, `Promise.resolve`, `new Promise`, `queue.pendingAgent.push`, `queue.pendingBackground.push`, `queue.pendingUser.push`, `this.armWatchdog`, `this.clock.now`, `this.options.telemetry.onAccepted`, `this.queueFor`.

Assignment or increment targets: `pendingAhead`.

SHA-256 of the source span: `b4e77dae5d4c957445b5d4c10a5b760e13c24e44da2ccf2df32e103d2214c52e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
