# `SingleMessageLoopDetector.clearCurrentLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624214-624220](../../../../../../reference/runtime/host-main.cjs#L624214-L624220) | `method` | não | `(nenhum)` |
| [evaluation:310336-310342](../../../../../../reference/runtime/sand-eval-runner.cjs#L310336-L310342) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624214-624220](../../../../../../reference/runtime/host-main.cjs#L624214-L624220) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310336-310342](../../../../../../reference/runtime/sand-eval-runner.cjs#L310336-L310342) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:624214

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`.

SHA-256 do trecho: `af434c39f17629af289f5fb142c65fe35409a24ab213d38b618bc2406dcb8c8f`.

### evaluation:310336

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.currentLine`, `this.currentLineBinaryHasBit`, `this.currentLineBinaryInvalid`, `this.currentLineBoxChars`, `this.currentLineNonWhitespace`.

SHA-256 do trecho: `af434c39f17629af289f5fb142c65fe35409a24ab213d38b618bc2406dcb8c8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
