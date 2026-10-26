# `RenderContext.renderUnorderedList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629395-629428](../../../../../reference/runtime/host-main.cjs#L629395-L629428) | `method` | não | `children, indent = 0, baseIndentWidth = 0` |
| [evaluation:318412-318445](../../../../../reference/runtime/sand-eval-runner.cjs#L318412-L318445) | `method` | não | `children, indent = 0, baseIndentWidth = 0` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629395-629428](../../../../../reference/runtime/host-main.cjs#L629395-L629428) | 8 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:318412-318445](../../../../../reference/runtime/sand-eval-runner.cjs#L318412-L318445) | 8 | 1 | 0 | 2 | 0 | 0 |

### host:629395

Chamadas escritas diretamente neste corpo: ` .repeat`, `Array.isArray`, `items.join`, `items.push`, `rendered.trim`, `textContent.trim`, `this.extractListItemContent`, `this.flattenListChildren`, `this.renderContentNode`.

SHA-256 do trecho: `701d4d41b55ed825b85d2d702dd222ff3d561a4f2336c20f5ccecf24cc099ed9`.

### evaluation:318412

Chamadas escritas diretamente neste corpo: ` .repeat`, `Array.isArray`, `items.join`, `items.push`, `rendered.trim`, `textContent2.trim`, `this.extractListItemContent`, `this.flattenListChildren`, `this.renderContentNode`.

SHA-256 do trecho: `0b57088e1a177b07670547e9b2581a12e81b16473852c276853af89c70f1a17a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
