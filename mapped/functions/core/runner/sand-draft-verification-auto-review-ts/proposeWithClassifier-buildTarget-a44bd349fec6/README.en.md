# `proposeWithClassifier/buildTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755985-755992](../../../../../../reference/runtime/host-main.cjs#L755985-L755992) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:541860-541867](../../../../../../reference/runtime/sand-eval-runner.cjs#L541860-L541867) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755985-755992](../../../../../../reference/runtime/host-main.cjs#L755985-L755992) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:755985 uses an implicit arrow-function return.
| [evaluation:541860-541867](../../../../../../reference/runtime/sand-eval-runner.cjs#L541860-L541867) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:541860 uses an implicit arrow-function return.

### host:755985

Calls written directly in this body: `buildSandDraftSendRiskTarget`.

SHA-256 of the source span: `cde8d44f1841ca54eb95ad4dcdedaefb517873880529ed414657e10ef293e8b9`.

### evaluation:541860

Calls written directly in this body: `buildSandDraftSendRiskTarget`.

SHA-256 of the source span: `cde8d44f1841ca54eb95ad4dcdedaefb517873880529ed414657e10ef293e8b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
