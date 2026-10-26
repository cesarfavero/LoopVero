# `SandSessionConversationState.readAgentThread`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-conversation-state.ts` · [Module README](../../../../../../modules/host/extensions/session/session-conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720141-720143](../../../../../../../reference/runtime/host-main.cjs#L720141-L720143) | `method` | no | `agentId, rootId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720141-720143](../../../../../../../reference/runtime/host-main.cjs#L720141-L720143) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720141

Calls written directly in this body: `this.withReadOnlyAgentDb`.

SHA-256 of the source span: `654ab946df33cdcad332bb4694f048c6b8bba428eb69ce6a7fee27eb9ac53bac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
