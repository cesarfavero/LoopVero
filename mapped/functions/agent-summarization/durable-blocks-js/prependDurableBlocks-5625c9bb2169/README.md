# `prependDurableBlocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620077-620079](../../../../../reference/runtime/host-main.cjs#L620077-L620079) | `FunctionDeclaration` | não | `summarizer, blocks` |
| [evaluation:304431-304433](../../../../../reference/runtime/sand-eval-runner.cjs#L304431-L304433) | `FunctionDeclaration` | não | `summarizer, blocks` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620077-620079](../../../../../reference/runtime/host-main.cjs#L620077-L620079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304431-304433](../../../../../reference/runtime/sand-eval-runner.cjs#L304431-L304433) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620077

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `selectBlockPrompts`.

SHA-256 do trecho: `e0207e010ed9bc0baafba962ed95c7446abb62e77e4894df0d1005fad127f19e`.

### evaluation:304431

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `selectBlockPrompts`.

SHA-256 do trecho: `e0207e010ed9bc0baafba962ed95c7446abb62e77e4894df0d1005fad127f19e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
