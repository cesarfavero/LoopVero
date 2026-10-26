# `SandMcpCatalogFlow.getCatalog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-catalog-flow.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686341-686378](../../../../../../../reference/runtime/host-main.cjs#L686341-L686378) | `method` | sim | `getAccessToken, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686341-686378](../../../../../../../reference/runtime/host-main.cjs#L686341-L686378) | 3 | 1 | 3 | 3 | 1 | 1 |

### host:686341

Chamadas escritas diretamente neste corpo: `.then`, `Promise.resolve`, `bestEffortToken2`, `fetchPlugins`, `marketplacePluginToView2`, `this.catalogCache.clear`, `this.catalogCache.set`, `this.core.clock.now`, `this.marketplaceFetcherForBackend`, `views.push`, `views.sort`.

Alvos de atribuição ou incremento: `listing`, `this.catalogViewsCache`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `26fc300b1a3f4d0c8035569c4ba7e92df20b15cf64e0e9989bde8a5dfd222b66`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
