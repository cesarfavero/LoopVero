# `SingleMessageLoopDetector.reset`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624489-624499](../../../../../../reference/runtime/host-main.cjs#L624489-L624499) | `method` | não | `(nenhum)` |
| [evaluation:310611-310621](../../../../../../reference/runtime/sand-eval-runner.cjs#L310611-L310621) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624489-624499](../../../../../../reference/runtime/host-main.cjs#L624489-L624499) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310611-310621](../../../../../../reference/runtime/sand-eval-runner.cjs#L310611-L310621) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:624489

Chamadas escritas diretamente neste corpo: `this.clearCurrentLine`, `this.multiLinePeriodMatchRunLengths.fill`, `this.periodMatchRunLengths.fill`.

Alvos de atribuição ou incremento: `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.didTimeout`, `this.insideCodeFence`, `this.lineCount`, `this.startIdx`.

SHA-256 do trecho: `a7e172d92eb50ff907750216799612988899da7b38d72ab57a7a065b0370165e`.

### evaluation:310611

Chamadas escritas diretamente neste corpo: `this.clearCurrentLine`, `this.multiLinePeriodMatchRunLengths.fill`, `this.periodMatchRunLengths.fill`.

Alvos de atribuição ou incremento: `this.detectedMultiLinePattern`, `this.detectedSingleLineLoop`, `this.didTimeout`, `this.insideCodeFence`, `this.lineCount`, `this.startIdx`.

SHA-256 do trecho: `a7e172d92eb50ff907750216799612988899da7b38d72ab57a7a065b0370165e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
