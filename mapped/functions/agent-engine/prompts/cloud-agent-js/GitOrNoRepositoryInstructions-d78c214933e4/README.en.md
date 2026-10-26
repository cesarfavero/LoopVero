# `GitOrNoRepositoryInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-agent.js` · [Module README](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636218-636220](../../../../../../reference/runtime/host-main.cjs#L636218-L636220) | `FunctionDeclaration` | no | `{ isRepoless, repolessPromptVariant, gitInstructionsProps }` |
| [evaluation:424274-424276](../../../../../../reference/runtime/sand-eval-runner.cjs#L424274-L424276) | `FunctionDeclaration` | no | `{ isRepoless, repolessPromptVariant, gitInstructionsProps }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636218-636220](../../../../../../reference/runtime/host-main.cjs#L636218-L636220) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424274-424276](../../../../../../reference/runtime/sand-eval-runner.cjs#L424274-L424276) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:636218

Calls written directly in this body: `GitInstructions`, `NoRepositoryAccessInstructions`.

SHA-256 of the source span: `3c944fe4aec8180a3a82f27278d77bdbfa82b8d69d6e052d397d1a43c44bc427`.

### evaluation:424274

Calls written directly in this body: `GitInstructions`, `NoRepositoryAccessInstructions`.

SHA-256 of the source span: `3c944fe4aec8180a3a82f27278d77bdbfa82b8d69d6e052d397d1a43c44bc427`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
