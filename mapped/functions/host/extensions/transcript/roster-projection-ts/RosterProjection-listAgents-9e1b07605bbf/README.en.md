# `RosterProjection.listAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-projection.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-projection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739221-739231](../../../../../../../reference/runtime/host-main.cjs#L739221-L739231) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739221-739231](../../../../../../../reference/runtime/host-main.cjs#L739221-L739231) | 1 | 0 | 3 | 1 | 0 | 0 |

### host:739221

Calls written directly in this body: `this.rosterEmit.applySnapshotStamp`, `this.rosterEmit.reserveSnapshotStamp`, `this.rosterEmit.seedRosterCache`, `this.tm.runLifecycle.withRunStates`, `this.tm.sessionStore.listAgents`, `this.tm.sessions.getAnnouncedActiveAgentId`, `this.tm.sessions.restoreSession`.

SHA-256 of the source span: `54077a571baa295d30e3254b093876d49e3bb506286ba2ed48dcda49d6aef185`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
