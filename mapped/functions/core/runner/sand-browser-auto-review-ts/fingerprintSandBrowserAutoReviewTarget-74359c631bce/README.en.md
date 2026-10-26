# `fingerprintSandBrowserAutoReviewTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699740-699748](../../../../../../reference/runtime/host-main.cjs#L699740-L699748) | `FunctionDeclaration` | no | `target` |
| [evaluation:513496-513504](../../../../../../reference/runtime/sand-eval-runner.cjs#L513496-L513504) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699740-699748](../../../../../../reference/runtime/host-main.cjs#L699740-L699748) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513496-513504](../../../../../../reference/runtime/sand-eval-runner.cjs#L513496-L513504) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699740

Calls written directly in this body: `fingerprintSandAutoReviewTarget`.

SHA-256 of the source span: `baaa4bdc6d3b2a32aeb2aaf4a1869fe2b7e123db18dc280489d644b88509413e`.

### evaluation:513496

Calls written directly in this body: `fingerprintSandAutoReviewTarget`.

SHA-256 of the source span: `baaa4bdc6d3b2a32aeb2aaf4a1869fe2b7e123db18dc280489d644b88509413e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
