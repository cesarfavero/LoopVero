# `buildRulesPromptSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640374-640404](../../../../../../reference/runtime/host-main.cjs#L640374-L640404) | `FunctionDeclaration` | no | `props, options2` |
| [evaluation:430988-431018](../../../../../../reference/runtime/sand-eval-runner.cjs#L430988-L431018) | `FunctionDeclaration` | no | `props, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640374-640404](../../../../../../reference/runtime/host-main.cjs#L640374-L640404) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:430988-431018](../../../../../../reference/runtime/sand-eval-runner.cjs#L430988-L431018) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:640374

Calls written directly in this body: `agentRequestableRules.filter`, `buildAntiAskQuestionUserRule`, `categorizeCursorRulesForDisplay`, `getComposer2CustomUserRulesForModel`, `getComposerGitUserRules`, `jsx`, `shouldInjectComposerGitUserRules`.

SHA-256 of the source span: `0497a65321a6862bd506166f982d16ac2301e3358af4010b96713c63b94bcd79`.

### evaluation:430988

Calls written directly in this body: `agentRequestableRules.filter`, `buildAntiAskQuestionUserRule`, `categorizeCursorRulesForDisplay`, `getComposer2CustomUserRulesForModel`, `getComposerGitUserRules`, `jsx`, `shouldInjectComposerGitUserRules`.

SHA-256 of the source span: `0497a65321a6862bd506166f982d16ac2301e3358af4010b96713c63b94bcd79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
