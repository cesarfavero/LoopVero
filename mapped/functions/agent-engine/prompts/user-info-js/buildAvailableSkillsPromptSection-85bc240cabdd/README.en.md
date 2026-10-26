# `buildAvailableSkillsPromptSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640119-640163](../../../../../../reference/runtime/host-main.cjs#L640119-L640163) | `FunctionDeclaration` | no | `props, overrides` |
| [evaluation:430733-430777](../../../../../../reference/runtime/sand-eval-runner.cjs#L430733-L430777) | `FunctionDeclaration` | no | `props, overrides` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640119-640163](../../../../../../reference/runtime/host-main.cjs#L640119-L640163) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430733-430777](../../../../../../reference/runtime/sand-eval-runner.cjs#L430733-L430777) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:640119

Calls written directly in this body: `.filter`, `BudgetedAgentSkillsSection`, `agentSkillsFromProto.filter`, `categorizeCursorRulesForDisplay`, `filterByAgentEnvironment`, `filteredAgentSkillsFromProto.map`, `skills.filter`, `toLegacySkillCatalogItems`.

SHA-256 of the source span: `fd9e4137c7c5704bf18d7160fb9f51cab4207562ca58ac041609a4050b1a5e38`.

### evaluation:430733

Calls written directly in this body: `.filter`, `BudgetedAgentSkillsSection`, `agentSkillsFromProto.filter`, `categorizeCursorRulesForDisplay`, `filterByAgentEnvironment`, `filteredAgentSkillsFromProto.map`, `skills.filter`, `toLegacySkillCatalogItems`.

SHA-256 of the source span: `fd9e4137c7c5704bf18d7160fb9f51cab4207562ca58ac041609a4050b1a5e38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
