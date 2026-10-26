# `SandMcpCatalogFlow.requireCachedPlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-catalog-flow.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686410-686423](../../../../../../../reference/runtime/host-main.cjs#L686410-L686423) | `method` | sim | `pluginId, getAccessToken` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686410-686423](../../../../../../../reference/runtime/host-main.cjs#L686410-L686423) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:686410

Chamadas escritas diretamente neste corpo: `new SandMcpConfigError`, `this.catalogCache.get`, `this.getCatalog`.

Alvos de atribuição ou incremento: `cached2`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `b5208203cd5c437b8e3e4a44385fff091f720886dea63a1205d4beb07f242f8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
