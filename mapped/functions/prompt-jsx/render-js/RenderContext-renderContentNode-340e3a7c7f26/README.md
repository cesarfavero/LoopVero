# `RenderContext.renderContentNode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629110-629168](../../../../../reference/runtime/host-main.cjs#L629110-L629168) | `method` | não | `node2` |
| [evaluation:318127-318185](../../../../../reference/runtime/sand-eval-runner.cjs#L318127-L318185) | `method` | não | `node2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629110-629168](../../../../../reference/runtime/host-main.cjs#L629110-L629168) | 15 | 1 | 0 | 15 | 0 | 0 |
| [evaluation:318127-318185](../../../../../reference/runtime/sand-eval-runner.cjs#L318127-L318185) | 15 | 1 | 0 | 15 | 0 | 0 |

### host:629110

Chamadas escritas diretamente neste corpo: `.join`, `Array.isArray`, `String`, `element.type`, `flattened.push`, `messages2.map`, `this.formatHeading`, `this.renderContent`, `this.renderOrderedList`, `this.renderParagraphAwareContent`, `this.renderPreContent`, `this.renderSection`, `this.renderToMessages`, `this.renderUnorderedList`, `this.renderXElement`.

SHA-256 do trecho: `f0d1b86ab82ab24aedb2ae6eb43eacbf02d6c787d994d912e7bbdec5d1a038a2`.

### evaluation:318127

Chamadas escritas diretamente neste corpo: `.join`, `Array.isArray`, `String`, `element.type`, `flattened.push`, `messages.map`, `this.formatHeading`, `this.renderContent`, `this.renderOrderedList`, `this.renderParagraphAwareContent`, `this.renderPreContent`, `this.renderSection`, `this.renderToMessages`, `this.renderUnorderedList`, `this.renderXElement`.

SHA-256 do trecho: `83fd2ef9ab650ef246250346a119918ee4880614483f0a5de54ffb0bea5390d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
