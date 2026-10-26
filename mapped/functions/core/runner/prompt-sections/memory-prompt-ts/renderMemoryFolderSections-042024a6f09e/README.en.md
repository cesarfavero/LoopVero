# `renderMemoryFolderSections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/prompt-sections/memory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537902-537950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537902-L537950) | `FunctionDeclaration` | no | `facts, memoryTypes, stateTools2 = ALL_STATE_TOOLS, teamBot = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537902-537950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537902-L537950) | 8 | 2 | 0 | 1 | 0 | 0 |

### evaluation:537902

Calls written directly in this body: `.map`, `.sort`, `appendBudgetedFacts`, `facts.filter`, `files.has`, `files.set`, `folderMemoryTypes`, `lines2.join`, `lines2.push`, `memoryFolderAudienceNote`, `new Map`, `omittedFactsHint`, `sections.join`, `sections.push`.

SHA-256 of the source span: `8c22255c526b022cc74d4029ad2c1dfa3073d08d93a5b6246fb7e5050a741505`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
