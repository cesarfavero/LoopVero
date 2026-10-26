# `RunLifecycle.drainExclusiveRuns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739974-739980](../../../../../../../reference/runtime/host-main.cjs#L739974-L739980) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739974-739980](../../../../../../../reference/runtime/host-main.cjs#L739974-L739980) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:739974

Calls written directly in this body: `this.runChains.get`, `this.runScheduler.drain`.

SHA-256 of the source span: `4048ff11640082f46ac7055e430bee2f24df8b857853b0b01a0cd124ad2fc5f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
