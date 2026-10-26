# `SingleMessageLoopDetector.appendToCurrentLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624194-624213](../../../../../../reference/runtime/host-main.cjs#L624194-L624213) | `method` | não | `char` |
| [evaluation:310316-310335](../../../../../../reference/runtime/sand-eval-runner.cjs#L310316-L310335) | `method` | não | `char` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624194-624213](../../../../../../reference/runtime/host-main.cjs#L624194-L624213) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:310316-310335](../../../../../../reference/runtime/sand-eval-runner.cjs#L310316-L310335) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:624194

Chamadas escritas diretamente neste corpo: `BOX_DRAWING_CHARS.has`.

Alvos de atribuição ou incremento: `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`.

SHA-256 do trecho: `21e9f0f4d6a53cc7547f494935ba8fe1a3f3e1d30c03602e6a39d5a2fc033508`.

### evaluation:310316

Chamadas escritas diretamente neste corpo: `BOX_DRAWING_CHARS.has`.

Alvos de atribuição ou incremento: `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`.

SHA-256 do trecho: `21e9f0f4d6a53cc7547f494935ba8fe1a3f3e1d30c03602e6a39d5a2fc033508`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
