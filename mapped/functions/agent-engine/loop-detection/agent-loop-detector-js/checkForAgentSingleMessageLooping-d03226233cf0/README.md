# `checkForAgentSingleMessageLooping`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624670-624760](../../../../../../reference/runtime/host-main.cjs#L624670-L624760) | `FunctionDeclaration` | não | `params` |
| [evaluation:311037-311127](../../../../../../reference/runtime/sand-eval-runner.cjs#L311037-L311127) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624670-624760](../../../../../../reference/runtime/host-main.cjs#L624670-L624760) | 9 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:311037-311127](../../../../../../reference/runtime/sand-eval-runner.cjs#L311037-L311127) | 9 | 0 | 0 | 7 | 0 | 0 |

### host:624670

Chamadas escritas diretamente neste corpo: `eventTracker.trackLoopDetected`, `fingerprintAgentLoopEvidence`, `getAgentEventTracker`, `getAgentSingleMessageLoopInfo`, `logger41.info`, `logger41.warn`, `loopDetectionCounter.increment`, `loopInfo.pattern.slice`, `params.ctx.get`, `params.detector.addText`, `params.detector.loopDetected`, `params.detector.timedOut`, `performance.now`, `reportLoopObservation`, `singleMessageLoopCheckLatency.histogram`.

SHA-256 do trecho: `74be576ef4d05b20fde80c243eabdc7965dee3364f165b56649854cdffb55b0e`.

### evaluation:311037

Chamadas escritas diretamente neste corpo: `eventTracker.trackLoopDetected`, `fingerprintAgentLoopEvidence`, `getAgentEventTracker`, `getAgentSingleMessageLoopInfo`, `logger16.info`, `logger16.warn`, `loopDetectionCounter.increment`, `loopInfo.pattern.slice`, `params.ctx.get`, `params.detector.addText`, `params.detector.loopDetected`, `params.detector.timedOut`, `performance.now`, `reportLoopObservation`, `singleMessageLoopCheckLatency.histogram`.

SHA-256 do trecho: `d9267becc91dde57e91b1943aa339b10ef045bf7a5157e3654ef27d04dce47fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
