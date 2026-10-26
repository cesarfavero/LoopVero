# `AgentLifecycle.updateAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733762-733782](../../../../../../../reference/runtime/host-main.cjs#L733762-L733782) | `method` | yes | `agentId, profile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733762-733782](../../../../../../../reference/runtime/host-main.cjs#L733762-L733782) | 5 | 0 | 3 | 1 | 0 | 0 |

### host:733762

Calls written directly in this body: `profile.avatarColor.trim`, `profile.avatarShape.trim`, `profile.description.trim`, `profile.name.trim`, `profile.title.trim`, `this.tm.roster.emitAgentUpdate`, `this.tm.roster.emitProfileChanged`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.summarizeOpenSession`, `this.tm.sessionStore.updateAgentProfile`, `this.tm.sessionStore.writeAgentProfileFile`.

Assignment or increment targets: `summary`.

SHA-256 of the source span: `608d83a70899cdb7f611d21d3adcbf0dc0d832e413886ef695081de8b5157d32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
