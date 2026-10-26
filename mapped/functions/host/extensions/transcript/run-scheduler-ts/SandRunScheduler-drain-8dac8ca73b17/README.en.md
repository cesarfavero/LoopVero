# `SandRunScheduler.drain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-scheduler.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-scheduler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739681-739692](../../../../../../../reference/runtime/host-main.cjs#L739681-L739692) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739681-739692](../../../../../../../reference/runtime/host-main.cjs#L739681-L739692) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:739681

Calls written directly in this body: `Promise.allSettled`, `queue.pendingAgent.map`, `queue.pendingBackground.map`, `queue.pendingUser.map`, `this.queues.get`.

SHA-256 of the source span: `7e27a1a94096feff32d0b124eba594879741ad2a2ba245e22eecb0686798e594`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
