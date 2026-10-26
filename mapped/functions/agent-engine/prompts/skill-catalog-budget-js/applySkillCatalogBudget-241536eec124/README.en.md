# `applySkillCatalogBudget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-budget.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-budget-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639375-639451](../../../../../../reference/runtime/host-main.cjs#L639375-L639451) | `FunctionDeclaration` | no | `{ skills, agentTokenLimit, renderSection, renderOmittedNotice, protectLoopSkill }` |
| [evaluation:429965-430041](../../../../../../reference/runtime/sand-eval-runner.cjs#L429965-L430041) | `FunctionDeclaration` | no | `{ skills, agentTokenLimit, renderSection, renderOmittedNotice, protectLoopSkill }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639375-639451](../../../../../../reference/runtime/host-main.cjs#L639375-L639451) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:429965-430041](../../../../../../reference/runtime/sand-eval-runner.cjs#L429965-L430041) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:639375

Calls written directly in this body: `Math.floor`, `estimateStringTokenCount`, `new Set`, `omitSkillsToFit`, `renderContent`, `renderSection`, `skills.filter`, `toPathOnlySkills`, `truncateDescriptionsToFit`.

SHA-256 of the source span: `5d4929655e162fd37f3eaa4b6d78e18aadeceaba54418fe41b5dd1138c25b35d`.

### evaluation:429965

Calls written directly in this body: `Math.floor`, `estimateStringTokenCount`, `new Set`, `omitSkillsToFit`, `renderContent`, `renderSection`, `skills.filter`, `toPathOnlySkills`, `truncateDescriptionsToFit`.

SHA-256 of the source span: `5d4929655e162fd37f3eaa4b6d78e18aadeceaba54418fe41b5dd1138c25b35d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
