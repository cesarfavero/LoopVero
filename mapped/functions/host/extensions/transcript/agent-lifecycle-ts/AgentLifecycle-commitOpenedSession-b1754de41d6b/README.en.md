# `AgentLifecycle.commitOpenedSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733560-733585](../../../../../../../reference/runtime/host-main.cjs#L733560-L733585) | `method` | yes | `{     session,     entries,     agent   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733560-733585](../../../../../../../reference/runtime/host-main.cjs#L733560-L733585) | 0 | 0 | 4 | 1 | 0 | 0 |

### host:733560

Calls written directly in this body: `Date.now`, `getTranscript`, `publishTranscriptMutation`, `this.tm.roster.emit`, `this.tm.roster.emitAgents`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.markSessionViewed`, `this.tm.sessionStore.summarizeOpenSession`, `this.tm.sessions.invalidateDeferredActivation`, `this.tm.sessions.markSessionLeftBehind`, `this.tm.sessions.replaceSession`, `this.tm.sessions.setActiveTranscript`.

Assignment or increment targets: `this.tm.sessions.loaded`.

SHA-256 of the source span: `e05393e18830048f82a86a8a287c2038f4ce21cfffa1d187354dc82f20a8da1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
