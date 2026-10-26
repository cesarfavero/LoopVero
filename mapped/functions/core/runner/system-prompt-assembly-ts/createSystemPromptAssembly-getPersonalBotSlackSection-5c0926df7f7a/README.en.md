# `createSystemPromptAssembly/getPersonalBotSlackSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553557-553562](../../../../../../reference/runtime/sand-eval-runner.cjs#L553557-L553562) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553557-553562](../../../../../../reference/runtime/sand-eval-runner.cjs#L553557-L553562) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553557

Calls written directly in this body: `deps.personalSlack`, `deps.teamBot`, `renderPersonalSlackPrompt`.

SHA-256 of the source span: `86d5dae43c9d22b3bae4af4752426f33dcabb49251726371a3270e4cc9a7f081`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
