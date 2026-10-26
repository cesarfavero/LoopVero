# `budgetSkillCatalogText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:430045-430068](../../../../../../reference/runtime/sand-eval-runner.cjs#L430045-L430068) | `FunctionDeclaration` | no | `{ skills, agentTokenLimit, renderCatalog, renderOmittedNotice }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:430045-430068](../../../../../../reference/runtime/sand-eval-runner.cjs#L430045-L430068) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:430045

Calls written directly in this body: `applySkillCatalogBudget`, `new WeakMap`, `renderContent`, `texts.get`.

SHA-256 of the source span: `8b9702c0b9649eba435b05ff42c5d96a1568007dbbd52b113031c8172891ff43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
