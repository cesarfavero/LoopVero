# `WidgetResponses.expireCredentialRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782869-782893](../../../../../../../reference/runtime/host-main.cjs#L782869-L782893) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782869-782893](../../../../../../../reference/runtime/host-main.cjs#L782869-L782893) | 7 | 0 | 2 | 3 | 0 | 0 |

### host:782869

Calls written directly in this body: `session.agentStore.dispose`, `session.db.close`, `session.db.getEntryById`, `session.db.updateTranscriptEntry`, `this.tm.clock.now`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.openSession`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.liveSessions.get`, `updateEntry`.

SHA-256 of the source span: `5dd4818591c6a98dcd05c076dcc20741c0617fe982ed0093515056e3444d7763`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
