# `runSandComputerAutoReviewPreflight/buildTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699652-699652](../../../../../../reference/runtime/host-main.cjs#L699652-L699652) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:513408-513408](../../../../../../reference/runtime/sand-eval-runner.cjs#L513408-L513408) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699652-699652](../../../../../../reference/runtime/host-main.cjs#L699652-L699652) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:699652 uses an implicit arrow-function return.
| [evaluation:513408-513408](../../../../../../reference/runtime/sand-eval-runner.cjs#L513408-L513408) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:513408 uses an implicit arrow-function return.

### host:699652

Calls written directly in this body: `buildSandComputerClassifierRiskTarget`, `classifierInstructions`.

SHA-256 of the source span: `1770ff403aa8a448475a67c3cdef6195be8384d2467e67429dbff6f4fa17468c`.

### evaluation:513408

Calls written directly in this body: `buildSandComputerClassifierRiskTarget`, `classifierInstructions`.

SHA-256 of the source span: `1770ff403aa8a448475a67c3cdef6195be8384d2467e67429dbff6f4fa17468c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
