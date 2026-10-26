# `AgentLifecycle.deleteListedAndClearRoster`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733727-733752](../../../../../../../reference/runtime/host-main.cjs#L733727-L733752) | `method` | yes | `ids` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733727-733752](../../../../../../../reference/runtime/host-main.cjs#L733727-L733752) | 0 | 2 | 3 | 1 | 0 | 0 |

### host:733727

Calls written directly in this body: `Date.now`, `emptyDeleteStats`, `getTranscript`, `this.deleteAgentFiles`, `this.interruptAgentForDeletion`, `this.tm.boxHandoff.awaitingSink.clear`, `this.tm.boxHandoff.boxHandoffs.delete`, `this.tm.onAgentForgotten`, `this.tm.roster.emit`, `this.tm.roster.emitAgents`, `this.tm.sessions.clearActiveSession`, `this.tm.sessions.clearActiveTranscript`, `this.tm.sessions.invalidateDeferredActivation`, `this.tm.sessions.liveSessions.delete`, `this.tm.sessions.pendingSessionOpens.delete`, `this.tm.trayErrors.clearForAgent`.

Assignment or increment targets: `stats.diskDeleteMs`, `stats.drainMs`, `this.tm.sessions.loaded`.

SHA-256 of the source span: `643d19ef4974c54e141599ef9b9ae089d6935787f3567e505aaa6e8862a3fc85`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
