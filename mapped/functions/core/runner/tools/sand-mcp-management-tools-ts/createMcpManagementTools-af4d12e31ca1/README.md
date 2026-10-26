# `createMcpManagementTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780187-780712](../../../../../../../reference/runtime/host-main.cjs#L780187-L780712) | `FunctionDeclaration` | não | `management, getRequestingAgentId, isAwaitingUserSelection, emitConnectorCard, mcpMetaToolNames = SAND_STATIC_MCP_META_TOOL_NAMES, options2` |
| [evaluation:580432-580957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580432-L580957) | `FunctionDeclaration` | não | `management, getRequestingAgentId, isAwaitingUserSelection, emitConnectorCard, mcpMetaToolNames = SAND_STATIC_MCP_META_TOOL_NAMES, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780187-780712](../../../../../../../reference/runtime/host-main.cjs#L780187-L780712) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580432-580957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580432-L580957) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:780187

Chamadas escritas diretamente neste corpo: `advertisedCardTaskIdSchema`, `authenticateMcpServerDescription`, `buildServerIdentifierParameterSchemas`, `copy.addDescription`, `copy.getDescription`, `copy.searchDescription`, `defineCommunicateTool`, `guardMutation`, `mcpManagementScopeFor`, `new McpRepairsThisTurn`, `withGatedArgumentAlias`.

SHA-256 do trecho: `142ed32c1f62c9d9801fd109c59889988264404042cb5a37516ed374343ba581`.

### evaluation:580432

Chamadas escritas diretamente neste corpo: `advertisedCardTaskIdSchema`, `authenticateMcpServerDescription`, `buildServerIdentifierParameterSchemas`, `copy.addDescription`, `copy.getDescription`, `copy.searchDescription`, `defineCommunicateTool`, `guardMutation`, `mcpManagementScopeFor`, `new McpRepairsThisTurn`, `withGatedArgumentAlias`.

SHA-256 do trecho: `5f94f4b2a6c5fe0598062c473ae0350cd03b56a2d67868edf768de4f0e547e4f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
