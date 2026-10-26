# `_MeetingChatReviewJev.run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review-jev.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760268-760317](../../../../../../reference/runtime/host-main.cjs#L760268-L760317) | `method` | yes | `{     input: input2,     meetings,     signal,     now = Date.now   }` |
| [evaluation:551083-551132](../../../../../../reference/runtime/sand-eval-runner.cjs#L551083-L551132) | `method` | yes | `{     input: input2,     meetings,     signal,     now = Date.now   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760268-760317](../../../../../../reference/runtime/host-main.cjs#L760268-L760317) | 3 | 0 | 1 | 5 | 0 | 2 |
| [evaluation:551083-551132](../../../../../../reference/runtime/sand-eval-runner.cjs#L551083-L551132) | 3 | 0 | 1 | 5 | 0 | 2 |

### host:760268

Calls written directly in this body: `_MeetingChatReviewJev.decide`, `_MeetingChatReviewJev.settings`, `_MeetingChatReviewJev.state`, `ask`, `controller.abort`, `meetings.askChatReviewJev.bind`, `meetings.readChatReviewJevConfig`, `new AbortController`, `now`, `signal.addEventListener`, `signal.removeEventListener`, `skipped2`, `withTimeout`.

Assignment or increment targets: `settings`.

SHA-256 of the source span: `f35a76c5d4082a5b1781fb44876346b2943c0cef4c50ef63894660be3de37709`.

### evaluation:551083

Calls written directly in this body: `_MeetingChatReviewJev.decide`, `_MeetingChatReviewJev.settings`, `_MeetingChatReviewJev.state`, `ask`, `controller.abort`, `meetings.askChatReviewJev.bind`, `meetings.readChatReviewJevConfig`, `new AbortController`, `now`, `signal.addEventListener`, `signal.removeEventListener`, `skipped`, `withTimeout`.

Assignment or increment targets: `settings`.

SHA-256 of the source span: `8c8df45fd6fe14751fe003dd9170b461b84076e350fc20195cdc9e6815c8bcd1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
