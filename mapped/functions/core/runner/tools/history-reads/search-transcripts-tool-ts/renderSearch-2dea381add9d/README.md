# `renderSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766510-766527](../../../../../../../../reference/runtime/host-main.cjs#L766510-L766527) | `FunctionDeclaration` | não | `query2, result, target` |
| [evaluation:559874-559891](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559874-L559891) | `FunctionDeclaration` | não | `query2, result, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766510-766527](../../../../../../../../reference/runtime/host-main.cjs#L766510-L766527) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559874-559891](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559874-L559891) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:766510

Chamadas escritas diretamente neste corpo: `.join`, `coverageNotice`, `howMatched`, `result.hits.map`, `targetArgument`.

SHA-256 do trecho: `f360177e50a5db6625a04043a9d92be8271faeaf232a5a6bec7d421b7a0dca83`.

### evaluation:559874

Chamadas escritas diretamente neste corpo: `.join`, `coverageNotice`, `howMatched`, `result.hits.map`, `targetArgument`.

SHA-256 do trecho: `f360177e50a5db6625a04043a9d92be8271faeaf232a5a6bec7d421b7a0dca83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
