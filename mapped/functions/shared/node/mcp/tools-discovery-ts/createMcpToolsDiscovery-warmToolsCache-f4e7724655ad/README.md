# `createMcpToolsDiscovery/_warmToolsCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691108-691124](../../../../../../../reference/runtime/host-main.cjs#L691108-L691124) | `FunctionDeclaration` | sim | `epoch` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691108-691124](../../../../../../../reference/runtime/host-main.cjs#L691108-L691124) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:691108

Chamadas escritas diretamente neste corpo: `Promise.all`, `_dropSettledCacheForEmptyServerSet`, `_httpServerNamesForBackend`, `_startToolsResolution`, `_stdioServerNamesForBox`, `_toolServerSetKey`, `_toolsEntryUsable`.

SHA-256 do trecho: `01b12a097b336bd82db6c72055eb9eca85f25d8bba4cf85604e3b5c83b0d8187`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
