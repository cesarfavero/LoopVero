# `AgentToAgentMessaging.receiveFromPeer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-to-agent-messaging.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-to-agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:734507-734543](../../../../../../../reference/runtime/host-main.cjs#L734507-L734543) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734507-734543](../../../../../../../reference/runtime/host-main.cjs#L734507-L734543) | 6 | 0 | 4 | 7 | 0 | 0 |

### host:734507

Calls written directly in this body: `clampAgentMessage`, `roster.find`, `this.deliverPeerMessage`, `this.peerDeliveriesInFlight.delete`, `this.peerDeliveriesInFlight.get`, `this.peerDeliveriesInFlight.set`, `this.receivedPeerMessageIds.has`, `this.tm.sessionStore.listAgents`, `this.tm.sessions.isAgentGone`.

SHA-256 of the source span: `1fbcdfda82e4cfcb7ccaad6c2cb83e9caee36d6765fa8762277cd590b1543431`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
