# `_MeetingChatSender.send`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-sender.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760356-760369](../../../../../../reference/runtime/host-main.cjs#L760356-L760369) | `method` | yes | `request5` |
| [evaluation:551171-551184](../../../../../../reference/runtime/sand-eval-runner.cjs#L551171-L551184) | `method` | yes | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760356-760369](../../../../../../reference/runtime/host-main.cjs#L760356-L760369) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:551171-551184](../../../../../../reference/runtime/sand-eval-runner.cjs#L551171-L551184) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:760356

Calls written directly in this body: `this.deps.meetings.recordChatSend`, `this.sendTraced`.

SHA-256 of the source span: `07ff38802769e87fac16480ebb611f4d9fdccda8027201689bc19cc30a51ea0d`.

### evaluation:551171

Calls written directly in this body: `this.deps.meetings.recordChatSend`, `this.sendTraced`.

SHA-256 of the source span: `d1932d1968d57d1bc69b0d5904bbadb5c17baf60023042fee10a3acc5820f343`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
