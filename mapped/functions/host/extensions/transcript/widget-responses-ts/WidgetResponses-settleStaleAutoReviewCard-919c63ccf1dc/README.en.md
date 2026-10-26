# `WidgetResponses.settleStaleAutoReviewCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782513-782529](../../../../../../../reference/runtime/host-main.cjs#L782513-L782529) | `method` | yes | `{     agentId,     entryId,     requestId: requestId2   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782513-782529](../../../../../../../reference/runtime/host-main.cjs#L782513-L782529) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:782513

Calls written directly in this body: `.find`, `this.settlePendingAutoReviewApprovalsOnSession`, `this.tm.roster.emit`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingAutoReviewApprovals`, `this.tm.sessionStore.readAgentTranscriptEntries`.

SHA-256 of the source span: `984c805f6bb65e58055eee814c59e55e2843b94ea5925368735f9c41c30bf64a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
