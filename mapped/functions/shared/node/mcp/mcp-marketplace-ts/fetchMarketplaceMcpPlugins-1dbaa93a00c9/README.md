# `fetchMarketplaceMcpPlugins`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-marketplace.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404551-404551](../../../../../../../reference/runtime/host-main.cjs#L404551-L404551) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [host:404708-404747](../../../../../../../reference/runtime/host-main.cjs#L404708-L404747) | `FunctionDeclaration` | sim | `getAccessToken, getMachineId, createClient2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404551-404551](../../../../../../../reference/runtime/host-main.cjs#L404551-L404551) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:404551 usa retorno implícito de arrow function.
| [host:404708-404747](../../../../../../../reference/runtime/host-main.cjs#L404708-L404747) | 2 | 2 | 1 | 1 | 0 | 0 |

### host:404551

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `6aa4f527c9558646a7c8037cfb847441dadb02de3ec15f5dbe9b6abb30d35c1f`.

### host:404708

Chamadas escritas diretamente neste corpo: `.catch`, `.then`, `Promise.all`, `add2`, `bestEffortToken`, `byPluginId.values`, `client.listMarketplacePlugins`, `createClient2`, `listingSupersededPopularityRanksFrom`, `new AbortController`, `new Map`, `plugins.sort`.

SHA-256 do trecho: `f8e4e3b670bf9db6e53379209f4c6e703a92c7803e585bdb510be5a37374bb81`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
