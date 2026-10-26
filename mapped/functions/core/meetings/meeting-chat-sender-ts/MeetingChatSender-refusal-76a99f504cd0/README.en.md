# `_MeetingChatSender.refusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-sender.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760520-760541](../../../../../../reference/runtime/host-main.cjs#L760520-L760541) | `method` | no | `meetingId, reason, status` |
| [evaluation:551335-551356](../../../../../../reference/runtime/sand-eval-runner.cjs#L551335-L551356) | `method` | no | `meetingId, reason, status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760520-760541](../../../../../../reference/runtime/host-main.cjs#L760520-L760541) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:551335-551356](../../../../../../reference/runtime/sand-eval-runner.cjs#L551335-L551356) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:760520

Calls written directly in this body: `_MeetingChatSender.notPosted`.

SHA-256 of the source span: `b10baa484b99e29a9743f00b7c87dcf3c4e226f7a667d9f210b2026a2a6a2555`.

### evaluation:551335

Calls written directly in this body: `_MeetingChatSender.notPosted`.

SHA-256 of the source span: `b10baa484b99e29a9743f00b7c87dcf3c4e226f7a667d9f210b2026a2a6a2555`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
