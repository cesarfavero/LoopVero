# `WidgetResponses.applyReaction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783146-783167](../../../../../../../reference/runtime/host-main.cjs#L783146-L783167) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783146-783167](../../../../../../../reference/runtime/host-main.cjs#L783146-L783167) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:783146

Calls written directly in this body: `findEntry`, `isCurrentReaction`, `session.db.getEntryById`, `session.db.updateTranscriptEntry`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessions.activeSession.db.updateTranscriptEntry`, `updateEntry`.

SHA-256 of the source span: `0a530317adcdbd87697256f410c65bbc8cd3494d12a62a912927497a5d277aa8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
