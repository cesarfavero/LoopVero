# `BudgetedAgentSkillsSection/renderSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640095-640098](../../../../../../reference/runtime/host-main.cjs#L640095-L640098) | `ArrowFunctionExpression` | no | `skills, omittedNotice` |
| [evaluation:430709-430712](../../../../../../reference/runtime/sand-eval-runner.cjs#L430709-L430712) | `ArrowFunctionExpression` | no | `skills, omittedNotice` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640095-640098](../../../../../../reference/runtime/host-main.cjs#L640095-L640098) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430709-430712](../../../../../../reference/runtime/sand-eval-runner.cjs#L430709-L430712) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:640095

Calls written directly in this body: `aliasSkillCatalogPathRoots`, `jsx`, `renderAgentSkillItems`.

SHA-256 of the source span: `47d637a61a49105998bc898f6a70ba0145e02ca889f376f92563857015dbb25f`.

### evaluation:430709

Calls written directly in this body: `aliasSkillCatalogPathRoots`, `jsx`, `renderAgentSkillItems`.

SHA-256 of the source span: `47d637a61a49105998bc898f6a70ba0145e02ca889f376f92563857015dbb25f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
