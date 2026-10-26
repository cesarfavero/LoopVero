# `WidgetResponses.expireAllPendingVirtualCardApprovalCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/widget-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:782788-782831](../../../../../../../reference/runtime/host-main.cjs#L782788-L782831) | `method` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782788-782831](../../../../../../../reference/runtime/host-main.cjs#L782788-L782831) | 3 | 1 | 2 | 1 | 0 | 3 |

### host:782788

Calls written directly in this body: `reportSweepFailure`, `this.settlePendingVirtualCardOnSession`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.expirePendingVirtualCardApprovals`, `this.tm.sessionStore.listAgentIds`.

Assignment or increment targets: `agentIds`.

SHA-256 of the source span: `5b7276a3d425749a5e708db765eedbc54c3340949f09b181dd512edd4d75540b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
