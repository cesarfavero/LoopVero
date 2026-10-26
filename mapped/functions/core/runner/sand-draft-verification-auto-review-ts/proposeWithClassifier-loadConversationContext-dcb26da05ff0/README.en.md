# `proposeWithClassifier/loadConversationContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755993-755993](../../../../../../reference/runtime/host-main.cjs#L755993-L755993) | `ArrowFunctionExpression` | yes | `(none)` |
| [evaluation:541868-541868](../../../../../../reference/runtime/sand-eval-runner.cjs#L541868-L541868) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755993-755993](../../../../../../reference/runtime/host-main.cjs#L755993-L755993) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:755993 uses an implicit arrow-function return.
| [evaluation:541868-541868](../../../../../../reference/runtime/sand-eval-runner.cjs#L541868-L541868) | 1 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:541868 uses an implicit arrow-function return.

### host:755993

Calls written directly in this body: `options2.extractConversationContext`.

SHA-256 of the source span: `3b986938ec0705bc0f81524b335731b962c12a3b3bee264ea9553ab1a7255bbf`.

### evaluation:541868

Calls written directly in this body: `options2.extractConversationContext`.

SHA-256 of the source span: `3b986938ec0705bc0f81524b335731b962c12a3b3bee264ea9553ab1a7255bbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
