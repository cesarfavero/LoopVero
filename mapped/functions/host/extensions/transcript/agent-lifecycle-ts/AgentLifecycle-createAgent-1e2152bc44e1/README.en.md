# `AgentLifecycle.createAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733469-733487](../../../../../../../reference/runtime/host-main.cjs#L733469-L733487) | `method` | yes | `profile, origin = "user", options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733469-733487](../../../../../../../reference/runtime/host-main.cjs#L733469-L733487) | 1 | 0 | 5 | 1 | 1 | 0 |

### host:733469

Calls written directly in this body: `Date.now`, `getTranscript`, `new SandAgentLifecycleError`, `this.mintAgentSession`, `this.tm.roster.emit`, `this.tm.roster.emitAgents`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.markSessionViewed`, `this.tm.sessionStore.summarizeOpenSession`, `this.tm.sessions.clearActiveTranscript`, `this.tm.sessions.invalidateDeferredActivation`, `this.tm.sessions.markSessionLeftBehind`, `this.tm.sessions.replaceSession`.

Explicit throw targets: `SandAgentLifecycleError`.

SHA-256 of the source span: `89344842f60c655c5dd86742dab9397585aa5ace60fd37f14dc98a146399b747`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
