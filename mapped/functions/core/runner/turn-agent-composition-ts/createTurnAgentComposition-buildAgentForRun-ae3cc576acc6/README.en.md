# `createTurnAgentComposition/buildAgentForRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588074-588509](../../../../../../reference/runtime/sand-eval-runner.cjs#L588074-L588509) | `FunctionDeclaration` | no | `sessions, boxConnection, turnScope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588074-588509](../../../../../../reference/runtime/sand-eval-runner.cjs#L588074-L588509) | 18 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588074

Calls written directly in this body: `.includes`, `.map`, `.some`, `Object.values`, `buildTurnSubagentRoster`, `createExternalSendCheck`, `createParentConversationCallMiddleware`, `createRenderCardRegistry`, `createSandBackgroundSummarizationProps`, `createSandPromptModelInfo`, `createSandSummarizationHandler`, `createSentLinkChecks`, `createSubagentExecutor`, `createTurnApprovalProviders`, `createTurnConnectorCards`, `createTurnMcpAppEmitter`, `createTurnMcpExecutorEntries`, `createTurnPromptExecutor`, `createTurnShellExecutorEntries`, `createTurnSubagentLaunch`, `executorProfiles.profiles.map`, `host.autoReviewGate.currentModes`, `host.createRemoteBoxResourceAccessor`, `host.getBlobStore`, `host.inference.getGeminiVideoAttachedMediaUrlProvider`, `host.systemPromptAssembly.createSystemPromptGeneratorForRun`, `host.userComputers.list`, `isMediaReviewSubagent`, `lastReportedContextWindow`, `listedSkills.access`, `localEntries.push`, `new AnysphereAgent`, `new CombinedResourceAccessor`, `new ForwardingInteractionListener`, `new McpRepairsThisTurn`, `new NoopConversationActionReceiver`, `new NoopDocumentationHydrationService`, `new NoopWebScraperService`, `new RequestContext`, `new RequestContextEnv`, `new SandRequestContextExecutor`, `new Set`, `new SubagentRegistry`, `resourceEntry`, `sandWidgetShownReporter`, `scopeAttachedMediaToConversation`, `session.getModelId`, `toRedactedInteractionListener`, `turnToolHost.activeTurnRequestSource`, `turnToolHost.gates.generalizedSelfSummaryPrompt`, `turnToolHost.gates.prependDedupeMaxTurns`, `turnToolHost.getConversationId`, `turnToolHost.getTranscriptId`, `turnToolHost.requestContext.resolve`.

Assignment or increment targets: `executorProfileNamesForRun`.

SHA-256 of the source span: `277d9e336b8298da32b19898ed7e4520e069c61ac3fa84edafc2f306b0caf9f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
