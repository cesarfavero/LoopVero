# `WidgetResponses.settlePendingVirtualCardOnSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782756-782787](../../../../../../../reference/runtime/host-main.cjs#L782756-L782787) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782756-782787](../../../../../../../reference/runtime/host-main.cjs#L782756-L782787) | 10 | 1 | 0 | 2 | 0 | 0 |

### host:782756

Calls written directly in this body: `session.db.getTranscriptEntries`, `session.db.updateTranscriptEntry`, `settlePendingVirtualCardApprovalEntry`, `this.tm.roster.emit`, `this.tm.sessions.liveSessions.get`, `unlessRequestId`, `updateEntry`.

Assignment or increment targets: `retired`.

SHA-256 of the source span: `4381e6cf797dea473e680af389de20dd24108b021d36cce3e8e9e31e4af16dc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
