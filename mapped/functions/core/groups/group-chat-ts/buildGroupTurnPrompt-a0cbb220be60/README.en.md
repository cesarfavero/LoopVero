# `buildGroupTurnPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491408-491434](../../../../../../reference/runtime/host-main.cjs#L491408-L491434) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491408-491434](../../../../../../reference/runtime/host-main.cjs#L491408-L491434) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:491408

Calls written directly in this body: `.join`, `describedPeers.map`, `formatGroupChatTag`, `formatGroupHistory`, `group.description.trim`, `lines2.join`, `lines2.push`, `peers.filter`.

SHA-256 of the source span: `87dc1f63c83cbe20207ca9deb70255b3820887b26ae1354bff318d49e1a30135`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
