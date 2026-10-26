# `appendBudgetedProvenancedFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537988-538003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537988-L538003) | `FunctionDeclaration` | no | `lines2, records2, charBudget, moreLabel, hint, shownFacts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537988-538003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537988-L538003) | 2 | 1 | 0 | 0 | 0 | 0 |

### evaluation:537988

Calls written directly in this body: `lines2.push`, `omittedFactsHint`, `provenancedFactLine`, `shownFacts.push`.

Assignment or increment targets: `budget`, `shown`.

SHA-256 of the source span: `2c2bd749dea82383d8893351752def6e595b9082db797df75cb64cc98ff29794`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
