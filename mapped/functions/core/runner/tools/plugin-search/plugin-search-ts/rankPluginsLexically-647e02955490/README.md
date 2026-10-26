# `rankPluginsLexically`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/plugin-search/plugin-search.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779525-779530](../../../../../../../../reference/runtime/host-main.cjs#L779525-L779530) | `FunctionDeclaration` | não | `plugins, query2, options2 = {}` |
| [evaluation:579763-579768](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579763-L579768) | `FunctionDeclaration` | não | `plugins, query2, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779525-779530](../../../../../../../../reference/runtime/host-main.cjs#L779525-L779530) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579763-579768](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579763-L579768) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:779525

Chamadas escritas diretamente neste corpo: `.filter`, `.sort`, `queryTerms2`, `rankByTerms`, `rankWithRecall`.

SHA-256 do trecho: `d9bab56f8e9dc26e5307faded60b5805ec60fef04ea2e8cd698c243316a10438`.

### evaluation:579763

Chamadas escritas diretamente neste corpo: `.filter`, `.sort`, `queryTerms2`, `rankByTerms`, `rankWithRecall`.

SHA-256 do trecho: `82ded7bfb9a69200fc76a5f3afb933f0fe7f4c2060bbded9dd98bdb13d069b08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
