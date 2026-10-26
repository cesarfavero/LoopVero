# `GroupChatGlue.resolveGroupMemberIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738441-738454](../../../../../../../reference/runtime/host-main.cjs#L738441-L738454) | `method` | yes | `requestedMemberIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738441-738454](../../../../../../../reference/runtime/host-main.cjs#L738441-L738454) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:738441

Calls written directly in this body: `.map`, `.slice`, `allAgents.filter`, `allAgents.map`, `assertMembersAreNotGroups`, `new SandGroupCreateError`, `new Set`, `requested.filter`, `this.tm.sessionStore.listAgents`.

Explicit throw targets: `SandGroupCreateError`.

SHA-256 of the source span: `8b94fe8ce95d8896ef18a70381ff66723072d6c9c4213300c55d4432c435b545`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
