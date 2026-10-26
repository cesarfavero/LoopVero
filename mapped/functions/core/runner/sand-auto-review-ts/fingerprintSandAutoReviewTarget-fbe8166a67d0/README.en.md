# `fingerprintSandAutoReviewTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:694170-694172](../../../../../../reference/runtime/host-main.cjs#L694170-L694172) | `FunctionDeclaration` | no | `target` |
| [evaluation:490105-490107](../../../../../../reference/runtime/sand-eval-runner.cjs#L490105-L490107) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:694170-694172](../../../../../../reference/runtime/host-main.cjs#L694170-L694172) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490105-490107](../../../../../../reference/runtime/sand-eval-runner.cjs#L490105-L490107) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:694170

Calls written directly in this body: `.digest`, `.update`, `JSON.stringify`.

SHA-256 of the source span: `ca21dd326d2c374ee40dada8a452a0e1c4f95ca811e449665c9fa7be1dee630c`.

### evaluation:490105

Calls written directly in this body: `.digest`, `.update`, `JSON.stringify`.

SHA-256 of the source span: `958a73232b8f16acfe2bde9e4efaa8fd7ea083884fd75af42335da4649259ac9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
