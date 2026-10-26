# `reviewSandEmailSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-email-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-email-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764658-764664](../../../../../../reference/runtime/host-main.cjs#L764658-L764664) | `FunctionDeclaration` | yes | `args` |
| [evaluation:558026-558032](../../../../../../reference/runtime/sand-eval-runner.cjs#L558026-L558032) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764658-764664](../../../../../../reference/runtime/host-main.cjs#L764658-L764664) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:558026-558032](../../../../../../reference/runtime/sand-eval-runner.cjs#L558026-L558032) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:764658

Calls written directly in this body: `runSandAutoReviewFlow`, `sandEmailSendReviewSpec`.

SHA-256 of the source span: `394451a5506daf8260ea3a3dfb7ce2015ea2b57c5c48616ee2af9b862c668737`.

### evaluation:558026

Calls written directly in this body: `runSandAutoReviewFlow`, `sandEmailSendReviewSpec`.

SHA-256 of the source span: `394451a5506daf8260ea3a3dfb7ce2015ea2b57c5c48616ee2af9b862c668737`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
