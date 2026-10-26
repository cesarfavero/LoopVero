# `createServerAgentActivity/applyLive`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711077-711095](../../../../../../../reference/runtime/host-main.cjs#L711077-L711095) | `ArrowFunctionExpression` | no | `agentId, live` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711077-711095](../../../../../../../reference/runtime/host-main.cjs#L711077-L711095) | 4 | 0 | 0 | 0 | 0 | 0 |

### host:711077

Calls written directly in this body: `Math.max`, `Number`, `armStale`, `clock.now`, `liveOverlayOf`, `normalizeGrokBotSessionId`, `previous.staleTimer.dispose`, `state.sessions.delete`, `state.sessions.get`, `state.sessions.set`, `stateFor`.

SHA-256 of the source span: `ce6744a7e0561d67c08fbc28eeb248ed27643b6b91319486c80d3c6630412ef3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
