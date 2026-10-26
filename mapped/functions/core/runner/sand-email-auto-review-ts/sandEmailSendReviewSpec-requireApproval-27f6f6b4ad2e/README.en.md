# `sandEmailSendReviewSpec/requireApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764639-764639](../../../../../../reference/runtime/host-main.cjs#L764639-L764639) | `ArrowFunctionExpression` | no | `target` |
| [evaluation:558007-558007](../../../../../../reference/runtime/sand-eval-runner.cjs#L558007-L558007) | `ArrowFunctionExpression` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764639-764639](../../../../../../reference/runtime/host-main.cjs#L764639-L764639) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:764639 uses an implicit arrow-function return.
| [evaluation:558007-558007](../../../../../../reference/runtime/sand-eval-runner.cjs#L558007-L558007) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:558007 uses an implicit arrow-function return.

### host:764639

Calls written directly in this body: `sendNeedsManualReview`.

SHA-256 of the source span: `c61399d814a16976b5ca2a8962d6d00258e5390612a6a23a7cdec7dbf808b8ca`.

### evaluation:558007

Calls written directly in this body: `sendNeedsManualReview`.

SHA-256 of the source span: `c61399d814a16976b5ca2a8962d6d00258e5390612a6a23a7cdec7dbf808b8ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
