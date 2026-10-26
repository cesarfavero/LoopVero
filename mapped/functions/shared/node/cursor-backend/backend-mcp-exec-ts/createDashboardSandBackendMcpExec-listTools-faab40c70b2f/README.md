# `createDashboardSandBackendMcpExec/listTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486967-486993](../../../../../../../reference/runtime/host-main.cjs#L486967-L486993) | `FunctionExpression` | sim | `serverIdentifiers, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486967-486993](../../../../../../../reference/runtime/host-main.cjs#L486967-L486993) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:486967

Chamadas escritas diretamente neste corpo: `client.listSandMcpTools`, `errorLabel`, `new ListSandMcpToolsRequest`, `new SandBackendMcpExecError`, `reportMcpHostEdgeFailure`, `response.servers.map`.

Alvos de lançamento explícito: `SandBackendMcpExecError`.

SHA-256 do trecho: `64356bb727693e50d37ea3840ee57b8c768ff030f1f6c4a0b1cd1af67bf9094f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
