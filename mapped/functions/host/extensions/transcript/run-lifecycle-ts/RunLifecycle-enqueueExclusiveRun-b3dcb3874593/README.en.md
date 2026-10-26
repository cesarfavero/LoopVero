# `RunLifecycle.enqueueExclusiveRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739956-739973](../../../../../../../reference/runtime/host-main.cjs#L739956-L739973) | `method` | no | `agentId, task, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739956-739973](../../../../../../../reference/runtime/host-main.cjs#L739956-L739973) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:739956

Calls written directly in this body: `.then`, `Promise.allSettled`, `Promise.resolve`, `previous.then`, `scheduler.enqueue`, `this.runChains.get`, `this.runChains.set`.

SHA-256 of the source span: `6c1a16f79c60064ff3936ba90b9fbafe9adc451ea759c35a79c68aef59d45579`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
