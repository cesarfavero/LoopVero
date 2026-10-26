# `AgentLifecycle.seedConversationName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733783-733803](../../../../../../../reference/runtime/host-main.cjs#L733783-L733803) | `method` | yes | `{     id,     prompt   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733783-733803](../../../../../../../reference/runtime/host-main.cjs#L733783-L733803) | 4 | 0 | 3 | 1 | 0 | 0 |

### host:733783

Calls written directly in this body: `conversationNameFromPrompt`, `seedRoomProfileName`, `this.tm.roster.emitAgentUpdate`, `this.tm.roster.emitProfileChanged`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.lastKnownAgentNames.set`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.getAgentDir`, `this.tm.sessionStore.summarizeAgentById`, `this.tm.sessionStore.summarizeOpenSession`.

SHA-256 of the source span: `e3edb72fbb5e6db45a408ef76389c8ffe353078396901889ad5a2e165149bd05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
