# `isWidened`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-search-coverage.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584598-584602](../../../../../../reference/runtime/sand-eval-runner.cjs#L584598-L584602) | `FunctionDeclaration` | não | `tool, args, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584598-584602](../../../../../../reference/runtime/sand-eval-runner.cjs#L584598-L584602) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:584598

Chamadas escritas diretamente neste corpo: `NARROWING_FILTER.test`, `hasListItems`, `searchesAnywhere`.

SHA-256 do trecho: `832884f340049999aa87c3bdea21c1bc562a7dcf05688cde4d2fa3eee4e1c7f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
