# `_MeetingChatSender.posted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-sender.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760501-760519](../../../../../../reference/runtime/host-main.cjs#L760501-L760519) | `method` | no | `meetingId, post` |
| [evaluation:551316-551334](../../../../../../reference/runtime/sand-eval-runner.cjs#L551316-L551334) | `method` | no | `meetingId, post` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760501-760519](../../../../../../reference/runtime/host-main.cjs#L760501-L760519) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:551316-551334](../../../../../../reference/runtime/sand-eval-runner.cjs#L551316-L551334) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:760501

Calls written directly in this body: `MeetingChannelAddress.of`, `_MeetingChatSender.notPosted`, `this.refusal`.

SHA-256 of the source span: `17f1a35c7c26584a9f51194303fdb76c6069fbd3d4302aace4b1f526096c0e5a`.

### evaluation:551316

Calls written directly in this body: `MeetingChannelAddress.of`, `_MeetingChatSender.notPosted`, `this.refusal`.

SHA-256 of the source span: `17f1a35c7c26584a9f51194303fdb76c6069fbd3d4302aace4b1f526096c0e5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
