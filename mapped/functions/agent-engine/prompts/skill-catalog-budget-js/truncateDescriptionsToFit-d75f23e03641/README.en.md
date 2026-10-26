# `truncateDescriptionsToFit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639455-639484](../../../../../../reference/runtime/host-main.cjs#L639455-L639484) | `FunctionDeclaration` | no | `{ skills, budgetTokens, renderSection, isProtected }` |
| [evaluation:430069-430098](../../../../../../reference/runtime/sand-eval-runner.cjs#L430069-L430098) | `FunctionDeclaration` | no | `{ skills, budgetTokens, renderSection, isProtected }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639455-639484](../../../../../../reference/runtime/host-main.cjs#L639455-L639484) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:430069-430098](../../../../../../reference/runtime/sand-eval-runner.cjs#L430069-L430098) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:639455

Calls written directly in this body: `Math.floor`, `Math.min`, `estimateStringTokenCount`, `renderContent`, `renderSection`, `skills.map`, `skills.reduce`.

Assignment or increment targets: `bestFit`, `lowerBound`, `upperBound`.

SHA-256 of the source span: `0e63feff49f7c8f69e8611546480e43c9b462f403977f3a73b2251a1a153c6ea`.

### evaluation:430069

Calls written directly in this body: `Math.floor`, `Math.min`, `estimateStringTokenCount`, `renderContent`, `renderSection`, `skills.map`, `skills.reduce`.

Assignment or increment targets: `bestFit`, `lowerBound`, `upperBound`.

SHA-256 of the source span: `0e63feff49f7c8f69e8611546480e43c9b462f403977f3a73b2251a1a153c6ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
