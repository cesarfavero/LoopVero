# `WidgetResponses.awaitBrokeredCredentialRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782894-782936](../../../../../../../reference/runtime/host-main.cjs#L782894-L782936) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782894-782936](../../../../../../../reference/runtime/host-main.cjs#L782894-L782936) | 7 | 0 | 3 | 3 | 0 | 1 |

### host:782894

Calls written directly in this body: `brokeredAccessOutcomeResolution`, `errorLogTag`, `reportHostDiagnostic`, `session.agentStore.dispose`, `session.db.close`, `session.db.getEntryById`, `session.db.updateTranscriptEntry`, `this.cancelCredentialRequestExpiry`, `this.tm.awaitBrokeredCredentialAccess`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.openSession`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.liveSessions.get`, `updateEntry`.

Assignment or increment targets: `outcome`.

SHA-256 of the source span: `a23f0491e06495b00b3420c5a36eb4f60809297d640244969a6f6e2cbaa0bde7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
