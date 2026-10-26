# `neutralizeCompactionControlTokens`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617240-617242](../../../../../reference/runtime/host-main.cjs#L617240-L617242) | `FunctionDeclaration` | não | `text3` |
| [evaluation:285780-285782](../../../../../reference/runtime/sand-eval-runner.cjs#L285780-L285782) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617240-617242](../../../../../reference/runtime/host-main.cjs#L617240-L617242) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285780-285782](../../../../../reference/runtime/sand-eval-runner.cjs#L285780-L285782) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617240

Chamadas escritas diretamente neste corpo: `.replaceAll`, `text3.replaceAll`.

SHA-256 do trecho: `09cf1e6fc9525ce1a050985592fd025ea2e15384d903daa815e15fb1e0eaa6b6`.

### evaluation:285780

Chamadas escritas diretamente neste corpo: `.replaceAll`, `text3.replaceAll`.

SHA-256 do trecho: `09cf1e6fc9525ce1a050985592fd025ea2e15384d903daa815e15fb1e0eaa6b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
