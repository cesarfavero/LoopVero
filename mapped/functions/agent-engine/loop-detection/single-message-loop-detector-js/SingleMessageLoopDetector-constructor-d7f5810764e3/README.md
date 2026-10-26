# `SingleMessageLoopDetector.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624155-624182](../../../../../../reference/runtime/host-main.cjs#L624155-L624182) | `method` | não | `config2, hooks` |
| [evaluation:310277-310304](../../../../../../reference/runtime/sand-eval-runner.cjs#L310277-L310304) | `method` | não | `config2, hooks` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624155-624182](../../../../../../reference/runtime/host-main.cjs#L624155-L624182) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310277-310304](../../../../../../reference/runtime/sand-eval-runner.cjs#L310277-L310304) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:624155

Chamadas escritas diretamente neste corpo: `.fill`, `new Array`, `this.config.maxCheckTimeMs`, `this.config.maxLineLength`, `this.config.multiLineLoopMinRepetitions`, `this.config.singleLineLoopMaxP`, `this.config.singleLineLoopMinPTimesK`, `this.config.singleLineLoopMinRepetitions`.

Alvos de atribuição ou incremento: `this.MAX_CHECK_TIME_MS`, `this.MAX_LINE_LENGTH`, `this.MAX_LINE_QUEUE_SIZE`, `this.MULTI_LINE_LOOP_MIN_REPETITIONS`, `this.SINGLE_LINE_LOOP_MAX_P_LIMIT`, `this.SINGLE_LINE_LOOP_MIN_P_TIMES_K`, `this.SINGLE_LINE_LOOP_MIN_REPETITIONS`, `this.config`, `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`, `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.didTimeout`, `this.hooks`, `this.insideCodeFence`, `this.lineBuffer`, `this.lineCount`, `this.multiLinePeriodMatchRunLengths`, `this.periodMatchRunLengths`, `this.startIdx`.

SHA-256 do trecho: `ec69da385ac5d2125551663c6d7760f8c6f6abdfef93f45aef6dc5232ee24c52`.

### evaluation:310277

Chamadas escritas diretamente neste corpo: `.fill`, `new Array`, `this.config.maxCheckTimeMs`, `this.config.maxLineLength`, `this.config.multiLineLoopMinRepetitions`, `this.config.singleLineLoopMaxP`, `this.config.singleLineLoopMinPTimesK`, `this.config.singleLineLoopMinRepetitions`.

Alvos de atribuição ou incremento: `this.MAX_CHECK_TIME_MS`, `this.MAX_LINE_LENGTH`, `this.MAX_LINE_QUEUE_SIZE`, `this.MULTI_LINE_LOOP_MIN_REPETITIONS`, `this.SINGLE_LINE_LOOP_MAX_P_LIMIT`, `this.SINGLE_LINE_LOOP_MIN_P_TIMES_K`, `this.SINGLE_LINE_LOOP_MIN_REPETITIONS`, `this.config`, `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`, `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.didTimeout`, `this.hooks`, `this.insideCodeFence`, `this.lineBuffer`, `this.lineCount`, `this.multiLinePeriodMatchRunLengths`, `this.periodMatchRunLengths`, `this.startIdx`.

SHA-256 do trecho: `ec69da385ac5d2125551663c6d7760f8c6f6abdfef93f45aef6dc5232ee24c52`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
