# `_MeetingChatReview.payload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760060-760087](../../../../../../reference/runtime/host-main.cjs#L760060-L760087) | `method` | no | `{ context: context2, draft }` |
| [evaluation:550875-550902](../../../../../../reference/runtime/sand-eval-runner.cjs#L550875-L550902) | `method` | no | `{ context: context2, draft }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760060-760087](../../../../../../reference/runtime/host-main.cjs#L760060-L760087) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550875-550902](../../../../../../reference/runtime/sand-eval-runner.cjs#L550875-L550902) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:760060

Calls written directly in this body: `_MeetingChatReview.newestWithin`, `context2.conversation.map`, `context2.recentLines.slice`, `notes.slice`.

SHA-256 of the source span: `aff801931840894ede6e75080e1bcb5ad8986387bbfe30dc69c21be41ffafda2`.

### evaluation:550875

Calls written directly in this body: `_MeetingChatReview.newestWithin`, `context2.conversation.map`, `context2.recentLines.slice`, `notes.slice`.

SHA-256 of the source span: `aff801931840894ede6e75080e1bcb5ad8986387bbfe30dc69c21be41ffafda2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
