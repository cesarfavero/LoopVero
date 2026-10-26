# `groupChatMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `shared/agents/group-chat.ts` · [Module README](../../../../../modules/shared/agents/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490991-491000](../../../../../../reference/runtime/host-main.cjs#L490991-L491000) | `FunctionDeclaration` | no | `agent, agents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490991-491000](../../../../../../reference/runtime/host-main.cjs#L490991-L491000) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490991

Calls written directly in this body: `.filter`, `agent.memberIds.flatMap`, `agents.map`, `groupChatPeople`, `new Map`.

SHA-256 of the source span: `15f899e075ecd1816224be9d4ca3618b13a67ff029a76d2cfa59d688df5c4f9e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
