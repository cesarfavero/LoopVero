# `WidgetResponses.rollbackWidgetResponse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783125-783134](../../../../../../../reference/runtime/host-main.cjs#L783125-L783134) | `method` | no | `entryId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783125-783134](../../../../../../../reference/runtime/host-main.cjs#L783125-L783134) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:783125

Calls written directly in this body: `this.tm.roster.emit`, `this.tm.sessions.activeSession.db.updateTranscriptEntry`, `updateEntry`.

SHA-256 of the source span: `02c0eed9e444b418e4ec366b861408793661a283ae030df7a70aa2fe91021a87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
