# `AgentLifecycle.interruptAgentForDeletion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733756-733761](../../../../../../../reference/runtime/host-main.cjs#L733756-L733761) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733756-733761](../../../../../../../reference/runtime/host-main.cjs#L733756-L733761) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:733756

Calls written directly in this body: `this.tm.groupChat.cancelTemporalMemberTurns`, `this.tm.runLifecycle.drainExclusiveRuns`, `this.tm.sessions.deletedAgentIds.add`, `this.tm.sessions.forgetStoredIdsAtDuplicate`.

SHA-256 of the source span: `c5713a3b1230816647d005afaae66470de6998f488cc73f95e02aeef93e6df08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
