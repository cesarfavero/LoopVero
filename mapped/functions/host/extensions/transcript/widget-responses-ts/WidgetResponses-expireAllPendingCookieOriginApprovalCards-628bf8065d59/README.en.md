# `WidgetResponses.expireAllPendingCookieOriginApprovalCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782650-782694](../../../../../../../reference/runtime/host-main.cjs#L782650-L782694) | `method` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782650-782694](../../../../../../../reference/runtime/host-main.cjs#L782650-L782694) | 3 | 1 | 2 | 1 | 0 | 3 |

### host:782650

Calls written directly in this body: `reportSweepFailure`, `this.settlePendingCookieOriginApprovalsOnSession`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingCookieOriginApprovals`, `this.tm.sessionStore.listAgentIds`.

Assignment or increment targets: `agentIds`, `expired`.

SHA-256 of the source span: `54d182a3e71075ee8aea2572a55bf74c6d0faada16edc181c360fc0e90184d09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
