# `serverConfigsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/connector-scope/connector-scope.ts` · [README do módulo](../../../../../../modules/core/runner/connector-scope/connector-scope-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525823-525832](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525823-L525832) | `FunctionDeclaration` | não | `mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525823-525832](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525823-L525832) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:525823

Chamadas escritas diretamente neste corpo: `Object.entries`, `canonicalJson`, `isUnknownRecord2`, `mcpConfigSchema.safeParse`, `new Map`, `parseJsonOrUndefined2`, `servers.set`.

SHA-256 do trecho: `a846cf075c10efa0b6a148bc6ce6a01895dcc441e41fc39b9ff4b3e333c57461`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
