# `createMcpToolsDiscovery/_startToolsResolution`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691053-691100](../../../../../../../reference/runtime/host-main.cjs#L691053-L691100) | `FunctionDeclaration` | não | `requestedKey, carryStale, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691053-691100](../../../../../../../reference/runtime/host-main.cjs#L691053-L691100) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:691053

Chamadas escritas diretamente neste corpo: `Date.now`, `_currentDiscoveredForKey`, `_getToolsViaBackend`, `entry.promise.then`.

Alvos de atribuição ou incremento: `toolsCacheEntry`.

SHA-256 do trecho: `4d3009841c72a85536a25f43dfbfcf119f0b653d74f3d797c176f7faa448e7c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
