# `FeedbackEntries.setFeedbackVote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/feedback-entries.ts` · [Module README](../../../../../../modules/host/extensions/transcript/feedback-entries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733151-733169](../../../../../../../reference/runtime/host-main.cjs#L733151-L733169) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733151-733169](../../../../../../../reference/runtime/host-main.cjs#L733151-L733169) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:733151

Calls written directly in this body: `findEntry`, `this.tm.roster.emit`, `this.tm.sessions.activeSession.db.updateTranscriptEntry`, `this.tm.sessions.ensureActionTarget`, `updateEntry`.

SHA-256 of the source span: `9af278d3f050c6e06fa3c35bd6ec914fcc5e57672795cce4e2513e6a80b887f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
