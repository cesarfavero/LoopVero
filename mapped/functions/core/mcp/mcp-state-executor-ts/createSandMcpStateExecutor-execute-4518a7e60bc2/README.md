# `createSandMcpStateExecutor/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-state-executor.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-state-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693467-693532](../../../../../../reference/runtime/host-main.cjs#L693467-L693532) | `FunctionExpression` | sim | `ctx, _args` |
| [evaluation:584704-584769](../../../../../../reference/runtime/sand-eval-runner.cjs#L584704-L584769) | `FunctionExpression` | sim | `ctx, _args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693467-693532](../../../../../../reference/runtime/host-main.cjs#L693467-L693532) | 6 | 3 | 1 | 1 | 0 | 0 |
| [evaluation:584704-584769](../../../../../../reference/runtime/sand-eval-runner.cjs#L584704-L584769) | 6 | 3 | 1 | 1 | 0 | 0 |

### host:693467

Chamadas escritas diretamente neste corpo: `.catch`, `.map`, `Promise.all`, `Promise.resolve`, `UNUSABLE_SERVER_STATUSES.has`, `existing.push`, `new Map`, `new McpStateExecResult`, `new McpStateSuccess`, `provider.getConnectorAuthStates`, `provider.getServerErrorMessages`, `provider.getServerStatuses`, `provider.getTools`, `statuses.get`, `statuses.set`, `toolsByServer.entries`, `toolsByServer.get`, `toolsByServer.has`, `toolsByServer.set`.

SHA-256 do trecho: `5f78eeedc0faff566530f582c925e4356f0535fe7836de7fa6d423c7fe53e5e2`.

### evaluation:584704

Chamadas escritas diretamente neste corpo: `.catch`, `.map`, `Promise.all`, `Promise.resolve`, `UNUSABLE_SERVER_STATUSES.has`, `existing.push`, `new Map`, `new McpStateExecResult`, `new McpStateSuccess`, `provider.getConnectorAuthStates`, `provider.getServerErrorMessages`, `provider.getServerStatuses`, `provider.getTools`, `statuses.get`, `statuses.set`, `toolsByServer.entries`, `toolsByServer.get`, `toolsByServer.has`, `toolsByServer.set`.

SHA-256 do trecho: `4705a767e83067ecbf5c68e8b0b0d362af1ef28077c743df3b6582e33bc55ce4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
