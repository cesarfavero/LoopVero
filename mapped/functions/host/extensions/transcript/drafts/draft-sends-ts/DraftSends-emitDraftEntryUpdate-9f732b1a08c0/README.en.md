# `DraftSends.emitDraftEntryUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-sends.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-sends-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737324-737335](../../../../../../../../reference/runtime/host-main.cjs#L737324-L737335) | `method` | no | `session, entryId, updater` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737324-737335](../../../../../../../../reference/runtime/host-main.cjs#L737324-L737335) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:737324

Calls written directly in this body: `session.db.getEntryById`, `this.isSessionOnScreen`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `updateEntry`, `updater`.

SHA-256 of the source span: `a868458e2f4edbd3317cb79232f1de995a3ad1ed93b550200f5a4eaa08174b48`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
