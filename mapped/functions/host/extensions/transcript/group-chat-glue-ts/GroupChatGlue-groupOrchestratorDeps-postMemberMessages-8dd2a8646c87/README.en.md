# `GroupChatGlue.groupOrchestratorDeps/postMemberMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738567-738569](../../../../../../../reference/runtime/host-main.cjs#L738567-L738569) | `ArrowFunctionExpression` | yes | `member, messages2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738567-738569](../../../../../../../reference/runtime/host-main.cjs#L738567-L738569) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:738567

Calls written directly in this body: `this.postGroupMemberMessage`.

SHA-256 of the source span: `51716dbd1b05486af50a3e5b2ad82695933adbcb7016edd704dde9e7c6704812`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
