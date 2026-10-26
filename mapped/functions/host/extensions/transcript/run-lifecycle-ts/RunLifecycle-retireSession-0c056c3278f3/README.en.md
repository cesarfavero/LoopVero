# `RunLifecycle.retireSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740020-740046](../../../../../../../reference/runtime/host-main.cjs#L740020-L740046) | `method` | yes | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740020-740046](../../../../../../../reference/runtime/host-main.cjs#L740020-L740046) | 8 | 0 | 2 | 6 | 0 | 1 |

### host:740020

Calls written directly in this body: `errorLogTag`, `reportFallback`, `session.agentStore.dispose`, `session.db.close`, `this.inFlightRunCounts.has`, `this.retiringSessions.add`, `this.retiringSessions.has`, `this.tm.hostLog`, `this.tm.sessions.deferSessionRetirementWhileActivating`, `this.tm.sessions.deletedAgentIds.has`, `this.tm.sessions.liveSessions.delete`, `this.tm.sessions.liveSessions.get`, `this.tm.sessions.pendingSessionOpens.delete`, `this.tm.sessions.pendingSessionOpens.get`, `this.tm.sessions.settledOpen`.

SHA-256 of the source span: `52cce932211d71ca07f552007b19fa5b74a3d2b03205ae27460a89ad0426b67e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
