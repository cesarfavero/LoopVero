# `SandMcpCatalogFlow.reconcileUnpublishedPlugin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-catalog-flow.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686434-686438](../../../../../../../reference/runtime/host-main.cjs#L686434-L686438) | `method` | sim | `pluginId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686434-686438](../../../../../../../reference/runtime/host-main.cjs#L686434-L686438) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:686434

Chamadas escritas diretamente neste corpo: `this.catalogCache.delete`, `this.core.reloadServers`.

Alvos de atribuição ou incremento: `this.catalogViewsCache`.

SHA-256 do trecho: `688a498df43f60b17c9b97e426b57efbac7432750a65770d1edd2ce8bccf6488`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
