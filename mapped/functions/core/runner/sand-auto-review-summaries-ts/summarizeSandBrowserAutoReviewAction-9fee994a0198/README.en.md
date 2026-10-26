# `summarizeSandBrowserAutoReviewAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693923-693973](../../../../../../reference/runtime/host-main.cjs#L693923-L693973) | `FunctionDeclaration` | no | `args` |
| [evaluation:491359-491409](../../../../../../reference/runtime/sand-eval-runner.cjs#L491359-L491409) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693923-693973](../../../../../../reference/runtime/host-main.cjs#L693923-L693973) | 20 | 0 | 0 | 13 | 0 | 0 |
| [evaluation:491359-491409](../../../../../../reference/runtime/sand-eval-runner.cjs#L491359-L491409) | 20 | 0 | 0 | 13 | 0 | 0 |

### host:693923

Calls written directly in this body: `.join`, `.split`, `.trim`, `args.cdpMethod.slice`, `args.element.replace`, `args.key.slice`, `compact`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `summarize`, `summarizeTypedText`.

SHA-256 of the source span: `971c6920e3dcdac22c9e979e4e1143b84e711ae2b78f95da202c90b25e25fe17`.

### evaluation:491359

Calls written directly in this body: `.join`, `.split`, `.trim`, `args.cdpMethod.slice`, `args.element.replace`, `args.key.slice`, `compact`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `summarize`, `summarizeTypedText`.

SHA-256 of the source span: `971c6920e3dcdac22c9e979e4e1143b84e711ae2b78f95da202c90b25e25fe17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
