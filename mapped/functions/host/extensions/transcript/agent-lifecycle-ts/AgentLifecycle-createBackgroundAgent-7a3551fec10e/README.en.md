# `AgentLifecycle.createBackgroundAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733488-733503](../../../../../../../reference/runtime/host-main.cjs#L733488-L733503) | `method` | yes | `profile, origin = "user", options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733488-733503](../../../../../../../reference/runtime/host-main.cjs#L733488-L733503) | 1 | 0 | 4 | 1 | 1 | 0 |

### host:733488

Calls written directly in this body: `new SandAgentLifecycleError`, `nextSession.agentStore.dispose`, `nextSession.db.close`, `nextSession.db.getTranscriptEntries`, `this.mintAgentSession`, `this.tm.roster.emitAgents`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.summarizeOpenSession`.

Explicit throw targets: `SandAgentLifecycleError`.

SHA-256 of the source span: `0831a9b3a1b4699b2988a41144350979bab89c1052d33c5ac373f0de4fffe779`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
