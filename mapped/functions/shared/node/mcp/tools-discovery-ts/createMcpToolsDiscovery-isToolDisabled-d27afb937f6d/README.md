# `createMcpToolsDiscovery/_isToolDisabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691125-691140](../../../../../../../reference/runtime/host-main.cjs#L691125-L691140) | `FunctionDeclaration` | não | `{     providerIdentifier,     toolName   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691125-691140](../../../../../../../reference/runtime/host-main.cjs#L691125-L691140) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:691125

Chamadas escritas diretamente neste corpo: `.getMcpDisabledToolsByServerId`, `.getToolPermissions`, `_displayRowForIdentifier`, `_rowServerHost`, `core2.settingsStore`, `disabled.includes`, `mcpToolPermissionScope`, `routedToolCarriedPermission`.

SHA-256 do trecho: `5b171b6ca2ba1e824c230048842c5b6ecf3f2cf628c9b867bb33a50276131fa4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
