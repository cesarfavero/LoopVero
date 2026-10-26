# `SandSessionConversationState.getSessionOutline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-conversation-state.ts` · [Module README](../../../../../../modules/host/extensions/session/session-conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720098-720101](../../../../../../../reference/runtime/host-main.cjs#L720098-L720101) | `method` | yes | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720098-720101](../../../../../../../reference/runtime/host-main.cjs#L720098-L720101) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:720098

Calls written directly in this body: `deriveOutlineFromConversationState`, `session.agentStore.getFullConversation`.

SHA-256 of the source span: `49f2187edbabe2ffcdd7e8ab8e3bf0babbbb8f884776c8594e11718e75078956`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
