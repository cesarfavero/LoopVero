# `CloudTaskInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-agent.js` · [Module README](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636184-636206](../../../../../../reference/runtime/host-main.cjs#L636184-L636206) | `FunctionDeclaration` | no | `{ gitRepos, designatedBranches, startedAsNewProject = false, prsOnlyOnRequest = false, newProjectSeededEmptyRoot = false, agentPreviewCard = false, preferMarkdownPreviewLink = false, skipPreviewScreenshot = false, agentPreviewCardXmllint = false, appsPublishPill = false, branchPrefix, branchSuffix, allowMultipleBranches = false, preferCurrentBranchInMultiPrMode = false, toolInfo, staleBuildGitRefs, pushAfterTesting }` |
| [evaluation:424240-424262](../../../../../../reference/runtime/sand-eval-runner.cjs#L424240-L424262) | `FunctionDeclaration` | no | `{ gitRepos, designatedBranches, startedAsNewProject = false, prsOnlyOnRequest = false, newProjectSeededEmptyRoot = false, agentPreviewCard = false, preferMarkdownPreviewLink = false, skipPreviewScreenshot = false, agentPreviewCardXmllint = false, appsPublishPill = false, branchPrefix, branchSuffix, allowMultipleBranches = false, preferCurrentBranchInMultiPrMode = false, toolInfo, staleBuildGitRefs, pushAfterTesting }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636184-636206](../../../../../../reference/runtime/host-main.cjs#L636184-L636206) | 32 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424240-424262](../../../../../../reference/runtime/sand-eval-runner.cjs#L424240-L424262) | 32 | 0 | 0 | 1 | 0 | 0 |

### host:636184

Calls written directly in this body: `buildRepoPathLookup`, `getDesignatedBranchDisplayInfo`, `getGitRepoBranchDisplayInfo`, `gitRepoBranchDisplays.map`, `jsx`, `jsxs`.

SHA-256 of the source span: `d0bc59c57b55d58e3c63e9071b36f4417805001613885af19d6aeaffa2e16300`.

### evaluation:424240

Calls written directly in this body: `buildRepoPathLookup`, `getDesignatedBranchDisplayInfo`, `getGitRepoBranchDisplayInfo`, `gitRepoBranchDisplays.map`, `jsx`, `jsxs`.

SHA-256 of the source span: `d0bc59c57b55d58e3c63e9071b36f4417805001613885af19d6aeaffa2e16300`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
