# `renderSearchAcross`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/history-reads/search-transcripts-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/history-reads/search-transcripts-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766528-766549](../../../../../../../../reference/runtime/host-main.cjs#L766528-L766549) | `FunctionDeclaration` | não | `query2, result` |
| [evaluation:559892-559913](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559892-L559913) | `FunctionDeclaration` | não | `query2, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766528-766549](../../../../../../../../reference/runtime/host-main.cjs#L766528-L766549) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559892-559913](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L559892-L559913) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:766528

Chamadas escritas diretamente neste corpo: `.join`, `coverageNotice`, `howMatched`, `result.hits.map`.

SHA-256 do trecho: `d5af8151473c90cf3451d03816f74eeea78a507ac1fbecb301f020e0adf4290f`.

### evaluation:559892

Chamadas escritas diretamente neste corpo: `.join`, `coverageNotice`, `howMatched`, `result.hits.map`.

SHA-256 do trecho: `d5af8151473c90cf3451d03816f74eeea78a507ac1fbecb301f020e0adf4290f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
