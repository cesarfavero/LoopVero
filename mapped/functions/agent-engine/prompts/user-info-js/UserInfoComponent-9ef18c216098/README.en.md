# `UserInfoComponent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640487-640616](../../../../../../reference/runtime/host-main.cjs#L640487-L640616) | `FunctionDeclaration` | no | `{ props }` |
| [evaluation:431101-431230](../../../../../../reference/runtime/sand-eval-runner.cjs#L431101-L431230) | `FunctionDeclaration` | no | `{ props }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640487-640616](../../../../../../reference/runtime/host-main.cjs#L640487-L640616) | 14 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431101-431230](../../../../../../reference/runtime/sand-eval-runner.cjs#L431101-L431230) | 14 | 0 | 0 | 2 | 0 | 0 |

### host:640487

Calls written directly in this body: `.filter`, `McpMetaToolInstructions`, `automationInstructions.trim`, `buildAvailableSkillsPromptSection`, `buildRulesPromptSection`, `categorizeCursorRulesForDisplay`, `filterProjectWorkspaceMutationMcpDescriptors`, `getComposer2CloudTestingSectionElements`, `getComposer2CloudTestingSectionsPlacement`, `getDsv3McpFileSystemInstructions`, `getFriendlyDateForTimeZone`, `getPreviewSharingFormat`, `gitRepos.filter`, `globalRules.map`, `isNamedAgentHomePromptSession`, `jsx`, `jsxs`, `materializeAutomationMemoryInstruction`, `prefersMarkdownPreviewLink`, `props.env.devMockPromptTime.toDate`, `props.env.processWorkingDirectory.trim`, `props.hooksAdditionalContext.trim`, `props.userIntentSummary.trim`, `resolveCloudInstructions`, `resolveMetaAgentNotesDirectory`.

SHA-256 of the source span: `c18a7fcde7711d4a50b8175a092e5569d9babd26a4fd8232efa02659c010c4ce`.

### evaluation:431101

Calls written directly in this body: `.filter`, `McpMetaToolInstructions`, `automationInstructions.trim`, `buildAvailableSkillsPromptSection`, `buildRulesPromptSection`, `categorizeCursorRulesForDisplay`, `filterProjectWorkspaceMutationMcpDescriptors`, `getComposer2CloudTestingSectionElements`, `getComposer2CloudTestingSectionsPlacement`, `getDsv3McpFileSystemInstructions`, `getFriendlyDateForTimeZone`, `getPreviewSharingFormat`, `gitRepos.filter`, `globalRules.map`, `isNamedAgentHomePromptSession`, `jsx`, `jsxs`, `materializeAutomationMemoryInstruction`, `prefersMarkdownPreviewLink`, `props.env.devMockPromptTime.toDate`, `props.env.processWorkingDirectory.trim`, `props.hooksAdditionalContext.trim`, `props.userIntentSummary.trim`, `resolveCloudInstructions`, `resolveMetaAgentNotesDirectory`.

SHA-256 of the source span: `c18a7fcde7711d4a50b8175a092e5569d9babd26a4fd8232efa02659c010c4ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
