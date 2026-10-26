# `_MeetingChatSender.sendTraced`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-sender.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760370-760420](../../../../../../reference/runtime/host-main.cjs#L760370-L760420) | `method` | yes | `{ meetingId, text: text3, signal, once: once2 }, trace2` |
| [evaluation:551185-551235](../../../../../../reference/runtime/sand-eval-runner.cjs#L551185-L551235) | `method` | yes | `{ meetingId, text: text3, signal, once: once2 }, trace2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760370-760420](../../../../../../reference/runtime/host-main.cjs#L760370-L760420) | 9 | 0 | 6 | 6 | 0 | 0 |
| [evaluation:551185-551235](../../../../../../reference/runtime/sand-eval-runner.cjs#L551185-L551235) | 9 | 0 | 6 | 6 | 0 | 0 |

### host:760370

Calls written directly in this body: `Date.now`, `_MeetingChatSender.notPosted`, `once2.seen`, `this.deps.mark`, `this.deps.meetings.readChatContext`, `this.deps.meetings.readMarkedInternal`, `this.notApproved`, `this.postOnce`, `this.refusal`, `this.review`.

Assignment or increment targets: `trace2.markedInternal`, `trace2.outcome`.

SHA-256 of the source span: `37851255daaa4a783c0fa8a9704152da48ef719b9861d3d4c1d9b98d2bd5d683`.

### evaluation:551185

Calls written directly in this body: `Date.now`, `_MeetingChatSender.notPosted`, `once2.seen`, `this.deps.mark`, `this.deps.meetings.readChatContext`, `this.deps.meetings.readMarkedInternal`, `this.notApproved`, `this.postOnce`, `this.refusal`, `this.review`.

Assignment or increment targets: `trace2.markedInternal`, `trace2.outcome`.

SHA-256 of the source span: `37851255daaa4a783c0fa8a9704152da48ef719b9861d3d4c1d9b98d2bd5d683`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
