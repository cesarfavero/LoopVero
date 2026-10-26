# `runSandComputerAutoReviewPreflight/summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699654-699654](../../../../../../reference/runtime/host-main.cjs#L699654-L699654) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:513410-513410](../../../../../../reference/runtime/sand-eval-runner.cjs#L513410-L513410) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699654-699654](../../../../../../reference/runtime/host-main.cjs#L699654-L699654) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:699654 uses an implicit arrow-function return.
| [evaluation:513410-513410](../../../../../../reference/runtime/sand-eval-runner.cjs#L513410-L513410) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:513410 uses an implicit arrow-function return.

### host:699654

Calls written directly in this body: `summarizeBlockedAction`.

SHA-256 of the source span: `50fa88fef5aa665e338e68181eecf1022f85721bee16d317dec886ea7b7de646`.

### evaluation:513410

Calls written directly in this body: `summarizeBlockedAction`.

SHA-256 of the source span: `50fa88fef5aa665e338e68181eecf1022f85721bee16d317dec886ea7b7de646`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
