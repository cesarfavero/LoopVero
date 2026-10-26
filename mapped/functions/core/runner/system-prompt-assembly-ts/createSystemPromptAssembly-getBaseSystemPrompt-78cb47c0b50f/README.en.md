# `createSystemPromptAssembly/getBaseSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553395-553518](../../../../../../reference/runtime/sand-eval-runner.cjs#L553395-L553518) | `FunctionDeclaration` | no | `{     sendToUserEndTurnEnabled,     skillPointers,     baseOverride,     leanExecutorFacts,     canUseUserComputer   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553395-553518](../../../../../../reference/runtime/sand-eval-runner.cjs#L553395-L553518) | 7 | 0 | 0 | 5 | 0 | 0 |

### evaluation:553395

Calls written directly in this body: `buildSandExecutorLeanBasePrompt`, `deps.connectorSearchFirstLine`, `deps.gates.ackBeforeTools`, `deps.gates.activeReactions`, `deps.gates.agentEmail`, `deps.gates.agentEmailDisabledByTeam`, `deps.gates.agentEmailDrafts`, `deps.gates.agentEmailMultipleInboxes`, `deps.gates.agentEmailNotAvailable`, `deps.gates.appsPublish`, `deps.gates.cloudAgentArtifacts`, `deps.gates.cloudAgentDurableWatch`, `deps.gates.cloudAgentPublishApp`, `deps.gates.cloudAgentsDisabledByTeam`, `deps.gates.cloudAgentsUnavailableOnPlan`, `deps.gates.connectorSearchFirst`, `deps.gates.generateVideo`, `deps.gates.linkVerification`, `deps.gates.originBuiltinMounted`, `deps.gates.recentChanges`, `deps.gates.sandUiMap`, `deps.gates.unblockResearch`, `deps.gates.vaultCards`, `deps.gates.voiceCall`, `deps.gates.webSearchDisabledByTeamNetwork`, `deps.hasGenerateImage`, `deps.hasGenerateVideo`, `deps.memoryStore`, `deps.skillAccess`, `deps.unblockResearchPointerWhen`, `draftByDefaultForTurn`, `draftToolAvailableForTurn`, `executorWritesPages2`, `linkItemsOffered`, `namedRiskScopeOptions`, `offersSendToAgent`, `pageOffers`, `sandAutomationSubagentSystemPromptVariant`, `sandBaseSystemPromptVariant`, `sandSubagentToolName`, `sandWebToolOffers`, `scopedSafetyChecksOptions`, `substituteConnectorClaimsOptions`, `userProxyIdentityOptions`, `usesDynamicToolNamespaces`, `visualizeOffered`.

SHA-256 of the source span: `3c7020cd3815c1eb23469b6b3f8f4a9219564ac2cf216928c80b1a3363a3f662`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
