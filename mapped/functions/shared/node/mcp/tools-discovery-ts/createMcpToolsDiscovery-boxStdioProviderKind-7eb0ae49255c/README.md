# `createMcpToolsDiscovery/_boxStdioProviderKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691458-691471](../../../../../../../reference/runtime/host-main.cjs#L691458-L691471) | `FunctionDeclaration` | sim | `providerIdentifier, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691458-691471](../../../../../../../reference/runtime/host-main.cjs#L691458-L691471) | 3 | 0 | 2 | 4 | 0 | 1 |

### host:691458

Chamadas escritas diretamente neste corpo: `core2.definitionSource.getPushedServerConfigs`, `core2.definitionSource.getStdioServerConfigs`, `reportMcpHostEdgeFailure`.

SHA-256 do trecho: `4f8a6914d34b7ae00056c15f61dcecbc960745c510d464f7b88faa50f702bc82`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
