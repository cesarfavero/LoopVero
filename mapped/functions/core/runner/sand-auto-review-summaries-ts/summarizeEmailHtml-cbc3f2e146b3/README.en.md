# `summarizeEmailHtml`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693852-693863](../../../../../../reference/runtime/host-main.cjs#L693852-L693863) | `FunctionDeclaration` | no | `html` |
| [evaluation:491288-491299](../../../../../../reference/runtime/sand-eval-runner.cjs#L491288-L491299) | `FunctionDeclaration` | no | `html` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693852-693863](../../../../../../reference/runtime/host-main.cjs#L693852-L693863) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:491288-491299](../../../../../../reference/runtime/sand-eval-runner.cjs#L491288-L491299) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:693852

Calls written directly in this body: `.join`, `.map`, `.replace`, `Array.from`, `compactHeadAndTail`, `html.matchAll`, `html.replace`, `new Set`, `redactSandAutoReviewInlineSecrets`, `urls.slice`.

SHA-256 of the source span: `a4d98b56e411ef31e9ab54bf2d19f81f281f28fdebf06a814c48c211576a767f`.

### evaluation:491288

Calls written directly in this body: `.join`, `.map`, `.replace`, `Array.from`, `compactHeadAndTail`, `html.matchAll`, `html.replace`, `new Set`, `redactSandAutoReviewInlineSecrets`, `urls.slice`.

SHA-256 of the source span: `a4d98b56e411ef31e9ab54bf2d19f81f281f28fdebf06a814c48c211576a767f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
