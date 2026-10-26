# `promptOverrideOrDefault`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640985-640990](../../../../../../reference/runtime/host-main.cjs#L640985-L640990) | `FunctionDeclaration` | no | `override, defaultPrompt` |
| [evaluation:431598-431603](../../../../../../reference/runtime/sand-eval-runner.cjs#L431598-L431603) | `FunctionDeclaration` | no | `override, defaultPrompt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640985-640990](../../../../../../reference/runtime/host-main.cjs#L640985-L640990) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431598-431603](../../../../../../reference/runtime/sand-eval-runner.cjs#L431598-L431603) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640985

Calls written directly in this body: `RESERVED_PROJECT_PROMPT_TAG.test`, `containsUnsafeControlCharacter`, `override.trim`.

SHA-256 of the source span: `1bb107b4d5354b7b8eb239079bc85c00525978143dc4e7201915ecdb044a6d78`.

### evaluation:431598

Calls written directly in this body: `RESERVED_PROJECT_PROMPT_TAG.test`, `containsUnsafeControlCharacter`, `override.trim`.

SHA-256 of the source span: `1bb107b4d5354b7b8eb239079bc85c00525978143dc4e7201915ecdb044a6d78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
