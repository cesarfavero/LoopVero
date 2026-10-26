# `UserInfoSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639984-640008](../../../../../../reference/runtime/host-main.cjs#L639984-L640008) | `FunctionDeclaration` | no | `{ env, dsv3, hasGitRepos, gitRepoInfoComplete, gitRepos, todaysDate, terminalsFolder, agentSharedNotesFolder, agentConversationNotesFolder, metaAgentNotesDirectory, metaAgentNotesEnabled, displayTodaysDate, displayGitRepoStatusLine, displayUnknownWorkspacePath, agentStorePathsAdvertisedInPromptEnabled }` |
| [evaluation:430598-430622](../../../../../../reference/runtime/sand-eval-runner.cjs#L430598-L430622) | `FunctionDeclaration` | no | `{ env, dsv3, hasGitRepos, gitRepoInfoComplete, gitRepos, todaysDate, terminalsFolder, agentSharedNotesFolder, agentConversationNotesFolder, metaAgentNotesDirectory, metaAgentNotesEnabled, displayTodaysDate, displayGitRepoStatusLine, displayUnknownWorkspacePath, agentStorePathsAdvertisedInPromptEnabled }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639984-640008](../../../../../../reference/runtime/host-main.cjs#L639984-L640008) | 14 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:430598-430622](../../../../../../reference/runtime/sand-eval-runner.cjs#L430598-L430622) | 14 | 0 | 0 | 2 | 0 | 0 |

### host:639984

Calls written directly in this body: `.join`, `allMountedAgentStores.filter`, `allMountedAgentStores.some`, `env.workspacePaths.map`, `gitRepos.map`, `isWorktreesPath`, `jsx`, `jsxs`, `mountedAgentStores.some`.

SHA-256 of the source span: `529f17014c8c8d378dab52ed904ddbffa19cd06e9fb46f0594b1c9c6a56219f6`.

### evaluation:430598

Calls written directly in this body: `.join`, `allMountedAgentStores.filter`, `allMountedAgentStores.some`, `env.workspacePaths.map`, `gitRepos.map`, `isWorktreesPath`, `jsx`, `jsxs`, `mountedAgentStores.some`.

SHA-256 of the source span: `529f17014c8c8d378dab52ed904ddbffa19cd06e9fb46f0594b1c9c6a56219f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
