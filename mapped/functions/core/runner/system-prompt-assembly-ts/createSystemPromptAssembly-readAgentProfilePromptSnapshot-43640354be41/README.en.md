# `createSystemPromptAssembly/readAgentProfilePromptSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552752-552754](../../../../../../reference/runtime/sand-eval-runner.cjs#L552752-L552754) | `FunctionDeclaration` | no | `store` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552752-552754](../../../../../../reference/runtime/sand-eval-runner.cjs#L552752-L552754) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552752

Calls written directly in this body: `store.getAgentProfilePromptSnapshot`.

SHA-256 of the source span: `ad1cabb60ebdb47c403bb59c67a04cc3ea988e82def6db6a14aede79c5d6b2d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
