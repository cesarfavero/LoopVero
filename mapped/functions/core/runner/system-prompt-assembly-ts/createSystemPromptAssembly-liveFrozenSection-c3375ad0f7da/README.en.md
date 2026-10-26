# `createSystemPromptAssembly/liveFrozenSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553117-553144](../../../../../../reference/runtime/sand-eval-runner.cjs#L553117-L553144) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553117-553144](../../../../../../reference/runtime/sand-eval-runner.cjs#L553117-L553144) | 17 | 0 | 0 | 9 | 0 | 0 |

### evaluation:553117

Calls written directly in this body: `botFilesForThisRunner`, `deps.mcpCustomInstructionsSection`, `deps.memoryStore`, `memoryControlLiveOrNull`, `memoryFactsInUserInfo`, `memoryFactsLiveOrNull`, `renderAgentDirectoryLive`, `renderAutomationsLive`, `renderBotFilesLive`, `renderSavedSendRulesLive`, `renderTimeZoneSectionLive`, `usesBuiltinSkillPointers`.

SHA-256 of the source span: `b105cee90f1bb706d590318055ff0e5482c3c26fb9500d6d3955303c910ec2ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
