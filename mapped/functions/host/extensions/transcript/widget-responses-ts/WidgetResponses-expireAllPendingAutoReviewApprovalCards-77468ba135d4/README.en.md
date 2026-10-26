# `WidgetResponses.expireAllPendingAutoReviewApprovalCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782530-782566](../../../../../../../reference/runtime/host-main.cjs#L782530-L782566) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782530-782566](../../../../../../../reference/runtime/host-main.cjs#L782530-L782566) | 3 | 1 | 2 | 1 | 0 | 3 |

### host:782530

Calls written directly in this body: `recordSweepFailure`, `this.settlePendingAutoReviewApprovalsOnSession`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingAutoReviewApprovals`, `this.tm.sessionStore.listAgentIds`.

Assignment or increment targets: `agentIds`, `expired`.

SHA-256 of the source span: `1d9becb95f87bd96cec3aba35acce50f43ba2e785f9086d3c7b335d41cc569ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
