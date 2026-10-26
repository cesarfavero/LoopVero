# `createSystemPromptAssembly/renderMemoryLive`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552806-552920](../../../../../../reference/runtime/sand-eval-runner.cjs#L552806-L552920) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552806-552920](../../../../../../reference/runtime/sand-eval-runner.cjs#L552806-L552920) | 9 | 0 | 0 | 2 | 0 | 0 |

### evaluation:552806

Calls written directly in this body: `.filter`, `.join`, `controlParts.join`, `controlParts.push`, `deps.memoryFactsResolved`, `deps.memoryFolders`, `deps.memoryStore`, `deps.runType`, `deps.teamBot`, `deps.userMemory`, `deps.vaultMounted`, `factParts.join`, `factParts.push`, `memoryRecallHasFacts`, `policyParts.join`, `policyParts.push`, `readLeanExecutorFacts`, `recordMemoryTruncation`, `renderFolders`, `renderMemoryFactSnapshot`, `renderMemorySystemPolicyPrompt`, `renderMemorySystemPrompt`, `renderSandExecutorLeanMemoryLine`, `renderUserBotNotesPrompt`, `renderUserMemoryFactSnapshot`, `renderUserMemorySystemPolicyPrompt`, `renderUserMemorySystemPrompt`, `store.getLocation`, `store.recall`, `userMemory.getLocation`, `userMemory.getOwnShardLocation`, `userMemory.recall`.

Assignment or increment targets: `hasFacts`, `memoryTruncationRecorded`, `otherAgentMemoryFingerprint`, `otherAgentMemoryRender`.

SHA-256 of the source span: `b8577d788a6bf99c94445af5165fac14ab0b8cd05aa775f540b8ab0c2e9b02c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
