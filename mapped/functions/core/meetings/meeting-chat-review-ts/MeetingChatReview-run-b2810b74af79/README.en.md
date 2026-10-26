# `_MeetingChatReview.run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760097-760122](../../../../../../reference/runtime/host-main.cjs#L760097-L760122) | `method` | yes | `{     input: input2,     run,     signal,     timeoutMs = MEETING_CHAT_REVIEW_TIMEOUT_MS   }` |
| [evaluation:550912-550937](../../../../../../reference/runtime/sand-eval-runner.cjs#L550912-L550937) | `method` | yes | `{     input: input2,     run,     signal,     timeoutMs = MEETING_CHAT_REVIEW_TIMEOUT_MS   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760097-760122](../../../../../../reference/runtime/host-main.cjs#L760097-L760122) | 4 | 0 | 1 | 5 | 0 | 1 |
| [evaluation:550912-550937](../../../../../../reference/runtime/sand-eval-runner.cjs#L550912-L550937) | 4 | 0 | 1 | 5 | 0 | 1 |

### host:760097

Calls written directly in this body: `_MeetingChatReview.parse`, `_MeetingChatReview.prompt`, `cancelled`, `controller.abort`, `new AbortController`, `run`, `signal.addEventListener`, `signal.removeEventListener`, `withTimeout`.

SHA-256 of the source span: `a0ce018a93dc7080a6202af73139bbbdfced536b4e6ae2c649440f5ee9d18ede`.

### evaluation:550912

Calls written directly in this body: `_MeetingChatReview.parse`, `_MeetingChatReview.prompt`, `cancelled`, `controller.abort`, `new AbortController`, `run`, `signal.addEventListener`, `signal.removeEventListener`, `withTimeout`.

SHA-256 of the source span: `f8bf3f3bdc328b86d677689c5bd244dee6708cdfb02c6f1726fc297c57172a7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
