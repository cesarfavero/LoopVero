# `createSystemPromptAssembly/renderAgentDirectoryLive`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553290-553328](../../../../../../reference/runtime/sand-eval-runner.cjs#L553290-L553328) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553290-553328](../../../../../../reference/runtime/sand-eval-runner.cjs#L553290-L553328) | 8 | 0 | 0 | 7 | 0 | 0 |

### evaluation:553290

Calls written directly in this body: `deps.agentDirectory`, `deps.agentGroups`, `deps.agentsRootDir`, `deps.gates.sendToAgentRoster`, `deps.gates.teamBotDiscovery`, `deps.skillAccess`, `offersSendToAgent`, `renderAgentDirectorySystemPrompt`, `renderAutomationAgentDirectorySystemPrompt`, `renderTeammatesUserInfoBlock`, `renderTrimmedAgentDirectorySystemPrompt`, `teamBotLinksSkillPointer`, `usesBuiltinSkillPointers`.

SHA-256 of the source span: `e63566a23408896a2ee9df2c549157280b46f656a40507121a1107aa5d9e1c23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
