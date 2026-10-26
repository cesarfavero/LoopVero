# `mcpAuthApproved`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-queries.js` · [README do módulo](../../../../modules/agent-core/interaction-queries-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475714-475727](../../../../../reference/runtime/host-main.cjs#L475714-L475727) | `FunctionExpression` | não | `queryId` |
| [evaluation:254938-254951](../../../../../reference/runtime/sand-eval-runner.cjs#L254938-L254951) | `FunctionExpression` | não | `queryId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475714-475727](../../../../../reference/runtime/host-main.cjs#L475714-L475727) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254938-254951](../../../../../reference/runtime/sand-eval-runner.cjs#L254938-L254951) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475714

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new McpAuthRequestResponse`, `new McpAuthRequestResponse_Approved`.

SHA-256 do trecho: `396744dc61960e250ce67e34ffb73d415c77569a4acc35f4b194e017ed9cac93`.

### evaluation:254938

Chamadas escritas diretamente neste corpo: `new InteractionResponse`, `new McpAuthRequestResponse`, `new McpAuthRequestResponse_Approved`.

SHA-256 do trecho: `396744dc61960e250ce67e34ffb73d415c77569a4acc35f4b194e017ed9cac93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
