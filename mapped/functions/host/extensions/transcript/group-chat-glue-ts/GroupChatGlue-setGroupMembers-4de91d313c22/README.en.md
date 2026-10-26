# `GroupChatGlue.setGroupMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738470-738502](../../../../../../../reference/runtime/host-main.cjs#L738470-L738502) | `method` | yes | `groupId, memberIds, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738470-738502](../../../../../../../reference/runtime/host-main.cjs#L738470-L738502) | 5 | 0 | 3 | 3 | 1 | 0 |

### host:738470

Calls written directly in this body: `.find`, `.map`, `.slice`, `allAgents.filter`, `allAgents.map`, `assertMembersAreNotGroups`, `currentConfig.memberIds.includes`, `new SandGroupMembersUnavailableError`, `new Set`, `requested.filter`, `this.localGroupConfig`, `this.tm.roster.emitAgents`, `this.tm.roster.finalizeSummaryForRpc`, `this.tm.roster.reserveSnapshotStamp`, `this.tm.sessionStore.getAgentDir`, `this.tm.sessionStore.listAgents`, `writeSandGroupConfig`.

Explicit throw targets: `SandGroupMembersUnavailableError`.

SHA-256 of the source span: `0fb188f64c9374b9c2cc51d3c2250b2af3298c9ddfd4c3ab86ec2d0dc73443e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
