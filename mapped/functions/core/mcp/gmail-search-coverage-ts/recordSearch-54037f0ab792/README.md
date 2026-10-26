# `recordSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-search-coverage.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584633-584642](../../../../../../reference/runtime/sand-eval-runner.cjs#L584633-L584642) | `FunctionDeclaration` | não | `ctx, args, outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584633-584642](../../../../../../reference/runtime/sand-eval-runner.cjs#L584633-L584642) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:584633

Chamadas escritas diretamente neste corpo: `NARROWING_FILTER.test`, `String`, `pageSizeBucket`, `searches.increment`, `searchesAnywhere`, `stringArg3`.

SHA-256 do trecho: `d67130123838d5f9cdde8ed8ed9e1937883a3c41b4bb18bb40582893520418cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
