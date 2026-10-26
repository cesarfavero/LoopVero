# `_MeetingChatSender.postOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-sender.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760451-760479](../../../../../../reference/runtime/host-main.cjs#L760451-L760479) | `method` | yes | `meetingId, {     once: once2,     signal,     trace: trace2   }, post` |
| [evaluation:551266-551294](../../../../../../reference/runtime/sand-eval-runner.cjs#L551266-L551294) | `method` | yes | `meetingId, {     once: once2,     signal,     trace: trace2   }, post` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760451-760479](../../../../../../reference/runtime/host-main.cjs#L760451-L760479) | 4 | 0 | 4 | 3 | 0 | 0 |
| [evaluation:551266-551294](../../../../../../reference/runtime/sand-eval-runner.cjs#L551266-L551294) | 4 | 0 | 4 | 3 | 0 | 0 |

### host:760451

Calls written directly in this body: `Date.now`, `_MeetingChatSender.notPosted`, `_MeetingChatSender.postOutcome`, `once2.claim`, `once2.posted`, `once2.release`, `post`, `this.deps.mark`, `this.posted`.

Assignment or increment targets: `sent`, `trace2.outcome`.

SHA-256 of the source span: `89b6eba5ec625de2d022bfe8bc67e4623cd3f88d703e6d68eb2df2878b938421`.

### evaluation:551266

Calls written directly in this body: `Date.now`, `_MeetingChatSender.notPosted`, `_MeetingChatSender.postOutcome`, `once2.claim`, `once2.posted`, `once2.release`, `post`, `this.deps.mark`, `this.posted`.

Assignment or increment targets: `sent`, `trace2.outcome`.

SHA-256 of the source span: `89b6eba5ec625de2d022bfe8bc67e4623cd3f88d703e6d68eb2df2878b938421`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
