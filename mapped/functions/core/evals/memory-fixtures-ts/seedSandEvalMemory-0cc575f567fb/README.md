# `seedSandEvalMemory`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/evals/memory-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/memory-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628208-628218](../../../../../../reference/runtime/sand-eval-runner.cjs#L628208-L628218) | `FunctionDeclaration` | sim | `store, config2, now` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628208-628218](../../../../../../reference/runtime/sand-eval-runner.cjs#L628208-L628218) | 2 | 1 | 1 | 0 | 0 | 0 |

### evaluation:628208

Chamadas escritas diretamente neste corpo: `Date.parse`, `store.addMemory`, `store.flush`.

SHA-256 do trecho: `141a3f03ef4ddb2051feef0ef1f11cabdbc80ff8f5541f271be50068aab56778`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
