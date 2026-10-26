# `createMcpToolsDiscovery/_executeToolRaw`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691198-691254](../../../../../../../reference/runtime/host-main.cjs#L691198-L691254) | `FunctionDeclaration` | sim | `ctx, args, auditIdentity, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691198-691254](../../../../../../../reference/runtime/host-main.cjs#L691198-L691254) | 5 | 0 | 6 | 5 | 0 | 1 |

### host:691198

Chamadas escritas diretamente neste corpo: `_boxStdioProviderKind`, `_displayRowForIdentifier`, `_ensureBoxServersPushed`, `_isHttpProvider`, `_reportFirstCall`, `boxMcpExec.executeTool`, `core2.backendMcpExec.executeTool`, `core2.definitionSource.getUserServerConfigs`, `deps.needsGrantRowIdentity`, `errorMessage`, `new McpError`, `new McpResult`, `recordMcpExecRefusedBeforeDispatch`, `toJsonArgs`.

SHA-256 do trecho: `466a617cfdf7d69bf82987d17e79bd3f8b203fa717b51ca948966df8436b8d8e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
