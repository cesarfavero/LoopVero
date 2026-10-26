# `checkForAgentOutboundMessageFlood`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:311148-311236](../../../../../../reference/runtime/sand-eval-runner.cjs#L311148-L311236) | `FunctionDeclaration` | não | `params, reporting` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:311148-311236](../../../../../../reference/runtime/sand-eval-runner.cjs#L311148-L311236) | 10 | 2 | 0 | 5 | 0 | 0 |

### evaluation:311148

Chamadas escritas diretamente neste corpo: `.sort`, `.trackLoopDetected`, `convertCoreMessagesToLoopFormat`, `currentMessageForLoopDetection`, `findLastUserMessageIndex`, `fingerprintAgentLoopEvidence`, `getAgentEventTracker`, `logger16.warn`, `loopDetectionCounter.increment`, `loopDetectionLatency.histogram`, `loopMessages.slice`, `msg.toolResultTexts.some`, `new Set`, `performance.now`, `reportLoopObservation`, `runToolNames.add`, `runToolNames.clear`, `toolCalls3.every`.

Alvos de atribuição ou incremento: `run`.

SHA-256 do trecho: `dfacdd6f21c8790836109d7dc0a59b5fe5c7a96a4acc0e609f4593f80b89e285`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
