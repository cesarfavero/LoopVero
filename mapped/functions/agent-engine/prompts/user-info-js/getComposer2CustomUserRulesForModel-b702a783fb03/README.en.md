# `getComposer2CustomUserRulesForModel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640277-640327](../../../../../../reference/runtime/host-main.cjs#L640277-L640327) | `FunctionDeclaration` | no | `modelInfo, featureFlags, options2` |
| [evaluation:430891-430941](../../../../../../reference/runtime/sand-eval-runner.cjs#L430891-L430941) | `FunctionDeclaration` | no | `modelInfo, featureFlags, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640277-640327](../../../../../../reference/runtime/host-main.cjs#L640277-L640327) | 13 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:430891-430941](../../../../../../reference/runtime/sand-eval-runner.cjs#L430891-L430941) | 13 | 0 | 0 | 4 | 0 | 0 |

### host:640277

Calls written directly in this body: `buildMatterhornAwaitToolUserRule`, `buildMatterhornGrepRule`, `buildMatterhornShellToolUserRule`, `shouldInjectUiBrowserVerificationPrompt`.

SHA-256 of the source span: `8bd3d4c02e780344a9e47c50be50cecde5fd9118e8b7df80fd75a3c1c7ad6355`.

### evaluation:430891

Calls written directly in this body: `buildMatterhornAwaitToolUserRule`, `buildMatterhornGrepRule`, `buildMatterhornShellToolUserRule`, `shouldInjectUiBrowserVerificationPrompt`.

SHA-256 of the source span: `8bd3d4c02e780344a9e47c50be50cecde5fd9118e8b7df80fd75a3c1c7ad6355`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
