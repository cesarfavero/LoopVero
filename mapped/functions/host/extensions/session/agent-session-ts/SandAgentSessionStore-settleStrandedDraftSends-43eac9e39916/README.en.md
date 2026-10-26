# `SandAgentSessionStore.settleStrandedDraftSends`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723560-723562](../../../../../../../reference/runtime/host-main.cjs#L723560-L723562) | `method` | yes | `agentId, isInFlight` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723560-723562](../../../../../../../reference/runtime/host-main.cjs#L723560-L723562) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723560

Calls written directly in this body: `this.withAgentDb`.

SHA-256 of the source span: `731e8f3dafb19f88fa43854b49a98fd84c5366794b6774c1efdaea947d884c38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
