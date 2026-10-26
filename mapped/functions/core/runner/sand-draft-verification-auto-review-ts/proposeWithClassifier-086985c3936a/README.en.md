# `proposeWithClassifier`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755979-756003](../../../../../../reference/runtime/host-main.cjs#L755979-L756003) | `FunctionDeclaration` | yes | `ctx, args, options2` |
| [evaluation:541854-541878](../../../../../../reference/runtime/sand-eval-runner.cjs#L541854-L541878) | `FunctionDeclaration` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755979-756003](../../../../../../reference/runtime/host-main.cjs#L755979-L756003) | 3 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:541854-541878](../../../../../../reference/runtime/sand-eval-runner.cjs#L541854-L541878) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:755979

Calls written directly in this body: `recipientAllowedBySavedRule`, `runSandAutoReviewClassifier`.

SHA-256 of the source span: `8ab11b9da857409a8da00399237ec7b954214d3ade62590e4ab183a53e9a8fe8`.

### evaluation:541854

Calls written directly in this body: `recipientAllowedBySavedRule`, `runSandAutoReviewClassifier`.

SHA-256 of the source span: `8ab11b9da857409a8da00399237ec7b954214d3ade62590e4ab183a53e9a8fe8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
