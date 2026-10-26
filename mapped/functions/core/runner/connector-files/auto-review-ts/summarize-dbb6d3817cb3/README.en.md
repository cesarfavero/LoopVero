# `summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/connector-files/auto-review.ts` · [Module README](../../../../../../modules/core/runner/connector-files/auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774862-774866](../../../../../../../reference/runtime/host-main.cjs#L774862-L774866) | `ArrowFunctionExpression` | no | `target` |
| [host:774917-774921](../../../../../../../reference/runtime/host-main.cjs#L774917-L774921) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:574465-574469](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574465-L574469) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:574520-574524](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574520-L574524) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774862-774866](../../../../../../../reference/runtime/host-main.cjs#L774862-L774866) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:774862 uses an implicit arrow-function return.
| [host:774917-774921](../../../../../../../reference/runtime/host-main.cjs#L774917-L774921) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:774917 uses an implicit arrow-function return.
| [evaluation:574465-574469](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574465-L574469) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:574465 uses an implicit arrow-function return.
| [evaluation:574520-574524](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574520-L574524) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:574520 uses an implicit arrow-function return.

### host:774862

Calls written directly in this body: `reviewArguments2`, `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `cb75910be2e3bd56add002943293856aab8dd31390b92ebfd3b1b03c9301ba8c`.

### host:774917

Calls written directly in this body: `downloadReviewArguments`, `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `2a5000c83a032fcbe371a9a65d87dba8ef16edcd76b82f4407ce8ebd458595ae`.

### evaluation:574465

Calls written directly in this body: `reviewArguments2`, `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `cb75910be2e3bd56add002943293856aab8dd31390b92ebfd3b1b03c9301ba8c`.

### evaluation:574520

Calls written directly in this body: `downloadReviewArguments`, `summarizeSandMcpAutoReviewAction`.

SHA-256 of the source span: `2a5000c83a032fcbe371a9a65d87dba8ef16edcd76b82f4407ce8ebd458595ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
