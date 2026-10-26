# `RosterEmit.runEmitAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-emit.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739020-739041](../../../../../../../reference/runtime/host-main.cjs#L739020-L739041) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739020-739041](../../../../../../../reference/runtime/host-main.cjs#L739020-L739041) | 2 | 0 | 2 | 1 | 0 | 0 |

### host:739020

Calls written directly in this body: `this.applySnapshotStamp`, `this.emitter.emit`, `this.replicaWriter.nextStamp`, `this.reserveSnapshotStamp`, `this.tm.runLifecycle.withRunStates`, `this.tm.sessionStore.listAgents`, `this.tm.sessions.getAnnouncedActiveAgentId`, `this.tm.sessions.restoreSession`.

Assignment or increment targets: `this.cachedAgentSummaries`, `this.lastEmittedActiveAgentId`, `this.rosterCacheSeeded`.

SHA-256 of the source span: `17243041715963c0fecb01438e66a6ad2cba1c67e8063b80827ae02b3dd88b09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
