# `withoutTrailingProsePunctuation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732599-732605](../../../../../../../reference/runtime/host-main.cjs#L732599-L732605) | `FunctionDeclaration` | no | `candidate` |
| [evaluation:539611-539617](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539611-L539617) | `FunctionDeclaration` | no | `candidate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732599-732605](../../../../../../../reference/runtime/host-main.cjs#L732599-L732605) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539611-539617](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539611-L539617) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:732599

Calls written directly in this body: `TRAILING_PROSE_PUNCTUATION.test`, `closesUnopenedParenthesis`, `url2.slice`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `2c92c4c22c9722dc811aecc9a81470b6ee063c05051bbdceec335e5ed929cd01`.

### evaluation:539611

Calls written directly in this body: `TRAILING_PROSE_PUNCTUATION.test`, `closesUnopenedParenthesis`, `url2.slice`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `2c92c4c22c9722dc811aecc9a81470b6ee063c05051bbdceec335e5ed929cd01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
