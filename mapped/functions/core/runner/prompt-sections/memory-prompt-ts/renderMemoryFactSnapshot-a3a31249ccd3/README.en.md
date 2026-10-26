# `renderMemoryFactSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537844-537893](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537844-L537893) | `FunctionDeclaration` | no | `recall2, location, opts, shownFacts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537844-537893](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537844-L537893) | 9 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537844

Calls written directly in this body: `appendBudgetedFacts`, `lines2.join`, `lines2.push`, `omittedFactsHint`.

SHA-256 of the source span: `3473e6b64d30e9a339bcb122afc3a6fd9ef4d57480ba50bda1ae070ec5d553c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
