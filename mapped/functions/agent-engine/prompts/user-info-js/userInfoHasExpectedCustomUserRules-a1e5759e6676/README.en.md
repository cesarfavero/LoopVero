# `userInfoHasExpectedCustomUserRules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640341-640363](../../../../../../reference/runtime/host-main.cjs#L640341-L640363) | `FunctionDeclaration` | no | `content, modelInfo, featureFlags, options2` |
| [evaluation:430955-430977](../../../../../../reference/runtime/sand-eval-runner.cjs#L430955-L430977) | `FunctionDeclaration` | no | `content, modelInfo, featureFlags, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640341-640363](../../../../../../reference/runtime/host-main.cjs#L640341-L640363) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430955-430977](../../../../../../reference/runtime/sand-eval-runner.cjs#L430955-L430977) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640341

Calls written directly in this body: `getComposer2CustomUserRulesForModel`, `rules.map`, `shouldInjectUiBrowserVerificationPrompt`, `stripWhitespace`, `stripped.includes`, `strippedRules.every`, `strippedRules.some`.

SHA-256 of the source span: `c791b34f4be8f014ef4c0f2242395613e32acf2f844201330054cc3185418359`.

### evaluation:430955

Calls written directly in this body: `getComposer2CustomUserRulesForModel`, `rules.map`, `shouldInjectUiBrowserVerificationPrompt`, `stripWhitespace`, `stripped.includes`, `strippedRules.every`, `strippedRules.some`.

SHA-256 of the source span: `c791b34f4be8f014ef4c0f2242395613e32acf2f844201330054cc3185418359`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
