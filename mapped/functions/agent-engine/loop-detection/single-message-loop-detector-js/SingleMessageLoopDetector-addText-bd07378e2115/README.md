# `SingleMessageLoopDetector.addText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624269-624352](../../../../../../reference/runtime/host-main.cjs#L624269-L624352) | `method` | não | `{ newText, caller }` |
| [evaluation:310391-310474](../../../../../../reference/runtime/sand-eval-runner.cjs#L310391-L310474) | `method` | não | `{ newText, caller }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624269-624352](../../../../../../reference/runtime/host-main.cjs#L624269-L624352) | 15 | 2 | 0 | 6 | 0 | 0 |
| [evaluation:310391-310474](../../../../../../reference/runtime/sand-eval-runner.cjs#L310391-L310474) | 15 | 2 | 0 | 6 | 0 | 0 |

### host:624269

Chamadas escritas diretamente neste corpo: `/\s/.test`, `Math.floor`, `Math.max`, `Math.min`, `performance.now`, `this.addLineToQueue`, `this.appendToCurrentLine`, `this.checkForMultiLineLoop`, `this.clearCurrentLine`, `this.config.singleLineLoopMinPTimesKInCodeFence`, `this.config.singleLineLoopMinRepetitionsInCodeFence`, `this.currentLine.slice`, `this.currentLine.trim`, `this.hooks.onSingleLineCheck`, `this.isCurrentLineBinaryLike`, `this.isCurrentLineBoxBorder`, `this.loopDetected`, `this.markTimedOutIfNeeded`, `this.periodMatchRunLengths.fill`, `this.updateCodeFenceStateOnLineEnd`.

Alvos de atribuição ou incremento: `minPTimesK`, `p2`, `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.periodMatchRunLengths[computed]`.

SHA-256 do trecho: `4d1b3f535cc17a13abbf16d9fd06d080e0a87e20dd9f9b778ae9a607e2423607`.

### evaluation:310391

Chamadas escritas diretamente neste corpo: `/\s/.test`, `Math.floor`, `Math.max`, `Math.min`, `performance.now`, `this.addLineToQueue`, `this.appendToCurrentLine`, `this.checkForMultiLineLoop`, `this.clearCurrentLine`, `this.config.singleLineLoopMinPTimesKInCodeFence`, `this.config.singleLineLoopMinRepetitionsInCodeFence`, `this.currentLine.slice`, `this.currentLine.trim`, `this.hooks.onSingleLineCheck`, `this.isCurrentLineBinaryLike`, `this.isCurrentLineBoxBorder`, `this.loopDetected`, `this.markTimedOutIfNeeded`, `this.periodMatchRunLengths.fill`, `this.updateCodeFenceStateOnLineEnd`.

Alvos de atribuição ou incremento: `minPTimesK`, `p2`, `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.periodMatchRunLengths[computed]`.

SHA-256 do trecho: `4d1b3f535cc17a13abbf16d9fd06d080e0a87e20dd9f9b778ae9a607e2423607`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
