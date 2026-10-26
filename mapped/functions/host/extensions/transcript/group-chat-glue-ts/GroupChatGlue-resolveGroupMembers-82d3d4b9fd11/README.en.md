# `GroupChatGlue.resolveGroupMembers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738582-738605](../../../../../../../reference/runtime/host-main.cjs#L738582-L738605) | `method` | yes | `memberIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738582-738605](../../../../../../../reference/runtime/host-main.cjs#L738582-L738605) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:738582

Calls written directly in this body: `getSandProfilePath`, `isSandGroupDir`, `members2.push`, `parseAgentId`, `profile.name.trim`, `readSandProfileFile`, `this.tm.hostLog`, `this.tm.sessionStore.getAgentDir`.

SHA-256 of the source span: `0702967042b5e4c0e91a3f41b12229dbab2a50ecfaca6b0d3f20925993d33e37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
