# `SingleMessageLoopDetector.checkForMultiLineLoop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624377-624438](../../../../../../reference/runtime/host-main.cjs#L624377-L624438) | `method` | não | `{ caller, deadlineMs }` |
| [evaluation:310499-310560](../../../../../../reference/runtime/sand-eval-runner.cjs#L310499-L310560) | `method` | não | `{ caller, deadlineMs }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624377-624438](../../../../../../reference/runtime/host-main.cjs#L624377-L624438) | 10 | 2 | 0 | 3 | 0 | 0 |
| [evaluation:310499-310560](../../../../../../reference/runtime/sand-eval-runner.cjs#L310499-L310560) | 10 | 2 | 0 | 3 | 0 | 0 |

### host:624377

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.min`, `pattern.push`, `pattern.reduce`, `performance.now`, `this.config.multiLineLoopMinPTimesK`, `this.config.multiLineLoopMinPTimesKInCodeFence`, `this.config.multiLineLoopMinRepetitionsInCodeFence`, `this.config.multiLineLoopMinTotalChars`, `this.config.multiLineLoopMinTotalCharsInCodeFence`, `this.getLineAt`, `this.hooks.onMultiLineCheck`, `this.isBinaryLikeMultiLineRoot`, `this.markTimedOutIfNeeded`.

Alvos de atribuição ou incremento: `j2`, `minPTimesK`, `minReps`, `minTotalChars`, `p2`, `this.detectedMultiLinePattern`, `this.multiLinePeriodMatchRunLengths[computed]`.

SHA-256 do trecho: `183ed0e7147a556f633c70da7114a7d78bcfacbf07d5dc3881d75e6ea7b6c856`.

### evaluation:310499

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.min`, `pattern.push`, `pattern.reduce`, `performance.now`, `this.config.multiLineLoopMinPTimesK`, `this.config.multiLineLoopMinPTimesKInCodeFence`, `this.config.multiLineLoopMinRepetitionsInCodeFence`, `this.config.multiLineLoopMinTotalChars`, `this.config.multiLineLoopMinTotalCharsInCodeFence`, `this.getLineAt`, `this.hooks.onMultiLineCheck`, `this.isBinaryLikeMultiLineRoot`, `this.markTimedOutIfNeeded`.

Alvos de atribuição ou incremento: `j2`, `minPTimesK`, `minReps`, `minTotalChars`, `p2`, `this.detectedMultiLinePattern`, `this.multiLinePeriodMatchRunLengths[computed]`.

SHA-256 do trecho: `183ed0e7147a556f633c70da7114a7d78bcfacbf07d5dc3881d75e6ea7b6c856`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
