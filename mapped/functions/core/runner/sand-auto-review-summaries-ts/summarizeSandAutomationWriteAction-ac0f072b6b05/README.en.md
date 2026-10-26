# `summarizeSandAutomationWriteAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-summaries.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693787-693801](../../../../../../reference/runtime/host-main.cjs#L693787-L693801) | `FunctionDeclaration` | no | `args` |
| [evaluation:491223-491237](../../../../../../reference/runtime/sand-eval-runner.cjs#L491223-L491237) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693787-693801](../../../../../../reference/runtime/host-main.cjs#L693787-L693801) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:491223-491237](../../../../../../reference/runtime/sand-eval-runner.cjs#L491223-L491237) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:693787

Calls written directly in this body: `.join`, `.slice`, `args.referencingAutomationNames.flatMap`, `compact`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `when.toLowerCase`.

SHA-256 of the source span: `027f8c95edf7cf388be93495dbda7cb2c6070a03801e6034e9e21152969a9df5`.

### evaluation:491223

Calls written directly in this body: `.join`, `.slice`, `args.referencingAutomationNames.flatMap`, `compact`, `compactHeadAndTail`, `redactSandAutoReviewInlineSecrets`, `when.toLowerCase`.

SHA-256 of the source span: `027f8c95edf7cf388be93495dbda7cb2c6070a03801e6034e9e21152969a9df5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
