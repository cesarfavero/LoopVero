# `_MeetingChatReview.prompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760053-760059](../../../../../../reference/runtime/host-main.cjs#L760053-L760059) | `method` | no | `input2` |
| [evaluation:550868-550874](../../../../../../reference/runtime/sand-eval-runner.cjs#L550868-L550874) | `method` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760053-760059](../../../../../../reference/runtime/host-main.cjs#L760053-L760059) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550868-550874](../../../../../../reference/runtime/sand-eval-runner.cjs#L550868-L550874) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:760053

Calls written directly in this body: `JSON.stringify`, `_MeetingChatReview.payload`.

SHA-256 of the source span: `1ec47e54340aaaa14461b4425a764fc006179edc770b315c6c74d3d00b958d4e`.

### evaluation:550868

Calls written directly in this body: `JSON.stringify`, `_MeetingChatReview.payload`.

SHA-256 of the source span: `1ec47e54340aaaa14461b4425a764fc006179edc770b315c6c74d3d00b958d4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
