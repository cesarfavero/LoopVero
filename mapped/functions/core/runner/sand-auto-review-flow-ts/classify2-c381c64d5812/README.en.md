# `classify2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-flow.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554696-554714](../../../../../../reference/runtime/sand-eval-runner.cjs#L554696-L554714) | `FunctionDeclaration` | no | `args, mode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554696-554714](../../../../../../reference/runtime/sand-eval-runner.cjs#L554696-L554714) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554696

Calls written directly in this body: `runSandAutoReviewClassifier`.

SHA-256 of the source span: `3efb6ab191c1d674f4629a764330e60618d80962aa6645e77503f2dec55c94c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
