# `_MeetingChatReview.run/onAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760106-760106](../../../../../../reference/runtime/host-main.cjs#L760106-L760106) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:550921-550921](../../../../../../reference/runtime/sand-eval-runner.cjs#L550921-L550921) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760106-760106](../../../../../../reference/runtime/host-main.cjs#L760106-L760106) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:760106 uses an implicit arrow-function return.
| [evaluation:550921-550921](../../../../../../reference/runtime/sand-eval-runner.cjs#L550921-L550921) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:550921 uses an implicit arrow-function return.

### host:760106

Calls written directly in this body: `controller.abort`.

SHA-256 of the source span: `1470b8fe4e5582a3cc9f0ebb0327cac5a78fb75e35f6efb62ca0df9094af269e`.

### evaluation:550921

Calls written directly in this body: `controller.abort`.

SHA-256 of the source span: `1470b8fe4e5582a3cc9f0ebb0327cac5a78fb75e35f6efb62ca0df9094af269e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
