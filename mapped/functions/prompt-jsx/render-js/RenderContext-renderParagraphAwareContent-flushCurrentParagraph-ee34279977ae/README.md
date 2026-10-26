# `RenderContext.renderParagraphAwareContent/flushCurrentParagraph`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629176-629192](../../../../../reference/runtime/host-main.cjs#L629176-L629192) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:318193-318209](../../../../../reference/runtime/sand-eval-runner.cjs#L318193-L318209) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629176-629192](../../../../../reference/runtime/host-main.cjs#L629176-L629192) | 3 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:318193-318209](../../../../../reference/runtime/sand-eval-runner.cjs#L318193-L318209) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:629176

Chamadas escritas diretamente neste corpo: `content.includes`, `content.trim`, `currentParagraph.join`, `paragraphs.push`, `this.normalizeWhitespace`.

Alvos de atribuição ou incremento: `currentParagraph`.

SHA-256 do trecho: `f75ee1c6cdcee9c4ee76f1a1b430ec6f11ea799420d7dc0c3cf617e054714a97`.

### evaluation:318193

Chamadas escritas diretamente neste corpo: `content.includes`, `content.trim`, `currentParagraph.join`, `paragraphs.push`, `this.normalizeWhitespace`.

Alvos de atribuição ou incremento: `currentParagraph`.

SHA-256 do trecho: `f75ee1c6cdcee9c4ee76f1a1b430ec6f11ea799420d7dc0c3cf617e054714a97`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
