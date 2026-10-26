# `GroupChatGlue.receiveRoomMemberTurnResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738703-738705](../../../../../../../reference/runtime/host-main.cjs#L738703-L738705) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738703-738705](../../../../../../../reference/runtime/host-main.cjs#L738703-L738705) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738703

Calls written directly in this body: `this.tm.temporalMemberDelegate.receiveRoomMemberTurnResult`.

SHA-256 of the source span: `fd54c9e08235d9e8c8e8a145db9bb4bafcbeadd9cdf9c6b1bfd3ceeede67e531`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
