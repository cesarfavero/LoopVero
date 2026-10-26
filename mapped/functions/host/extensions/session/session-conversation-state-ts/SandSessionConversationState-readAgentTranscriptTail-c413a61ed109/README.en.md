# `SandSessionConversationState.readAgentTranscriptTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-conversation-state.ts` · [Module README](../../../../../../modules/host/extensions/session/session-conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720138-720140](../../../../../../../reference/runtime/host-main.cjs#L720138-L720140) | `method` | no | `agentId, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720138-720140](../../../../../../../reference/runtime/host-main.cjs#L720138-L720140) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720138

Calls written directly in this body: `this.withReadOnlyAgentDb`.

SHA-256 of the source span: `c0439e7fc826d750385ac37ab991dbde48253cbec82e56afeb66878a2932b2f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
