# `buildSandBaseSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533133-533136](../../../../../../reference/runtime/sand-eval-runner.cjs#L533133-L533136) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533133-533136](../../../../../../reference/runtime/sand-eval-runner.cjs#L533133-L533136) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533133

Calls written directly in this body: `buildSandBaseSystemPromptSections`, `dropSkillBackedSections`, `renderSandPromptSections`.

SHA-256 of the source span: `b5a25c6e6970a33bed2ae83ce3d3c3dfd9291ba33f7eb57ec5a0500c5f3a1d7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
