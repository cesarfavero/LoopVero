# `fetchPrivateMarketplaceSide`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-marketplace.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404677-404707](../../../../../../../reference/runtime/host-main.cjs#L404677-L404707) | `FunctionDeclaration` | sim | `client, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404677-404707](../../../../../../../reference/runtime/host-main.cjs#L404677-L404707) | 1 | 0 | 2 | 2 | 0 | 1 |

### host:404677

Chamadas escritas diretamente neste corpo: `Promise.all`, `client.listMarketplaces`, `lists.flat`, `marketplaces.map`, `memberPublishMarketplacesFrom`, `reportMcpHostEdgeFailure`, `response.marketplaces.filter`.

Alvos de atribuição ou incremento: `marketplaces`.

SHA-256 do trecho: `24a6221729319b9b846f24ce8246864302f40f81ff90316cad2a9df26d138a22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
