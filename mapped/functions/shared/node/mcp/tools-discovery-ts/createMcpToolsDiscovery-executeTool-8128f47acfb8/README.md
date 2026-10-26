# `createMcpToolsDiscovery/_executeTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691141-691167](../../../../../../../reference/runtime/host-main.cjs#L691141-L691167) | `FunctionDeclaration` | sim | `ctx, args, auditIdentity, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691141-691167](../../../../../../../reference/runtime/host-main.cjs#L691141-L691167) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:691141

Chamadas escritas diretamente neste corpo: `.getRawMcpCustomInstruction`, `.getRawMcpCustomInstructionByServerId`, `_displayRowForIdentifier`, `_executeToolRaw`, `_isToolDisabled`, `applyCustomInstructionsToMcpResult`, `coerceMcpArgsToToolSchema`, `core2.settingsStore`, `new McpError`, `new McpResult`, `recordMcpExecRefusedBeforeDispatch`, `resolveMcpCustomInstruction`.

SHA-256 do trecho: `b48031fac54d0749dc1525f75f02ac2562294bdbda836f05e8c6ed88219865be`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
