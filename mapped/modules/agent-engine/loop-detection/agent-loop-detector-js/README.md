# `agent-engine/loop-detection/agent-loop-detector.js`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../guide/architecture/README.md) · [Índice geral](../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:622224-622229](../../../../../reference/runtime/host-main.cjs#L622224-L622229) |
| host | [host:624502-624776](../../../../../reference/runtime/host-main.cjs#L624502-L624776) |
| evaluation | [evaluation:306578-306581](../../../../../reference/runtime/sand-eval-runner.cjs#L306578-L306581) |
| evaluation | [evaluation:310624-311497](../../../../../reference/runtime/sand-eval-runner.cjs#L310624-L311497) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `AgentLoopError.constructor` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/AgentLoopError-constructor-8dbbbdeca937/README.md) |
| `SingleMessageLoopDetector2.constructor` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-4ce9e75e9b1d/README.md) |
| `SingleMessageLoopDetector2.constructor/maxCheckTimeMs` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-maxCheckTimeMs-c5fdae9ff8f2/README.md) |
| `SingleMessageLoopDetector2.constructor/maxLineLength` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-maxLineLength-2a93284dcd64/README.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinPTimesK` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinPTimesK-b8ebd6cfd2eb/README.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinPTimesKInCodeFence` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinPTimesKInCodeFence-5bac364fe041/README.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinRepetitions` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinRepetitions-4bea79eb5fe1/README.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinRepetitionsInCodeFence` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinRepetitionsInCodeFence-1160e3ea554b/README.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinTotalChars` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinTotalChars-0467bf97d31b/README.md) |
| `SingleMessageLoopDetector2.constructor/multiLineLoopMinTotalCharsInCodeFence` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-multiLineLoopMinTotalCharsInCodeFence-65497723452e/README.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMaxP` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMaxP-398aae49a89f/README.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMinPTimesK` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMinPTimesK-36622e2e7de2/README.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMinPTimesKInCodeFence` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMinPTimesKInCodeFence-8ffaa7053d0f/README.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMinRepetitions` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMinRepetitions-cfd88d4bbe6e/README.md) |
| `SingleMessageLoopDetector2.constructor/singleLineLoopMinRepetitionsInCodeFence` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/SingleMessageLoopDetector2-constructor-singleLineLoopMinRepetitionsInCodeFence-dd6f608c9b8e/README.md) |
| `checkAndHandleLoopOnToolResultAppend` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkAndHandleLoopOnToolResultAppend-163b6b16a3ee/README.md) |
| `checkAndHandleLoopOnToolResultAppend/applyNudge` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkAndHandleLoopOnToolResultAppend-applyNudge-4626b5a4c88c/README.md) |
| `checkForAgentMessageLooping` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-3146ffb79e56/README.md) |
| `checkForAgentMessageLooping/createRetrySkipper` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-createRetrySkipper-46fd9b9036bc/README.md) |
| `checkForAgentMessageLooping/isInvitedRetry` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-isInvitedRetry-20f82ccd8de0/README.md) |
| `checkForAgentMessageLooping/runOf` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-runOf-c5be47c58f31/README.md) |
| `checkForAgentMessageLooping/shouldIncludeMessage` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentMessageLooping-shouldIncludeMessage-8c9371b3106a/README.md) |
| `checkForAgentOutboundMessageFlood` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentOutboundMessageFlood-507d89eb543c/README.md) |
| `checkForAgentSingleMessageLooping` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/checkForAgentSingleMessageLooping-d03226233cf0/README.md) |
| `collectRunOccurrenceResults` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/collectRunOccurrenceResults-1cc392ebdffb/README.md) |
| `convertCoreMessagesToLoopFormat` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/convertCoreMessagesToLoopFormat-d4d9e380c13f/README.md) |
| `createLoopReminderMessage` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/createLoopReminderMessage-cc6ff37c3dd4/README.md) |
| `createMessageKey` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/createMessageKey-60684b49b9d5/README.md) |
| `currentMessageForLoopDetection` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/currentMessageForLoopDetection-9b0bd549758a/README.md) |
| `describePatternRun` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/describePatternRun-cbc7d644f2e0/README.md) |
| `describePatternRun/waits` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/describePatternRun-waits-b04c96425854/README.md) |
| `detectPatternInMessages` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/detectPatternInMessages-a36dc0bf3cce/README.md) |
| `extractToolResultTextForLoopDetection` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/extractToolResultTextForLoopDetection-096dfff6c64e/README.md) |
| `findLastUserMessageIndex` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/findLastUserMessageIndex-ec77c131ae2a/README.md) |
| `fingerprintAgentLoopEvidence` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/fingerprintAgentLoopEvidence-92672fcc097b/README.md) |
| `getAgentSingleMessageLoopInfo` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/getAgentSingleMessageLoopInfo-56525c4a5dbc/README.md) |
| `hasPatternAnywhereInMessages` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/hasPatternAnywhereInMessages-83f73d75225a/README.md) |
| `isSingleMessageLoopKind` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/isSingleMessageLoopKind-ebcf179edd8b/README.md) |
| `normalizeAgentSingleMessageLoopDetection` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/normalizeAgentSingleMessageLoopDetection-9aea16d86d75/README.md) |
| `reportLoopMitigationObservation` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/reportLoopMitigationObservation-b25818d67cac/README.md) |
| `reportLoopObservation` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/reportLoopObservation-50bd6f2be702/README.md) |
| `resolveAgentSingleMessageLoopDetection` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/resolveAgentSingleMessageLoopDetection-4fb41227f75e/README.md) |
| `runOccurrenceStarts` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/runOccurrenceStarts-36d3642af46b/README.md) |
| `singleMessageLoopWireInfo` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/singleMessageLoopWireInfo-f91ad80f7752/README.md) |
| `smallestRotation` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/smallestRotation-14475a6dad24/README.md) |
| `stripThinkingTags` | 2 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/stripThinkingTags-78aab22d6176/README.md) |
| `toolArgsJson` | 1 | [Funcionamento estático](../../../../functions/agent-engine/loop-detection/agent-loop-detector-js/toolArgsJson-98a2946b4753/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
