# `BudgetedAgentSkillsSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640090-640109](../../../../../../reference/runtime/host-main.cjs#L640090-L640109) | `FunctionDeclaration` | no | `{ skillItems, agentTokenLimit, raw, readToolName, isGpt56, protectLoopSkill, aliasPathPrefixes }` |
| [evaluation:430704-430723](../../../../../../reference/runtime/sand-eval-runner.cjs#L430704-L430723) | `FunctionDeclaration` | no | `{ skillItems, agentTokenLimit, raw, readToolName, isGpt56, protectLoopSkill, aliasPathPrefixes }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640090-640109](../../../../../../reference/runtime/host-main.cjs#L640090-L640109) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430704-430723](../../../../../../reference/runtime/sand-eval-runner.cjs#L430704-L430723) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640090

Calls written directly in this body: `applySkillCatalogBudget`.

SHA-256 of the source span: `5590c9279e13aac8fef1297e4d819203e3a3abf4d7ba733bb0ad7fbd1d7561f3`.

### evaluation:430704

Calls written directly in this body: `applySkillCatalogBudget`.

SHA-256 of the source span: `5590c9279e13aac8fef1297e4d819203e3a3abf4d7ba733bb0ad7fbd1d7561f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
