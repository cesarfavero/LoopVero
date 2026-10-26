# `WidgetResponses.restoreCredentialRequestExpiryTimers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782419-782474](../../../../../../../reference/runtime/host-main.cjs#L782419-L782474) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782419-782474](../../../../../../../reference/runtime/host-main.cjs#L782419-L782474) | 5 | 2 | 3 | 1 | 0 | 3 |

### host:782419

Calls written directly in this body: `errorLogTag`, `parseCredentialRequest`, `reportHostDiagnostic`, `session.agentStore.dispose`, `session.db.close`, `session.db.getTranscriptEntries`, `this.awaitBrokeredCredentialRequest`, `this.scheduleCredentialRequestExpiry`, `this.tm.sessionStore.listAgentIds`, `this.tm.sessionStore.openSession`, `this.tm.sessions.isAgentGone`, `this.tm.sessions.liveSessions.get`.

Assignment or increment targets: `agentIds`, `session`.

SHA-256 of the source span: `78482e6b1977a3652ea4996625556f7e57ee4e2c979ff3396b51b972700bbdad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
