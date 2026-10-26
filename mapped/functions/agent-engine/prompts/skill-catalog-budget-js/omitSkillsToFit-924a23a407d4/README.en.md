# `omitSkillsToFit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639485-639541](../../../../../../reference/runtime/host-main.cjs#L639485-L639541) | `FunctionDeclaration` | no | `{ pathOnlySkills, allSkills, budgetTokens, maxRetainedDroppableCount, uncappedEstimatedTokens, renderSection, renderOmittedNotice, isProtected }` |
| [evaluation:430099-430155](../../../../../../reference/runtime/sand-eval-runner.cjs#L430099-L430155) | `FunctionDeclaration` | no | `{ pathOnlySkills, allSkills, budgetTokens, maxRetainedDroppableCount, uncappedEstimatedTokens, renderSection, renderOmittedNotice, isProtected }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639485-639541](../../../../../../reference/runtime/host-main.cjs#L639485-L639541) | 3 | 3 | 0 | 1 | 0 | 0 |
| [evaluation:430099-430155](../../../../../../reference/runtime/sand-eval-runner.cjs#L430099-L430155) | 3 | 3 | 0 | 1 | 0 | 0 |

### host:639485

Calls written directly in this body: `Math.floor`, `Math.min`, `droppableIndices.push`, `isProtected`, `renderRetaining`.

Assignment or increment targets: `fitting`, `fittingCount`, `i`, `overflowingCount`, `probe`.

SHA-256 of the source span: `97f61d41e6c34cc6635997ae8a136072559da2def16c3effa4fe9e3b681aafb1`.

### evaluation:430099

Calls written directly in this body: `Math.floor`, `Math.min`, `droppableIndices.push`, `isProtected`, `renderRetaining`.

Assignment or increment targets: `fitting`, `fittingCount`, `i`, `overflowingCount`, `probe`.

SHA-256 of the source span: `97f61d41e6c34cc6635997ae8a136072559da2def16c3effa4fe9e3b681aafb1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
