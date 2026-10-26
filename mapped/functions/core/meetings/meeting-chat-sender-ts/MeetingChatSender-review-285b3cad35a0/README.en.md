# `_MeetingChatSender.review`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-sender.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-sender-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760421-760450](../../../../../../reference/runtime/host-main.cjs#L760421-L760450) | `method` | yes | `input2, signal, trace2` |
| [evaluation:551236-551265](../../../../../../reference/runtime/sand-eval-runner.cjs#L551236-L551265) | `method` | yes | `input2, signal, trace2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760421-760450](../../../../../../reference/runtime/host-main.cjs#L760421-L760450) | 7 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:551236-551265](../../../../../../reference/runtime/sand-eval-runner.cjs#L551236-L551265) | 7 | 0 | 2 | 1 | 0 | 0 |

### host:760421

Calls written directly in this body: `Date.now`, `MeetingChatReview.run`, `MeetingChatReviewJev.run`, `this.deps.meetings.recordChatReview`, `this.deps.reviewed`.

Assignment or increment targets: `trace2.review`, `verdict`.

SHA-256 of the source span: `4ac8df7dce43875cb9f0ec35994de04f454a9c3d564124889a2eef2cde4ff3a1`.

### evaluation:551236

Calls written directly in this body: `Date.now`, `MeetingChatReview.run`, `MeetingChatReviewJev.run`, `this.deps.meetings.recordChatReview`, `this.deps.reviewed`.

Assignment or increment targets: `trace2.review`, `verdict`.

SHA-256 of the source span: `19cec07808c280f06e101fd92734acc38fc65d480ad71cc14be213d632747b19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
