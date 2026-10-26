# `renderAgentDirectorySystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/agent-directory-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/agent-directory-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536999-537050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536999-L537050) | `FunctionDeclaration` | no | `unorderedOthers, unorderedGroups = [], agentsRootDir, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536999-537050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536999-L537050) | 5 | 1 | 0 | 2 | 0 | 0 |

### evaluation:536999

Calls written directly in this body: `.join`, `.map`, `agentFolderDiscoveryLine`, `byStableId`, `group.members.map`, `groupChatHistoryLine`, `groups.slice`, `lines2.join`, `lines2.push`, `teammateRosterLines`.

SHA-256 of the source span: `e989949bafa2a8c1b5e509fb2496dd7c338b3d51d4a4819692cc1e1472ef0324`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
