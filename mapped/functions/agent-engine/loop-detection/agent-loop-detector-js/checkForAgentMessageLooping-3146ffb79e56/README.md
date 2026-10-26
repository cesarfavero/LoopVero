# `checkForAgentMessageLooping`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:311237-311396](../../../../../../reference/runtime/sand-eval-runner.cjs#L311237-L311396) | `FunctionDeclaration` | não | `params, reporting` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311237-311396](../../../../../../reference/runtime/sand-eval-runner.cjs#L311237-L311396) | 23 | 2 | 0 | 8 | 0 | 0 |

### evaluation:311237

Chamadas escritas diretamente neste corpo: `Math.max`, `assistantMessageKeys.push`, `assistantMessageKeys.slice`, `assistantMessagesForKeys.push`, `convertCoreMessagesToLoopFormat`, `createMessageKey`, `createRetrySkipper`, `currentMessageForLoopDetection`, `detectPatternInMessages`, `eventTracker.trackLoopDetected`, `findLastUserMessageIndex`, `fingerprintAgentLoopEvidence`, `getAgentEventTracker`, `hasPatternAnywhereInMessages`, `logger16.warn`, `loopDetectionCounter.increment`, `loopDetectionLatency.histogram`, `params.ctx.get`, `patternKeys[computed].slice`, `performance.now`, `previousAssistantKeys.push`, `reportLoopObservation`, `runOf`, `shouldIncludeMessage`, `skipsPreviousRetry`, `skipsRetry`, `smallestRotation`.

Alvos de atribuição ou incremento: `currentPattern`, `i`, `isLoopReoccurrence`, `noProgress`, `requiredRepetitions`.

SHA-256 do trecho: `4b8c0634749eabcb3b62e2b34d483a5170953172f3dc79a74a8ebb5f26c02878`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
