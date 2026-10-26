# `_MeetingChatReviewJev.state`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review-jev.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760231-760233](../../../../../../reference/runtime/host-main.cjs#L760231-L760233) | `method` | no | `input2` |
| [evaluation:551046-551048](../../../../../../reference/runtime/sand-eval-runner.cjs#L551046-L551048) | `method` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760231-760233](../../../../../../reference/runtime/host-main.cjs#L760231-L760233) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551046-551048](../../../../../../reference/runtime/sand-eval-runner.cjs#L551046-L551048) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:760231

Calls written directly in this body: `MeetingChatReview.payload`.

SHA-256 of the source span: `5467f54bd75342b888bcfe8845b0198822fdd702de527a89d7e0e21c755d75cb`.

### evaluation:551046

Calls written directly in this body: `MeetingChatReview.payload`.

SHA-256 of the source span: `5467f54bd75342b888bcfe8845b0198822fdd702de527a89d7e0e21c755d75cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
