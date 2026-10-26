# `isLookup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-search-coverage.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584603-584606](../../../../../../reference/runtime/sand-eval-runner.cjs#L584603-L584606) | `FunctionDeclaration` | não | `query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584603-584606](../../../../../../reference/runtime/sand-eval-runner.cjs#L584603-L584606) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584603

Chamadas escritas diretamente neste corpo: `.replace`, `FREE_TEXT.test`, `LOOKUP_OPERATOR.test`, `query2.replace`.

SHA-256 do trecho: `cf6fae744a067eb4fb2c91ac8d2e4ddb038a0cf4c538e6550a60b04754ecb865`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
