# `ownerAllowsAgentMergeInPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-agent.js` · [Module README](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636221-636223](../../../../../../reference/runtime/host-main.cjs#L636221-L636223) | `FunctionDeclaration` | no | `{ featureFlags, backgroundAgentSource }` |
| [evaluation:424277-424279](../../../../../../reference/runtime/sand-eval-runner.cjs#L424277-L424279) | `FunctionDeclaration` | no | `{ featureFlags, backgroundAgentSource }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636221-636223](../../../../../../reference/runtime/host-main.cjs#L636221-L636223) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424277-424279](../../../../../../reference/runtime/sand-eval-runner.cjs#L424277-L424279) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636221

Calls written directly in this body: `isEnvironmentSetupBackgroundComposerSource`.

SHA-256 of the source span: `3a8eec492b5068c67a0d3a63b6adce1498a5d78a725a383b4f7df63fdf54ea41`.

### evaluation:424277

Calls written directly in this body: `isEnvironmentSetupBackgroundComposerSource`.

SHA-256 of the source span: `3a8eec492b5068c67a0d3a63b6adce1498a5d78a725a383b4f7df63fdf54ea41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
