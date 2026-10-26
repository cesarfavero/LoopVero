# `searchOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-search-coverage.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584607-584617](../../../../../../reference/runtime/sand-eval-runner.cjs#L584607-L584617) | `FunctionDeclaration` | não | `tool, success2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584607-584617](../../../../../../reference/runtime/sand-eval-runner.cjs#L584607-L584617) | 4 | 1 | 0 | 3 | 0 | 0 |

### evaluation:584607

Chamadas escritas diretamente neste corpo: `parseJsonOrUndefined2`, `tool.page.safeParse`.

SHA-256 do trecho: `be1e1b8ea8589effafbc063b062050b5522b7fc0162170ba5d77496ec304f544`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
