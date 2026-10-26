# `SummarizationOrchestrator.handleSummarization`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649695-650323](../../../../../reference/runtime/host-main.cjs#L649695-L650323) | `method` | yes | `parentCtx, stateHandler, rootPromptExecutor, interactionListener, config2, requestContext, options2` |
| [evaluation:441348-441976](../../../../../reference/runtime/sand-eval-runner.cjs#L441348-L441976) | `method` | yes | `parentCtx, stateHandler, rootPromptExecutor, interactionListener, config2, requestContext, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649695-650323](../../../../../reference/runtime/host-main.cjs#L649695-L650323) | 56 | 0 | 8 | 8 | 4 | 4 |
| [evaluation:441348-441976](../../../../../reference/runtime/sand-eval-runner.cjs#L441348-L441976) | 56 | 0 | 8 | 8 | 4 | 4 |

### host:649695

Calls written directly in this body: `.includes`, `.map`, `.withTimeoutAndCancel`, `BigInt`, `Math.max`, `Promise.all`, `RedactedUpdates.summaryStarted`, `Updates.summaryCompleted`, `__addDisposableResource18`, `__disposeResources18`, `allMessages.find`, `allMessages.slice`, `backgroundSummarizationDiscarded.increment`, `backgroundSummarizationPersisted.increment`, `backgroundSummarizationPersistedAdditionalMessages.histogram`, `backgroundSummarizationPersistedEstimatedTokens.histogram`, `backgroundSummarizationTimeSavedMs.histogram`, `candidate.some`, `collectLiveAskQuestionOriginalIds`, `config2.pendingSummaryStore.trackPendingGeneration`, `config2.projectPromptGuidanceGenerator`, `config2.projectPromptTextGenerator`, `countMessageKinds`, `createLiveSummaryLifecycle`, `createRedactedConversationSummaryArchive`, `createRedactedCoreMessageSerde`, `createSpan`, `ctx.signal.addEventListener`, `ctx.withCancel`, `ctx.withDetached`, `ctx.withName`, `emitSummaryLifecycleAbandoned`, `emitSummaryLifecyclePersisted`, `emitSummaryLifecycleStarted`, `estimateTokenCount2`, `eventTracker.trackSummarizationPersistedForQualityGrading`, `eventTracker.trackSummarizationTriggered`, `formatProjectCompactionPrompt`, `fullReplacementMessages.flatMap`, `getAgentEventTracker`, `getClientVersionMetricTagsFromContext`, `getContextUsageInfo`, `getConversationId`, `getRequestId`, `getTokenDetails`, `interactionListener.sendUpdate`, `invalidGeneration.discard`, `isHookStepConfigured`, `isProjectSendMessageEnabled`, `logger62.error`, `logger62.info`, `logger62.warn`, `messagesActuallySummarized.filter`, `new Error`, `new ExecuteHookArgs`, `new ExecuteHookRequest`, `new PreCompactRequestQuery`, `new Set`, `new SummaryPlaceholderRejectedError`, `onPersisted`, `onRunCancelled`, `options2.canStartBackgroundSummary`, `options2.resourceAccessor.get`, `parentCtx.withName`, `performance.now`, `persistCompactionSegmentAfter`, `prepareMessagesForCompaction`, `processModeSystemReminder`, `refreshNamedAgentSelfDocumentInMessages`, `remoteHookExecutor.execute`, `replacementMessages.filter`, `resolveProjectConversationContext`, `resolveSelfSummaryFlavor`, `result.errorKind.toLowerCase`, `rootPromptExecutor.appendMessages`, `rootPromptExecutor.clearMessages`, `rootPromptExecutor.getMessages`, `stashSummarizationResultWhenOrphaned`, `stateHandler.clearBackgroundSummarizationState`, `stateHandler.clearSelfSummaryInputLimitFailureTokenCount`, `stateHandler.getPrivacyMode`, `stateHandler.getProjectSendMessageToolName`, `stateHandler.pushSummaryArchive`, `stateHandler.resolveStepMode`, `stateHandler.retainCompletedAskQuestionReceipts`, `stateHandler.setBackgroundSummarizationState`, `storedMessages.every`, `summarizationCounter.increment`, `summarizationPromise.catch`, `summarizationTime.histogram`, `summarizer.getMetricsModelLabel`, `summary.summary.safeTransform`, `summaryTranscriptsFolder`, `this.canUseSelfSummary`, `this.getSummarizer`, `toRedactedInteractionUpdate`.

Assignment or increment targets: `env_1.error`, `env_1.hasError`, `env_2.error`, `env_2.hasError`, `hookMessage`, `settledMessages`, `stateHandler.isRootProjectConversation`, `stateHandler.messageCountAtLastCompaction`, `stateHandler.tokenDetailsStaleAfterSummarization`, `summarizationFailed`, `summarizationLogFields`, `summarizerModelId`, `summarizerType`, `this.compactionSegmentWrites`, `useInProgressBackgroundSummarization`.

Explicit throw targets: `Error`, `SummaryPlaceholderRejectedError`, `error64`.

SHA-256 of the source span: `f18c5954477df2dbb6ff84c58b907f0dc23752817aa75969f73097fa5849a219`.

### evaluation:441348

Calls written directly in this body: `.includes`, `.map`, `.withTimeoutAndCancel`, `BigInt`, `Math.max`, `Promise.all`, `RedactedUpdates.summaryStarted`, `Updates.summaryCompleted`, `__addDisposableResource12`, `__disposeResources12`, `allMessages.find`, `allMessages.slice`, `backgroundSummarizationDiscarded.increment`, `backgroundSummarizationPersisted.increment`, `backgroundSummarizationPersistedAdditionalMessages.histogram`, `backgroundSummarizationPersistedEstimatedTokens.histogram`, `backgroundSummarizationTimeSavedMs.histogram`, `candidate.some`, `collectLiveAskQuestionOriginalIds`, `config2.pendingSummaryStore.trackPendingGeneration`, `config2.projectPromptGuidanceGenerator`, `config2.projectPromptTextGenerator`, `countMessageKinds`, `createLiveSummaryLifecycle`, `createRedactedConversationSummaryArchive`, `createRedactedCoreMessageSerde`, `createSpan`, `ctx.signal.addEventListener`, `ctx.withCancel`, `ctx.withDetached`, `ctx.withName`, `emitSummaryLifecycleAbandoned`, `emitSummaryLifecyclePersisted`, `emitSummaryLifecycleStarted`, `estimateTokenCount2`, `eventTracker.trackSummarizationPersistedForQualityGrading`, `eventTracker.trackSummarizationTriggered`, `formatProjectCompactionPrompt`, `fullReplacementMessages.flatMap`, `getAgentEventTracker`, `getClientVersionMetricTagsFromContext`, `getContextUsageInfo`, `getConversationId`, `getRequestId`, `getTokenDetails`, `interactionListener.sendUpdate`, `invalidGeneration.discard`, `isHookStepConfigured`, `isProjectSendMessageEnabled`, `logger39.error`, `logger39.info`, `logger39.warn`, `messagesActuallySummarized.filter`, `new Error`, `new ExecuteHookArgs`, `new ExecuteHookRequest`, `new PreCompactRequestQuery`, `new Set`, `new SummaryPlaceholderRejectedError`, `onPersisted`, `onRunCancelled`, `options2.canStartBackgroundSummary`, `options2.resourceAccessor.get`, `parentCtx.withName`, `performance.now`, `persistCompactionSegmentAfter`, `prepareMessagesForCompaction`, `processModeSystemReminder`, `refreshNamedAgentSelfDocumentInMessages`, `remoteHookExecutor.execute`, `replacementMessages.filter`, `resolveProjectConversationContext`, `resolveSelfSummaryFlavor`, `result.errorKind.toLowerCase`, `rootPromptExecutor.appendMessages`, `rootPromptExecutor.clearMessages`, `rootPromptExecutor.getMessages`, `stashSummarizationResultWhenOrphaned`, `stateHandler.clearBackgroundSummarizationState`, `stateHandler.clearSelfSummaryInputLimitFailureTokenCount`, `stateHandler.getPrivacyMode`, `stateHandler.getProjectSendMessageToolName`, `stateHandler.pushSummaryArchive`, `stateHandler.resolveStepMode`, `stateHandler.retainCompletedAskQuestionReceipts`, `stateHandler.setBackgroundSummarizationState`, `storedMessages.every`, `summarizationCounter.increment`, `summarizationPromise.catch`, `summarizationTime.histogram`, `summarizer.getMetricsModelLabel`, `summary.summary.safeTransform`, `summaryTranscriptsFolder`, `this.canUseSelfSummary`, `this.getSummarizer`, `toRedactedInteractionUpdate`.

Assignment or increment targets: `env_1.error`, `env_1.hasError`, `env_2.error`, `env_2.hasError`, `hookMessage`, `settledMessages`, `stateHandler.isRootProjectConversation`, `stateHandler.messageCountAtLastCompaction`, `stateHandler.tokenDetailsStaleAfterSummarization`, `summarizationFailed`, `summarizationLogFields`, `summarizerModelId`, `summarizerType`, `this.compactionSegmentWrites`, `useInProgressBackgroundSummarization`.

Explicit throw targets: `Error`, `SummaryPlaceholderRejectedError`, `error63`.

SHA-256 of the source span: `3242ffa3c1ac241086192df00c088ef3d4bf019418a84d4e0d17bc1cf0d4641a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
