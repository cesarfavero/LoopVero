# `createHostMcp/getPlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701221-701244](../../../../../../reference/runtime/host-main.cjs#L701221-L701244) | `FunctionExpression` | sim | `pluginId, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701221-701244](../../../../../../reference/runtime/host-main.cjs#L701221-L701244) | 3 | 0 | 3 | 2 | 0 | 0 |

### host:701221

Chamadas escritas diretamente neste corpo: `.catch`, `.map`, `Promise.all`, `manager.getCatalog`, `manager.listEffectivePlugins`, `manager.listServers`, `manager.listServersFromCache`, `state.servers.filter`, `toCatalogFields`, `toPluginSummary`, `views.find`.

Alvos de atribuição ou incremento: `view`, `views`.

SHA-256 do trecho: `9b39dbd00b934de85246612e37ff75d73fd647cf840480ed0a20fa4291e60464`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
