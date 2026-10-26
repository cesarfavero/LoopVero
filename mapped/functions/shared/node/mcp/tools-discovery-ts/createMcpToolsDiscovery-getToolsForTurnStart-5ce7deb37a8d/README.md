# `createMcpToolsDiscovery/_getToolsForTurnStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690880-690898](../../../../../../../reference/runtime/host-main.cjs#L690880-L690898) | `FunctionDeclaration` | sim | `ctx, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690880-690898](../../../../../../../reference/runtime/host-main.cjs#L690880-L690898) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:690880

Chamadas escritas diretamente neste corpo: `_currentDiscoveredForKey`, `_dropSettledCacheForEmptyServerSet`, `_filterDisabledTools`, `_getTools`, `_peekDiscoveryServerNames`, `_scheduleColdStartWarm`, `_startToolsResolution`, `_toolServerSetKey`, `_toolsEntryUsable`.

SHA-256 do trecho: `6ce1e8e893b6f5147d5b87b80c550491c840008b9750365173e76cc605462068`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
