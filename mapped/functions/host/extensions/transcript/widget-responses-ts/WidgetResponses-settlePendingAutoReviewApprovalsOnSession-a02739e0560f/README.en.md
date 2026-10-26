# `WidgetResponses.settlePendingAutoReviewApprovalsOnSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782567-782581](../../../../../../../reference/runtime/host-main.cjs#L782567-L782581) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782567-782581](../../../../../../../reference/runtime/host-main.cjs#L782567-L782581) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:782567

Calls written directly in this body: `session.db.getTranscriptEntries`, `session.db.updateTranscriptEntry`, `settlePendingAutoReviewApprovalEntry`, `this.tm.roster.emit`, `this.tm.sessions.liveSessions.get`, `updateEntry`.

Assignment or increment targets: `retired`.

SHA-256 of the source span: `50fe8055867e3c674a69cd4f77b24fee125b86d2f2c76d0f0214483ed7e035af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
