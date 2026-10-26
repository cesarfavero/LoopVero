# `_MeetingChatReview.parse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760088-760096](../../../../../../reference/runtime/host-main.cjs#L760088-L760096) | `method` | no | `calls` |
| [evaluation:550903-550911](../../../../../../reference/runtime/sand-eval-runner.cjs#L550903-L550911) | `method` | no | `calls` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760088-760096](../../../../../../reference/runtime/host-main.cjs#L760088-L760096) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:550903-550911](../../../../../../reference/runtime/sand-eval-runner.cjs#L550903-L550911) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:760088

Calls written directly in this body: `.filter`, `.map`, `.slice`, `meetingChatAnswerSchema.safeParse`.

SHA-256 of the source span: `baf906bd7165a608ad9873400ca113c909f9d4011485b817617bc15dab4a2edd`.

### evaluation:550903

Calls written directly in this body: `.filter`, `.map`, `.slice`, `meetingChatAnswerSchema.safeParse`.

SHA-256 of the source span: `baf906bd7165a608ad9873400ca113c909f9d4011485b817617bc15dab4a2edd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
