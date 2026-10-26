# `computeMaxMinFairAllocations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-summarization/prompt-truncation.js` · [Module README](../../../../modules/agent-summarization/prompt-truncation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617255-617277](../../../../../reference/runtime/host-main.cjs#L617255-L617277) | `FunctionDeclaration` | no | `sizes, totalBudget` |
| [evaluation:285795-285817](../../../../../reference/runtime/sand-eval-runner.cjs#L285795-L285817) | `FunctionDeclaration` | no | `sizes, totalBudget` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617255-617277](../../../../../reference/runtime/host-main.cjs#L617255-L617277) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285795-285817](../../../../../reference/runtime/sand-eval-runner.cjs#L285795-L285817) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:617255

Calls written directly in this body: `.fill`, `Array.from`, `Math.floor`, `new Array`, `sortedIndices.sort`.

Assignment or increment targets: `allocations[computed]`, `remainingBudget`, `remainingCount`.

SHA-256 of the source span: `220649ea6bbdc163aef6e30476dd8d1c6d261386b36cd0f24d5e2b28ea4db9af`.

### evaluation:285795

Calls written directly in this body: `.fill`, `Array.from`, `Math.floor`, `new Array`, `sortedIndices.sort`.

Assignment or increment targets: `allocations[computed]`, `remainingBudget`, `remainingCount`.

SHA-256 of the source span: `220649ea6bbdc163aef6e30476dd8d1c6d261386b36cd0f24d5e2b28ea4db9af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
