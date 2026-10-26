# `core/runner/conversation-state.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../../guide/components/turns/README.en.md) · [General index](../../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:752134-752138](../../../../../reference/runtime/host-main.cjs#L752134-L752138) |
| evaluation | [evaluation:529172-529697](../../../../../reference/runtime/sand-eval-runner.cjs#L529172-L529697) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `UsageSanitizingMiddleware.constructor` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/UsageSanitizingMiddleware-constructor-21bb8afb0cbe/README.en.md) |
| `UsageSanitizingMiddleware.stream` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/UsageSanitizingMiddleware-stream-9423db1d6650/README.en.md) |
| `UsageSanitizingMiddleware.stream/onResolvedModelId` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/UsageSanitizingMiddleware-stream-onResolvedModelId-78188187914c/README.en.md) |
| `awaitBlockUntilMs` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/awaitBlockUntilMs-b595ac959922/README.en.md) |
| `buildUnansweredQuestionsNote` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/buildUnansweredQuestionsNote-8018e7d5fb4b/README.en.md) |
| `buildUnansweredQuestionsNote/clean` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/buildUnansweredQuestionsNote-clean-05032d88e226/README.en.md) |
| `classifyCompletedAwaitOutcome` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/classifyCompletedAwaitOutcome-7694dde65aa6/README.en.md) |
| `composeSandPromptStreamObservers` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/composeSandPromptStreamObservers-cf0d7f372ef1/README.en.md) |
| `composeSandPromptStreamObservers/onRequestStart` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/composeSandPromptStreamObservers-onRequestStart-1596338e9a57/README.en.md) |
| `composeSandPromptStreamObservers/onRequestStart/onServedModel` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/composeSandPromptStreamObservers-onRequestStart-onServedModel-af9f97339a84/README.en.md) |
| `composeSandPromptStreamObservers/onRequestStart/onStreamEnd` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/composeSandPromptStreamObservers-onRequestStart-onStreamEnd-33314f41bc87/README.en.md) |
| `composeSandPromptStreamObservers/onRequestStart/onUsage` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/composeSandPromptStreamObservers-onRequestStart-onUsage-935ccfc111c3/README.en.md) |
| `createSandResolvedModelTracker` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/createSandResolvedModelTracker-0963a0bc944e/README.en.md) |
| `createSandResolvedModelTracker/beginRequest` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/createSandResolvedModelTracker-beginRequest-54b6cd2e4d39/README.en.md) |
| `createSandResolvedModelTracker/get` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/createSandResolvedModelTracker-get-c3be3bd5e9b4/README.en.md) |
| `createSandSummarizationHandler` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/createSandSummarizationHandler-4738e0627ec8/README.en.md) |
| `isSelfSummaryFlavor` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/isSelfSummaryFlavor-bb1c106034bf/README.en.md) |
| `lastReportedContextWindow` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/lastReportedContextWindow-2db6de79088c/README.en.md) |
| `lastReportedSelfSummaryFlavor` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/lastReportedSelfSummaryFlavor-e37f7ea00c78/README.en.md) |
| `lastReportedSelfSummarySupport` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/lastReportedSelfSummarySupport-195fcafb1164/README.en.md) |
| `safelyObservePromptStream` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/safelyObservePromptStream-6acfc963b1fe/README.en.md) |
| `sandAdoptedSelfSummaryFlavor` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sandAdoptedSelfSummaryFlavor-a86bfd80dca7/README.en.md) |
| `sandModelCallUsageObserver` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sandModelCallUsageObserver-10986bea9c2c/README.en.md) |
| `sandModelCallUsageObserver/onRequestStart` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sandModelCallUsageObserver-onRequestStart-36d5fc9a7bf6/README.en.md) |
| `sandModelCallUsageObserver/onRequestStart/onStreamEnd` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sandModelCallUsageObserver-onRequestStart-onStreamEnd-9ef19a5431e0/README.en.md) |
| `sandModelCallUsageObserver/onRequestStart/onUsage` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sandModelCallUsageObserver-onRequestStart-onUsage-21fde88f8b48/README.en.md) |
| `sandModelCallUsageObserver/onRequestStart/report` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sandModelCallUsageObserver-onRequestStart-report-506a11be9ee0/README.en.md) |
| `sandSelfSummarySupported` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sandSelfSummarySupported-653a61414580/README.en.md) |
| `sanitizeExtendedUsage` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizeExtendedUsage-4a7d8db8fff2/README.en.md) |
| `sanitizeFullStream` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizeFullStream-f2deb50eb6e2/README.en.md) |
| `sanitizePromptExecutorUsage` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptExecutorUsage-0fe5992cd141/README.en.md) |
| `sanitizePromptSessionUsage` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptSessionUsage-b516f1d36b63/README.en.md) |
| `sanitizePromptSessionUsage/getEarlyCompaction` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptSessionUsage-getEarlyCompaction-e55283865157/README.en.md) |
| `sanitizePromptSessionUsage/getExecutor` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptSessionUsage-getExecutor-a41e66e51aa0/README.en.md) |
| `sanitizePromptSessionUsage/getExecutor/onRequestStart` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptSessionUsage-getExecutor-onRequestStart-4969c293ae66/README.en.md) |
| `sanitizePromptSessionUsage/getExecutor/onResolvedModelId` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptSessionUsage-getExecutor-onResolvedModelId-04b1822ac768/README.en.md) |
| `sanitizePromptSessionUsage/getExecutorWithoutResolvedModelTracking` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptSessionUsage-getExecutorWithoutResolvedModelTracking-9ce6b772c861/README.en.md) |
| `sanitizePromptSessionUsage/getModelId` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptSessionUsage-getModelId-2f0c05dbdc6f/README.en.md) |
| `sanitizePromptSessionUsage/getResolvedModelId` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizePromptSessionUsage-getResolvedModelId-2f2e842c7a9e/README.en.md) |
| `sanitizeStreamResult` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizeStreamResult-4497e89a17da/README.en.md) |
| `sanitizeUsage` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/sanitizeUsage-23fc5d8442d4/README.en.md) |
| `selectUnconfirmedUserMessages` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/selectUnconfirmedUserMessages-19eb169c2bc3/README.en.md) |
| `shouldUseSandSelfSummary` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/shouldUseSandSelfSummary-407fa40afcbb/README.en.md) |
| `skippedQuestionsSection` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/skippedQuestionsSection-3bf57af301a3/README.en.md) |
| `toSafeTokenCount2` | 1 | [Static behavior](../../../../functions/core/runner/conversation-state-ts/toSafeTokenCount2-0cf6e588d510/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
