# `_MeetingChatReviewJev.run/onAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review-jev.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760290-760290](../../../../../../reference/runtime/host-main.cjs#L760290-L760290) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:551105-551105](../../../../../../reference/runtime/sand-eval-runner.cjs#L551105-L551105) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760290-760290](../../../../../../reference/runtime/host-main.cjs#L760290-L760290) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:760290 uses an implicit arrow-function return.
| [evaluation:551105-551105](../../../../../../reference/runtime/sand-eval-runner.cjs#L551105-L551105) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:551105 uses an implicit arrow-function return.

### host:760290

Calls written directly in this body: `controller.abort`.

SHA-256 of the source span: `1470b8fe4e5582a3cc9f0ebb0327cac5a78fb75e35f6efb62ca0df9094af269e`.

### evaluation:551105

Calls written directly in this body: `controller.abort`.

SHA-256 of the source span: `1470b8fe4e5582a3cc9f0ebb0327cac5a78fb75e35f6efb62ca0df9094af269e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
