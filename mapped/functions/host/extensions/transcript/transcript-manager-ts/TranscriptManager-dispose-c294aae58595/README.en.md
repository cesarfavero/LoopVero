# `TranscriptManager.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/transcript-manager.ts` · [Module README](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783271-783292](../../../../../../../reference/runtime/host-main.cjs#L783271-L783292) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783271-783292](../../../../../../../reference/runtime/host-main.cjs#L783271-L783292) | 2 | 2 | 5 | 0 | 0 | 0 |

### host:783271

Calls written directly in this body: `Promise.allSettled`, `new Set`, `session.agentStore.dispose`, `session.db.close`, `sessions.add`, `this.boxHandoff.boxHandoffs.clear`, `this.roster.emitsSettled`, `this.runLifecycle.runScheduler.dispose`, `this.sessionStore.closeWorkerPool`, `this.sessions.liveSessions.clear`, `this.sessions.liveSessions.values`, `this.sessions.pendingSessionOpens.clear`, `this.sessions.pendingSessionOpens.values`, `this.sessions.settledOpen`, `this.unwatchActiveSession`, `this.widgetResponses.dispose`.

Assignment or increment targets: `this.disposed`.

SHA-256 of the source span: `9556b6dcc6e1ab3c98e71b0b16a82cc866fafc3e0dbdfa53263f32374ff2d235`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
