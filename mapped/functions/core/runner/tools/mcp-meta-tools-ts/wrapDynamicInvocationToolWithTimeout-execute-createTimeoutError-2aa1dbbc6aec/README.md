# `wrapDynamicInvocationToolWithTimeout/execute/createTimeoutError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554245-554248](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554245-L554248) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554245-554248](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554245-L554248) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:554245 usa retorno implícito de arrow function.

### evaluation:554245

Chamadas escritas diretamente neste corpo: `createMcpPauseCancelledError`, `createToolCallExecutionTimeoutError`.

SHA-256 do trecho: `2753a02c095c6692c93b015c32c710e42c312e2913e5c03f05c2b3fc22c88252`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
