# `RulesSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640370-640373](../../../../../../reference/runtime/host-main.cjs#L640370-L640373) | `FunctionDeclaration` | no | `{ globalRules, agentRequestableRules, userRules, readToolName, composer2CustomUserRules, alwaysAppliedRulesDescription }` |
| [evaluation:430984-430987](../../../../../../reference/runtime/sand-eval-runner.cjs#L430984-L430987) | `FunctionDeclaration` | no | `{ globalRules, agentRequestableRules, userRules, readToolName, composer2CustomUserRules, alwaysAppliedRulesDescription }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640370-640373](../../../../../../reference/runtime/host-main.cjs#L640370-L640373) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430984-430987](../../../../../../reference/runtime/sand-eval-runner.cjs#L430984-L430987) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640370

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `9b12562279817fafcdc9002ecba64ccdf8f8ec033c67ea60bda24cd684ff159b`.

### evaluation:430984

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `9b12562279817fafcdc9002ecba64ccdf8f8ec033c67ea60bda24cd684ff159b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
