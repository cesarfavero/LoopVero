# `mcpAuthRejected`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475728-475743](../../../../../reference/runtime/host-main.cjs#L475728-L475743) | `FunctionExpression` | não | `queryId, reason` |
| [evaluation:254952-254967](../../../../../reference/runtime/sand-eval-runner.cjs#L254952-L254967) | `FunctionExpression` | não | `queryId, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475728-475743](../../../../../reference/runtime/host-main.cjs#L475728-L475743) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254952-254967](../../../../../reference/runtime/sand-eval-runner.cjs#L254952-L254967) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475728

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new McpAuthRequestResponse`, `new McpAuthRequestResponse_Rejected`.

SHA-256 do trecho: `2e12e82e1fe6200b0f5e85ba65cc4ed4635df05ba572c3af8ddb00deae54de6e`.

### evaluation:254952

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new McpAuthRequestResponse`, `new McpAuthRequestResponse_Rejected`.

SHA-256 do trecho: `2e12e82e1fe6200b0f5e85ba65cc4ed4635df05ba572c3af8ddb00deae54de6e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
