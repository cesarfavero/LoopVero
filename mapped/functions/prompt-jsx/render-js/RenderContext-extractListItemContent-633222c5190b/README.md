# `RenderContext.extractListItemContent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629447-629497](../../../../../reference/runtime/host-main.cjs#L629447-L629497) | `method` | não | `children, nestedIndent, baseIndentWidth = 0` |
| [evaluation:318464-318514](../../../../../reference/runtime/sand-eval-runner.cjs#L318464-L318514) | `method` | não | `children, nestedIndent, baseIndentWidth = 0` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629447-629497](../../../../../reference/runtime/host-main.cjs#L629447-L629497) | 12 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:318464-318514](../../../../../reference/runtime/sand-eval-runner.cjs#L318464-L318514) | 12 | 1 | 0 | 2 | 0 | 0 |

### host:629447

Chamadas escritas diretamente neste corpo: `Array.isArray`, `element.type`, `nestedLists.push`, `rendered.trim`, `textParts.join`, `textParts.push`, `this.flattenListChildren`, `this.renderContent`, `this.renderContentNode`, `this.renderOrderedList`, `this.renderUnorderedList`.

Alvos de atribuição ou incremento: `element`.

SHA-256 do trecho: `a7111d45b6b36d51f2a493b8ce8d0be441151ded8c1d1e36991aea67a495dcd7`.

### evaluation:318464

Chamadas escritas diretamente neste corpo: `Array.isArray`, `element.type`, `nestedLists.push`, `rendered.trim`, `textParts.join`, `textParts.push`, `this.flattenListChildren`, `this.renderContent`, `this.renderContentNode`, `this.renderOrderedList`, `this.renderUnorderedList`.

Alvos de atribuição ou incremento: `element`.

SHA-256 do trecho: `a7111d45b6b36d51f2a493b8ce8d0be441151ded8c1d1e36991aea67a495dcd7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
