# `RosterEmit.runEmitAgentUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-emit.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739065-739121](../../../../../../../reference/runtime/host-main.cjs#L739065-L739121) | `method` | yes | `agentId, pendingSiblingAgentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739065-739121](../../../../../../../reference/runtime/host-main.cjs#L739065-L739121) | 6 | 0 | 7 | 9 | 0 | 2 |

### host:739065

Calls written directly in this body: `errorLogTag`, `isSameRosterRow`, `reconciled.find`, `reconciled.some`, `reportFallback`, `this.applySnapshotStamp`, `this.buildAgentSummary`, `this.cachedAgentSummaries.find`, `this.emitter.emit`, `this.replicaWriter.nextStamp`, `this.reserveSnapshotStamp`, `this.runEmitAgents`, `this.tm.hostLog`, `this.tm.runLifecycle.withRunStates`, `this.tm.sessions.getAnnouncedActiveAgentId`, `this.tm.sessions.restoreSession`, `upsertAgentSummary`.

Assignment or increment targets: `this.cachedAgentSummaries`, `this.lastEmittedActiveAgentId`.

SHA-256 of the source span: `34ad41e4e7f08497fc556279e3d6823e33e287393cd38476cd352c1f79e02cab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
