# `RenderContext.renderParagraphAwareContent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629172-629245](../../../../../reference/runtime/host-main.cjs#L629172-L629245) | `method` | não | `nodes` |
| [evaluation:318189-318262](../../../../../reference/runtime/sand-eval-runner.cjs#L318189-L318262) | `method` | não | `nodes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629172-629245](../../../../../reference/runtime/host-main.cjs#L629172-L629245) | 10 | 4 | 0 | 2 | 0 | 0 |
| [evaluation:318189-318262](../../../../../reference/runtime/sand-eval-runner.cjs#L318189-L318262) | 10 | 4 | 0 | 2 | 0 | 0 |

### host:629172

Chamadas escritas diretamente neste corpo: `Array.isArray`, `content.trim`, `curr.content.trim`, `currentParagraph.push`, `flushCurrentParagraph`, `paragraphs.push`, `prev.content.endsWith`, `prev.content.trim`, `result.charCodeAt`, `result.slice`, `this.flattenNodes`, `this.renderContentNode`.

Alvos de atribuição ou incremento: `end`, `i`, `result`, `start`.

SHA-256 do trecho: `0c13797481d2ea8968e3bd8e7700ef9bd2424ddc52240fee68d745af6571ae5e`.

### evaluation:318189

Chamadas escritas diretamente neste corpo: `Array.isArray`, `content.trim`, `curr.content.trim`, `currentParagraph.push`, `flushCurrentParagraph`, `paragraphs.push`, `prev.content.endsWith`, `prev.content.trim`, `result.charCodeAt`, `result.slice`, `this.flattenNodes`, `this.renderContentNode`.

Alvos de atribuição ou incremento: `end`, `i`, `result`, `start`.

SHA-256 do trecho: `0c13797481d2ea8968e3bd8e7700ef9bd2424ddc52240fee68d745af6571ae5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
