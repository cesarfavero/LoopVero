# `RosterEmit.emitAgentUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-emit.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739061-739064](../../../../../../../reference/runtime/host-main.cjs#L739061-L739064) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739061-739064](../../../../../../../reference/runtime/host-main.cjs#L739061-L739064) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:739061

Calls written directly in this body: `this.pendingDeltaAgentIds.add`, `this.scheduleCoalescedEmit`.

SHA-256 of the source span: `e17e3366b34b3cc0d7a851642b60f6ac7b45fc48d456c12f2969ab9eaa196048`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
