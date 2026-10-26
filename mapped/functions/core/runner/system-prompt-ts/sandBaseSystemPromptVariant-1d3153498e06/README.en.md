# `sandBaseSystemPromptVariant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533272-533280](../../../../../../reference/runtime/sand-eval-runner.cjs#L533272-L533280) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533272-533280](../../../../../../reference/runtime/sand-eval-runner.cjs#L533272-L533280) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533272

Calls written directly in this body: `BASE_SYSTEM_PROMPT_VARIANTS.get`, `BASE_SYSTEM_PROMPT_VARIANTS.set`, `buildSandBaseSystemPrompt`, `promptCacheKey`.

Assignment or increment targets: `prompt`.

SHA-256 of the source span: `14e90307db41850685a242e8884aecb4d95dede07c9dd7ac1d6763a87e8e77e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
