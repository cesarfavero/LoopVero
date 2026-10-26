# `WidgetResponses.settleStaleLocalToolPermissionCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782582-782603](../../../../../../../reference/runtime/host-main.cjs#L782582-L782603) | `method` | yes | `{     agentId,     entryId,     requestId: requestId2,     status = "expired"   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782582-782603](../../../../../../../reference/runtime/host-main.cjs#L782582-L782603) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:782582

Calls written directly in this body: `.find`, `this.settlePendingLocalToolPermissionAsksOnSession`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingLocalToolPermissionAsks`, `this.tm.sessionStore.readAgentTranscriptEntries`.

SHA-256 of the source span: `32d3581978a3fd27b1767dc9fcb26d344b578d559df5ed4fb98fffb979815d5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
