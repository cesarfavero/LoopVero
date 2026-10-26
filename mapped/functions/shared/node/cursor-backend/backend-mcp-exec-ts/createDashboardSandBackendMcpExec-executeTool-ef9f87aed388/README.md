# `createDashboardSandBackendMcpExec/executeTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486994-487025](../../../../../../../reference/runtime/host-main.cjs#L486994-L487025) | `FunctionExpression` | sim | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486994-487025](../../../../../../../reference/runtime/host-main.cjs#L486994-L487025) | 3 | 0 | 1 | 3 | 0 | 1 |

### host:486994

Chamadas escritas diretamente neste corpo: `BigInt`, `DESIGNATED_DANGEROUS_MCP_TOOL_NAMES.has`, `Struct.fromJson`, `args.toolName.slice`, `args.toolName.startsWith`, `client.executeSandMcpTool`, `ctx.get`, `errorLabel`, `errorResult`, `new ExecuteSandMcpToolRequest`, `recordMcpExecErrorClass`.

SHA-256 do trecho: `899697d65ad28f758b2da178225be3cadb5ea9d4c889fb6dec214d29bc537e7c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
