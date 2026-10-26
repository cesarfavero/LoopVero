# `AgentToAgentMessaging.sendToAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734418-734472](../../../../../../../reference/runtime/host-main.cjs#L734418-L734472) | `method` | yes | `fromAgentId, toAgentId, text3, images = [], priority = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734418-734472](../../../../../../../reference/runtime/host-main.cjs#L734418-L734472) | 13 | 0 | 3 | 7 | 0 | 0 |

### host:734418

Calls written directly in this body: `Date.now`, `brandedId`, `clampAgentMessage`, `notes.join`, `notes.push`, `roster.find`, `this.appendAgentOutboundEntry`, `this.appendInbound`, `this.tm.postToGroup`, `this.tm.productAnalytics.trackEvent`, `this.tm.sessionStore.listAgents`, `this.tm.sessions.isAgentGone`.

SHA-256 of the source span: `2b939f04f36c020657cb94b4f85bb2766d578c26eddfb864bc28cc931b60938b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
