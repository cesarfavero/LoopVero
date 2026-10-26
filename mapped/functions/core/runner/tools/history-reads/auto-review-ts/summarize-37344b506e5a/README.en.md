# `summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/history-reads/auto-review.ts` · [Module README](../../../../../../../modules/core/runner/tools/history-reads/auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763141-763145](../../../../../../../../reference/runtime/host-main.cjs#L763141-L763145) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:556109-556113](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556109-L556113) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763141-763145](../../../../../../../../reference/runtime/host-main.cjs#L763141-L763145) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:763141 uses an implicit arrow-function return.
| [evaluation:556109-556113](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L556109-L556113) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:556109 uses an implicit arrow-function return.

### host:763141

Calls written directly in this body: `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `5ae897b9380e831d206c97067e72f8e1b2bff5f86adf897696806749fd920eab`.

### evaluation:556109

Calls written directly in this body: `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `5ae897b9380e831d206c97067e72f8e1b2bff5f86adf897696806749fd920eab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
