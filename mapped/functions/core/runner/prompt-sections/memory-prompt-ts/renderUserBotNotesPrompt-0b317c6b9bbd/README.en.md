# `renderUserBotNotesPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537824-537840](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537824-L537840) | `FunctionDeclaration` | no | `recall2, shownFacts, stateTools2 = ALL_STATE_TOOLS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537824-537840](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537824-L537840) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:537824

Calls written directly in this body: `appendBudgetedFacts`, `lines2.join`, `lines2.push`, `omittedFactsHint`.

SHA-256 of the source span: `fcfb228a83a1f46a268df460826264a1daee8358bf3a59a2d62ec6eda0a321cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
