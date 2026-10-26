# `AgentRequestableWorkspaceRulesSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640067-640075](../../../../../../reference/runtime/host-main.cjs#L640067-L640075) | `FunctionDeclaration` | no | `{ agentRequestableRules, readToolName }` |
| [evaluation:430681-430689](../../../../../../reference/runtime/sand-eval-runner.cjs#L430681-L430689) | `FunctionDeclaration` | no | `{ agentRequestableRules, readToolName }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640067-640075](../../../../../../reference/runtime/host-main.cjs#L640067-L640075) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430681-430689](../../../../../../reference/runtime/sand-eval-runner.cjs#L430681-L430689) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:640067

Calls written directly in this body: `agentRequestableRules.map`, `jsx`.

SHA-256 of the source span: `46c756423c64ad27a4bdae9b2c60c062235a740d34530889e842e17b70468fb6`.

### evaluation:430681

Calls written directly in this body: `agentRequestableRules.map`, `jsx`.

SHA-256 of the source span: `46c756423c64ad27a4bdae9b2c60c062235a740d34530889e842e17b70468fb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
