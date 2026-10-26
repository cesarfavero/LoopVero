# `sandEmailSendReviewSpec/summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764626-764637](../../../../../../reference/runtime/host-main.cjs#L764626-L764637) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:557994-558005](../../../../../../reference/runtime/sand-eval-runner.cjs#L557994-L558005) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764626-764637](../../../../../../reference/runtime/host-main.cjs#L764626-L764637) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:764626 uses an implicit arrow-function return.
| [evaluation:557994-558005](../../../../../../reference/runtime/sand-eval-runner.cjs#L557994-L558005) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:557994 uses an implicit arrow-function return.

### host:764626

Calls written directly in this body: `summarizeSandEmailSendAction`.

SHA-256 of the source span: `b3fc844a4d7368dd2c75c58bc6a4052cd7900bd84602125f8e79e80e69e86537`.

### evaluation:557994

Calls written directly in this body: `summarizeSandEmailSendAction`.

SHA-256 of the source span: `b3fc844a4d7368dd2c75c58bc6a4052cd7900bd84602125f8e79e80e69e86537`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
