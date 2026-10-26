# `buildTurnSubagentRoster`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/turn-composition/subagent-roster.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/subagent-roster-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587631-587701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587631-L587701) | `FunctionDeclaration` | no | `host, turnToolHost, turn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587631-587701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587631-L587701) | 10 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587631

Calls written directly in this body: `artifactToolOffers`, `availableDesktopExecutor`, `buildSandSubagentConfigs`, `createSandComputerUseSubagentConfig`, `createSandExecutorProfileModels`, `createSandExecutorSubagentConfig`, `createSandKnowledgeWorkSubagentConfig`, `createSandUserComputerUseSubagentConfig`, `createSubagentModels`, `executorWritesPages`, `hasExecutorSubagent`, `host.inference.getExecutorProfiles`, `host.knowledgeWorkSubagentDescription`, `offersUserComputerUseSubagent`, `sandSubagentToolName`, `subagentConfigs.findIndex`, `subagentConfigs.forEach`, `subagentConfigs.push`, `subagentConfigs.some`, `subagentConfigs.splice`, `turnToolHost.gates.executorForkContext`, `turnToolHost.gates.knowledgeWork`, `turnToolHost.gates.taskSubagentRoster`, `turnToolHost.getRemoteBoxAvailable`, `turnToolHost.isCombinedComputerUseAvailable`.

Assignment or increment targets: `userInfoPromptVariant`.

SHA-256 of the source span: `2c1f5bc16760b685c3797f8c6c592ece1a3787f07a59822d9e3fca29566dd8d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
