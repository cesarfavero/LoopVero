# `budgetSkillCatalogText/renderSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:430055-430055](../../../../../../reference/runtime/sand-eval-runner.cjs#L430055-L430055) | `ArrowFunctionExpression` | no | `skillItems, omittedNotice` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:430055-430055](../../../../../../reference/runtime/sand-eval-runner.cjs#L430055-L430055) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:430055 uses an implicit arrow-function return.

### evaluation:430055

Calls written directly in this body: `renderCatalog`, `textElement`, `texts.get`.

SHA-256 of the source span: `bd6ba8cf3df84f3df1b466671a88cf2b82de34d98d55c0d7daf1fc7bd728dcee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
