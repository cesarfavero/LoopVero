# `RenderContext.renderOrderedList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629340-629391](../../../../../reference/runtime/host-main.cjs#L629340-L629391) | `method` | não | `children, indent = 0, baseIndentWidth = 0` |
| [evaluation:318357-318408](../../../../../reference/runtime/sand-eval-runner.cjs#L318357-L318408) | `method` | não | `children, indent = 0, baseIndentWidth = 0` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629340-629391](../../../../../reference/runtime/host-main.cjs#L629340-L629391) | 10 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:318357-318408](../../../../../reference/runtime/sand-eval-runner.cjs#L318357-L318408) | 10 | 1 | 0 | 2 | 0 | 0 |

### host:629340

Chamadas escritas diretamente neste corpo: ` .repeat`, `.join`, `.map`, `Array.isArray`, `combinedNested.indexOf`, `combinedNested.substring`, `combinedNested.trimStart`, `firstLine.trimStart`, `items.join`, `items.push`, `nestedLists.join`, `rendered.trim`, `rest.split`, `textContent.trim`, `this.extractListItemContent`, `this.flattenListChildren`, `this.renderContentNode`.

Alvos de atribuição ou incremento: `itemNumber`.

SHA-256 do trecho: `b713aba183e41590e361d801b0103d88e7bb287a1db033a00c04eed24aaaad6d`.

### evaluation:318357

Chamadas escritas diretamente neste corpo: ` .repeat`, `.join`, `.map`, `Array.isArray`, `combinedNested.indexOf`, `combinedNested.substring`, `combinedNested.trimStart`, `firstLine.trimStart`, `items.join`, `items.push`, `nestedLists.join`, `rendered.trim`, `rest.split`, `textContent2.trim`, `this.extractListItemContent`, `this.flattenListChildren`, `this.renderContentNode`.

Alvos de atribuição ou incremento: `itemNumber`.

SHA-256 do trecho: `0886cb6ef045156ac3d671bfa54f8e762ef387bd8fac6c278a5f9a9719a1824a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
