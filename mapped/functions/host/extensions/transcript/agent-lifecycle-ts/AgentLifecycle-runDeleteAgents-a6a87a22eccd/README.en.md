# `AgentLifecycle.runDeleteAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733634-733726](../../../../../../../reference/runtime/host-main.cjs#L733634-L733726) | `method` | yes | `ids` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733634-733726](../../../../../../../reference/runtime/host-main.cjs#L733634-L733726) | 6 | 5 | 16 | 4 | 0 | 1 |

### host:733634

Calls written directly in this body: `.filter`, `.find`, `Date.now`, `active.agentStore.dispose`, `emptyDeleteStats`, `errorLogTag`, `getTranscript`, `ids.has`, `new Set`, `retained.agentStore.dispose`, `this.deleteAgentFiles`, `this.deleteListedAndClearRoster`, `this.interruptAgentForDeletion`, `this.tm.boxHandoff.awaitingSink.clear`, `this.tm.boxHandoff.boxHandoffs.delete`, `this.tm.hostLog`, `this.tm.onAgentForgotten`, `this.tm.roster.emit`, `this.tm.roster.emitAgents`, `this.tm.runLifecycle.closeSessionWhenIdle`, `this.tm.runLifecycle.watchActiveSession`, `this.tm.sessionStore.getTranscriptEntries`, `this.tm.sessionStore.listAgentRecordIds`, `this.tm.sessionStore.listAgents`, `this.tm.sessionStore.markSessionViewed`, `this.tm.sessions.clearActiveSession`, `this.tm.sessions.clearActiveTranscript`, `this.tm.sessions.invalidateDeferredActivation`, `this.tm.sessions.liveSessions.delete`, `this.tm.sessions.liveSessions.get`, `this.tm.sessions.openSessionOnce`, `this.tm.sessions.pendingSessionOpens.delete`, `this.tm.sessions.pendingSessionOpens.get`, `this.tm.sessions.restoreSession`, `this.tm.sessions.setActiveSession`, `this.tm.sessions.setActiveTranscript`, `this.tm.sessions.settledOpen`, `this.tm.trayErrors.clearForAgent`.

Assignment or increment targets: `nextSession`, `stats.deletedActive`, `stats.diskDeleteMs`, `stats.drainMs`, `stats.successorMs`, `this.tm.sessions.loaded`.

SHA-256 of the source span: `9b9f786c42f95f367739a6f6b8c70ab3dbff55222dad6773beb04dc77b04f516`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
