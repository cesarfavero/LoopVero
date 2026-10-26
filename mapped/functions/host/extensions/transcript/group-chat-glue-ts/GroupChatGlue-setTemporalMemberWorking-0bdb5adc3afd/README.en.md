# `GroupChatGlue.setTemporalMemberWorking`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738712-738726](../../../../../../../reference/runtime/host-main.cjs#L738712-L738726) | `method` | no | `groupId, memberId, working` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738712-738726](../../../../../../../reference/runtime/host-main.cjs#L738712-L738726) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:738712

Calls written directly in this body: `.filter`, `this.activeTemporalMemberIdOf`, `this.tm.roster.emitAgentUpdate`, `this.workingTemporalMembersByGroup.delete`, `this.workingTemporalMembersByGroup.get`, `this.workingTemporalMembersByGroup.set`.

SHA-256 of the source span: `53b63d3a6d9c8cb45ec5c4bd0c20963e424b6614067efa72e5cf385e158c1f79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
