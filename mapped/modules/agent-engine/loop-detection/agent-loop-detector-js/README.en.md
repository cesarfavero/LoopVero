# `agent-engine/loop-detection/agent-loop-detector.js`

[English](README.en.md) · [Português (Brasil)](README.md)

Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.

[Functional guide](../../../../../guide/architecture/README.en.md) · [General index](../../../../README.en.md)

## Source sections

| Artifact | Source span |
| --- | --- |
| host | [host:622224-622229](../../../../../reference/runtime/host-main.cjs#L622224-L622229) |
| host | [host:624502-624776](../../../../../reference/runtime/host-main.cjs#L624502-L624776) |
| evaluation | [evaluation:306578-306581](../../../../../reference/runtime/sand-eval-runner.cjs#L306578-L306581) |
| evaluation | [evaluation:310624-311497](../../../../../reference/runtime/sand-eval-runner.cjs#L310624-L311497) |

## Named functions

| Function or method | Occurrences | README |
| --- | ---: | --- |
| `AgentLoopError.constructor` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/AgentLoopError-constructor-8dbbbdeca937/README.en.md) |
| `SingleMessageLoopDetector2.constructor` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-4ce9e75e9b1d/README.en.md) |
| `SingleMessageLoopDetector2.constructor/maxCheckTimeMs` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-maxCheckTimeMs-c5fdae9ff8f2/README.en.md) |
| `SingleMessageLoopDetector2.constructor/maxLineLength` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-maxLineLength-2a93284dcd64/README.en.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinPTimesK` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinPTimesK-b8ebd6cfd2eb/README.en.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinPTimesKInCodeFence` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinPTimesKInCodeFence-5bac364fe041/README.en.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinRepetitions` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinRepetitions-4bea79eb5fe1/README.en.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinRepetitionsInCodeFence` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinRepetitionsInCodeFence-1160e3ea554b/README.en.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinTotalChars` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinTotalChars-0467bf97d31b/README.en.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinTotalCharsInCodeFence` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinTotalCharsInCodeFence-65497723452e/README.en.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMaxP` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMaxP-398aae49a89f/README.en.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMinPTimesK` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMinPTimesK-36622e2e7de2/README.en.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMinPTimesKInCodeFence` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMinPTimesKInCodeFence-8ffaa7053d0f/README.en.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMinRepetitions` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMinRepetitions-cfd88d4bbe6e/README.en.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMinRepetitionsInCodeFence` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMinRepetitionsInCodeFence-dd6f608c9b8e/README.en.md) |
| `checkAndHandleLoopOnToolResultAppend` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkAndHandleLoopOnToolResultAppend-163b6b16a3ee/README.en.md) |
| `checkAndHandleLoopOnToolResultAppend/applyNudge` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkAndHandleLoopOnToolResultAppend-applyNudge-4626b5a4c88c/README.en.md) |
| `checkForAgentMessageLooping` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-3146ffb79e56/README.en.md) |
| `checkForAgentMessageLooping/createRetrySkipper` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-createRetrySkipper-46fd9b9036bc/README.en.md) |
| `checkForAgentMessageLooping/isInvitedRetry` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-isInvitedRetry-20f82ccd8de0/README.en.md) |
| `checkForAgentMessageLooping/runOf` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-runOf-c5be47c58f31/README.en.md) |
| `checkForAgentMessageLooping/shouldIncludeMessage` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-shouldIncludeMessage-8c9371b3106a/README.en.md) |
| `checkForAgentOutboundMessageFlood` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentOutboundMessageFlood-507d89eb543c/README.en.md) |
| `checkForAgentSingleMessageLooping` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentSingleMessageLooping-d03226233cf0/README.en.md) |
| `collectRunOccurrenceResults` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/collectRunOccurrenceResults-1cc392ebdffb/README.en.md) |
| `convertCoreMessagesToLoopFormat` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/convertCoreMessagesToLoopFormat-d4d9e380c13f/README.en.md) |
| `createLoopReminderMessage` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/createLoopReminderMessage-cc6ff37c3dd4/README.en.md) |
| `createMessageKey` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/createMessageKey-60684b49b9d5/README.en.md) |
| `currentMessageForLoopDetection` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/currentMessageForLoopDetection-9b0bd549758a/README.en.md) |
| `describePatternRun` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/describePatternRun-cbc7d644f2e0/README.en.md) |
| `describePatternRun/waits` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/describePatternRun-waits-b04c96425854/README.en.md) |
| `detectPatternInMessages` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/detectPatternInMessages-a36dc0bf3cce/README.en.md) |
| `extractToolResultTextForLoopDetection` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/extractToolResultTextForLoopDetection-096dfff6c64e/README.en.md) |
| `findLastUserMessageIndex` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/findLastUserMessageIndex-ec77c131ae2a/README.en.md) |
| `fingerprintAgentLoopEvidence` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/fingerprintAgentLoopEvidence-92672fcc097b/README.en.md) |
| `getAgentSingleMessageLoopInfo` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/getAgentSingleMessageLoopInfo-56525c4a5dbc/README.en.md) |
| `hasPatternAnywhereInMessages` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/hasPatternAnywhereInMessages-83f73d75225a/README.en.md) |
| `isSingleMessageLoopKind` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/isSingleMessageLoopKind-ebcf179edd8b/README.en.md) |
| `normalizeAgentSingleMessageLoopDetection` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/normalizeAgentSingleMessageLoopDetection-9aea16d86d75/README.en.md) |
| `reportLoopMitigationObservation` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/reportLoopMitigationObservation-b25818d67cac/README.en.md) |
| `reportLoopObservation` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/reportLoopObservation-50bd6f2be702/README.en.md) |
| `resolveAgentSingleMessageLoopDetection` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/resolveAgentSingleMessageLoopDetection-4fb41227f75e/README.en.md) |
| `runOccurrenceStarts` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/runOccurrenceStarts-36d3642af46b/README.en.md) |
| `singleMessageLoopWireInfo` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/singleMessageLoopWireInfo-f91ad80f7752/README.en.md) |
| `smallestRotation` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/smallestRotation-14475a6dad24/README.en.md) |
| `stripThinkingTags` | 2 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/stripThinkingTags-78aab22d6176/README.en.md) |
| `toolArgsJson` | 1 | [Static behavior](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/toolArgsJson-98a2946b4753/README.en.md) |

## Scope

Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.
